import OpenAI from 'openai';

let cachedClient = null;
let cachedConfigKey = null;

/**
 * OpenRouter is checked first (free-tier models). Falls back to OpenAI direct.
 */
export function getAiConfig() {
  const openRouterKey = process.env.OPENROUTER_API_KEY?.trim();
  if (openRouterKey) {
    return {
      provider: 'openrouter',
      apiKey: openRouterKey,
      baseURL: 'https://openrouter.ai/api/v1',
      model:
        process.env.AI_MODEL?.trim() ||
        process.env.OPENROUTER_MODEL?.trim() ||
        'openrouter/free',
      defaultHeaders: {
        'HTTP-Referer': process.env.OPENROUTER_APP_URL || 'http://localhost:3000',
        'X-Title': process.env.OPENROUTER_APP_NAME || 'AIDucate',
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

  const cacheKey = `${config.provider}:${config.model}`;
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

/**
 * @param {{ system: string, messages: Array<{ role: 'user' | 'assistant', content: string }>, maxTokens?: number }} opts
 */
export async function chatCompletion({ system, messages, maxTokens = 600 }) {
  const config = getAiConfig();
  const openai = getClient();
  if (!config || !openai) {
    return { text: null, usedAi: false };
  }

  const response = await openai.chat.completions.create({
    model: config.model,
    messages: [{ role: 'system', content: system }, ...messages],
    max_tokens: maxTokens,
    temperature: 0.65,
  });

  const text = response.choices[0]?.message?.content?.trim() ?? '';
  return { text, usedAi: true };
}
