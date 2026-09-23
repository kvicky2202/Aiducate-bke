import OpenAI from 'openai';

const DEFAULT_OPENROUTER_MODEL = 'openrouter/free';
const FALLBACK_MODELS = [
  'openrouter/free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'mistralai/mistral-7b-instruct:free',
];

let cachedClient = null;
let cachedConfigKey = null;

function firstPublicOrigin(raw) {
  return String(raw || '')
    .split(',')
    .map((origin) => origin.trim())
    .find((origin) => origin.startsWith('http')) || '';
}

/**
 * OpenRouter is checked first (free-tier models). Falls back to OpenAI direct.
 */
export function getAiConfig() {
  const openRouterKey = process.env.OPENROUTER_API_KEY?.trim();
  if (openRouterKey) {
    const siteUrl =
      firstPublicOrigin(process.env.OPENROUTER_APP_URL) ||
      firstPublicOrigin(process.env.FRONTEND_URL) ||
      'https://openrouter.ai';

    return {
      provider: 'openrouter',
      apiKey: openRouterKey,
      baseURL: 'https://openrouter.ai/api/v1',
      model:
        process.env.AI_MODEL?.trim() ||
        process.env.OPENROUTER_MODEL?.trim() ||
        DEFAULT_OPENROUTER_MODEL,
      defaultHeaders: {
        'HTTP-Referer': siteUrl,
        'X-Title': process.env.OPENROUTER_APP_NAME || 'AIDucate',
        'X-OpenRouter-Title': process.env.OPENROUTER_APP_NAME || 'AIDucate',
      },
    };
  }

  const openaiKey = process.env.OPENAI_API_KEY?.trim();
  if (openaiKey) {
    return {
      provider: 'openai',
      apiKey: openaiKey,
      baseURL: undefined,
      model:
        process.env.AI_MODEL?.trim() ||
        process.env.OPENAI_MODEL?.trim() ||
        'gpt-4o-mini',
      defaultHeaders: undefined,
    };
  }

  return null;
}

export function getAiProviderInfo() {
  const config = getAiConfig();
  if (!config) {
    return { enabled: false, provider: null, model: null };
  }
  return { enabled: true, provider: config.provider, model: config.model };
}

export function isAiEnabled() {
  return Boolean(getAiConfig());
}

function getClient() {
  const config = getAiConfig();
  if (!config) return null;

  const cacheKey = `${config.provider}:${config.apiKey.slice(-8)}`;
  if (!cachedClient || cachedConfigKey !== cacheKey) {
    cachedClient = new OpenAI({
      apiKey: config.apiKey,
      baseURL: config.baseURL,
      defaultHeaders: config.defaultHeaders,
    });
    cachedConfigKey = cacheKey;
  }
  return cachedClient;
}

export function getAiModel() {
  return getAiConfig()?.model ?? null;
}

function modelsToTry(preferred) {
  const list = [preferred, ...FALLBACK_MODELS].filter(Boolean);
  return [...new Set(list)];
}

function publicAiError(error) {
  const status = error?.status || error?.response?.status;
  const raw = String(error?.message || error || 'unknown error');
  if (status === 401 || /invalid.*key|unauthorized/i.test(raw)) {
    return 'OpenRouter rejected the API key.';
  }
  if (status === 402 || /credits|payment|quota/i.test(raw)) {
    return 'OpenRouter has no remaining free quota for this key.';
  }
  if (status === 429 || /rate limit/i.test(raw)) {
    return 'OpenRouter rate-limited the request. Try again in a minute.';
  }
  if (/model|not found|no endpoints/i.test(raw)) {
    return 'The configured OpenRouter model is unavailable.';
  }
  return 'The OpenRouter request failed.';
}

/**
 * @param {{ system: string, messages: Array<{ role: 'user' | 'assistant', content: string }>, maxTokens?: number }} opts
 */
export async function chatCompletion({ system, messages, maxTokens = 600 }) {
  const config = getAiConfig();
  const openai = getClient();
  if (!config || !openai) {
    return { text: null, usedAi: false, error: 'AI is not configured.' };
  }

  const candidates = config.provider === 'openrouter' ? modelsToTry(config.model) : [config.model];
  let lastError = null;

  for (const model of candidates) {
    try {
      const response = await openai.chat.completions.create({
        model,
        messages: [{ role: 'system', content: system }, ...messages],
        max_tokens: maxTokens,
        temperature: 0.65,
      });

      const text = response.choices[0]?.message?.content?.trim() ?? '';
      if (text) {
        return { text, usedAi: true, model };
      }
      lastError = new Error(`Empty reply from ${model}`);
    } catch (error) {
      lastError = error;
      console.error(`AI call failed for ${model}:`, error?.message || error);
    }
  }

  return {
    text: null,
    usedAi: false,
    error: publicAiError(lastError),
  };
}
