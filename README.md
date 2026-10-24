# @x12i/document-ground usage example

Converts X12I canonical document content into a provenance-preserving Markdown bundle (normalized.md, source-map.json, metadata.json, sidecars, assets).

This consuming application demonstrates **normalize acquired text while retaining its provenance** using the published npm package, pinned to `3.0.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Convert a canonical document to Markdown while keeping source positions available for citations.
- Deliver normalized text, metadata and assets together to a downstream indexing workflow.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/document-ground)
- [Implementation monorepo](https://github.com/x12i/document-normalizer)
- [Reviewed package source](https://github.com/x12i/document-normalizer/tree/552646eaa6b1f61f9e8755f89923bbcc94b4fe95/.)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
