# X-Cross

Provides the standard [Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/) for NodeJS and Browser since both support it natively.

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]

## Example

```typescript
import { subtle } from 'xcross';

const sha256 = async (input: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await subtle.digest('SHA-256', data);
  const hashArray = new Uint32Array(hashBuffer);

  return hashArray.map((b) => b.toString(16).padStart(int32.BYTES_PER_ELEMENT * 2, '0')).join('');
};
```

## License

License [Apache-2.0](http://www.apache.org/licenses/LICENSE-2.0)
Copyright (c) 2023-present Ivan Zakharchanka


[npm-url]: https://www.npmjs.com/package/xcross
[downloads-image]: https://img.shields.io/npm/dw/xcross.svg?maxAge=43200
[npm-image]: https://img.shields.io/npm/v/xcross.svg?maxAge=43200
