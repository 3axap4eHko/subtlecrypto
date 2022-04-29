import crypto from 'crypto';

export const subtle: SubtleCrypto = (crypto.webcrypto as any).subtle;
