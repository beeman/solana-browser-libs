// First import the polyfill
import './polyfill';
// Then import the libraries
import * as solanaSplToken from '@solana/spl-token';
import * as solanaWeb3 from '@solana/web3.js';

// Add both to the window object if it exists
if (typeof window !== 'undefined') {
  (window as unknown as { [key: string]: unknown }).solanaSplToken =
    solanaSplToken;
  (window as unknown as { [key: string]: unknown }).solanaWeb3 = solanaWeb3;
}

export function getSolanaSplToken() {
  return solanaSplToken;
}

export function getSolanaWeb3() {
  return solanaWeb3;
}
