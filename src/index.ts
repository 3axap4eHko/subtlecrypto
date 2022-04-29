import crypto from 'node:crypto';

export const subtle: SubtleCrypto = (crypto.webcrypto as any).subtle;
