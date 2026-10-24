import assert from 'node:assert/strict';
import { acquireDocument } from '@x12i/document-acquisition';
import { normalizeDocument } from '@x12i/document-ground';

const document = await acquireDocument({ fileName: 'example.txt', bytes: new TextEncoder().encode('A local document example.'), sourceId: 'demo-source', retrievedAt: '2026-01-01T00:00:00Z' });
assert(document.blocks.length > 0);
assert(document.blocks[0].sourceLocations.length > 0);
const bundle = normalizeDocument(document);
assert(bundle.markdown.includes('A local document example.'));
assert.equal(bundle.documentId, document.documentId);
console.log({ markdown: bundle.markdown, sourceMap: bundle.sourceMap });
