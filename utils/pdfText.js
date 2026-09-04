import fs from 'fs';
import { PDFParse } from 'pdf-parse';

const MAX_SOURCE_CHARS = 14000;

/**
 * Extract plain text from a PDF on disk. Returns empty string on failure.
 */
export async function extractPdfText(filePath) {
  if (!filePath || !fs.existsSync(filePath)) return '';

  let parser;
  try {
    const buffer = fs.readFileSync(filePath);
    parser = new PDFParse({ data: buffer });
    const result = await parser.getText();
    return String(result?.text || '')
      .replace(/\s+\n/g, '\n')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  } catch (error) {
    console.error('extractPdfText failed:', filePath, error.message);
    return '';
  } finally {
    if (parser) {
      try {
        await parser.destroy();
      } catch {
        /* ignore */
      }
    }
  }
}

/**
 * Build source text for AI from a class material record (summary + optional PDF).
 */
export async function loadMaterialSourceText(material) {
  if (!material) return '';

  const parts = [];
  if (material.summary?.trim()) {
    parts.push(`Teacher summary:\n${material.summary.trim()}`);
  }
  if (material.title?.trim()) {
    parts.push(`Material title: ${material.title.trim()}`);
  }

  if (material.filePath) {
    const pdfText = await extractPdfText(material.filePath);
    if (pdfText) {
      parts.push(`PDF content excerpt:\n${pdfText.slice(0, MAX_SOURCE_CHARS)}`);
    }
  }

  return parts.join('\n\n').trim();
}
