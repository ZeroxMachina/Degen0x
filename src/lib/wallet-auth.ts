/**
 * Wallet Authentication Utilities
 * Provides helper functions for wallet-based authentication flows
 */

/**
 * Truncates a wallet address to a readable format
 * Example: "0x1234...5678"
 */
export function truncateAddress(address: string, chars: number = 4): string {
  if (!address) return "";
  if (address.length <= chars * 2 + 3) return address;
  return `${address.substring(0, chars)}...${address.substring(
    address.length - chars
  )}`;
}

/**
 * Generates a deterministic identicon SVG based on address hash
 * Returns an SVG data URI that can be used as an image src
 */
export function generateIdenticon(address: string): string {
  // Hash the address to get consistent colors
  const hash = simpleHash(address);

  // Generate a grid-based identicon (5x5)
  const gridSize = 5;
  const cellSize = 40;
  const svgSize = gridSize * cellSize;

  // Use hash to determine which cells are filled and what color
  const cells = [];
  for (let i = 0; i < (gridSize * (gridSize + 1)) / 2; i++) {
    cells.push((hash >> i) & 1);
  }

  // Generate colors based on hash
  const hue = (hash % 360);
  const saturation = 70 + (hash % 30);
  const lightness = 45 + (hash % 10);
  const fillColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  const backgroundColor = `hsl(${hue}, ${saturation}%, 95%)`;

  // Build SVG content
  let svgContent = `<svg width="${svgSize}" height="${svgSize}" xmlns="http://www.w3.org/2000/svg">`;
  svgContent += `<rect width="${svgSize}" height="${svgSize}" fill="${backgroundColor}"/>`;

  // Draw cells
  let cellIndex = 0;
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      // Mirror for symmetry
      const xPos = x < Math.floor(gridSize / 2) ? x : gridSize - 1 - x;
      const cellPos = y * Math.ceil(gridSize / 2) + xPos;

      if (cells[cellPos]) {
        const rectX = x * cellSize;
        const rectY = y * cellSize;
        svgContent += `<rect x="${rectX}" y="${rectY}" width="${cellSize}" height="${cellSize}" fill="${fillColor}"/>`;
      }
    }
  }

  svgContent += `</svg>`;

  // Convert to data URI
  const encodedSvg = encodeURIComponent(svgContent);
  return `data:image/svg+xml,${encodedSvg}`;
}

/**
 * Simple hash function for generating deterministic values from strings
 */
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

/**
 * Generates an auth message for the user to sign
 * This message proves ownership of the wallet
 */
export function signAuthMessage(address: string): string {
  const timestamp = new Date().toISOString();
  const nonce = Math.random().toString(36).substring(2, 15);

  return `Sign this message to authenticate your wallet.

Wallet: ${address}
Timestamp: ${timestamp}
Nonce: ${nonce}

This action will not cost any gas.`;
}

/**
 * Mock verification function for demonstration
 * In production, this would verify the signature against the public key
 */
export function verifySignature(
  address: string,
  message: string,
  signature: string
): boolean {
  // In a real application, you would:
  // 1. Use ethers.js or similar to recover the signer from the signature
  // 2. Compare the recovered address with the claimed address
  // 3. Verify the message content matches expected format

  // Mock implementation returns true if all parameters are provided
  return Boolean(address && message && signature && address.length > 0);
}

/**
 * Format network name for display
 */
export function formatNetwork(network: string): string {
  const networkMap: Record<string, string> = {
    mainnet: "Mainnet",
    testnet: "Testnet",
    devnet: "Devnet",
    "solana-mainnet": "Solana Mainnet",
    "solana-devnet": "Solana Devnet",
    "ethereum-mainnet": "Ethereum Mainnet",
    "ethereum-sepolia": "Ethereum Sepolia",
  };

  return networkMap[network.toLowerCase()] || network;
}

/**
 * Validate if address is a valid Solana address
 */
export function isValidSolanaAddress(address: string): boolean {
  // Solana addresses are base58 encoded and 32-44 characters long
  if (!address || address.length < 32 || address.length > 44) {
    return false;
  }

  // Check if it's valid base58
  const base58Regex = /^[1-9A-HJ-NP-Z]+$/;
  return base58Regex.test(address);
}

/**
 * Validate if address is a valid Ethereum address
 */
export function isValidEthereumAddress(address: string): boolean {
  // Ethereum addresses are 42 characters long and start with 0x
  if (!address || address.length !== 42 || !address.startsWith("0x")) {
    return false;
  }

  // Check if the rest is valid hex
  const hexRegex = /^0x[0-9a-fA-F]{40}$/;
  return hexRegex.test(address);
}

/**
 * Get the network badge color based on network name
 */
export function getNetworkBadgeColor(network: string): string {
  const lowerNetwork = network.toLowerCase();

  if (lowerNetwork.includes("mainnet")) {
    return "bg-green-900 text-green-200";
  } else if (lowerNetwork.includes("testnet") || lowerNetwork.includes("sepolia")) {
    return "bg-yellow-900 text-yellow-200";
  } else if (lowerNetwork.includes("devnet")) {
    return "bg-purple-900 text-purple-200";
  }

  return "bg-gray-700 text-gray-200";
}
