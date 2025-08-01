// Morse Code conversion
const MORSE_CODE_MAP: { [key: string]: string } = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.', ' ': '/'
};

const REVERSE_MORSE_MAP = Object.fromEntries(
  Object.entries(MORSE_CODE_MAP).map(([k, v]) => [v, k])
);

export const textToMorse = (text: string): string => {
  return text.toUpperCase()
    .split('')
    .map(char => MORSE_CODE_MAP[char] || char)
    .join(' ');
};

export const morseToText = (morse: string): string => {
  return morse.split(' ')
    .map(code => REVERSE_MORSE_MAP[code] || code)
    .join('');
};

// Binary conversion
export const textToBinary = (text: string): string => {
  return text.split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
};

export const binaryToText = (binary: string): string => {
  return binary.split(' ')
    .map(bin => String.fromCharCode(parseInt(bin, 2)))
    .join('');
};

export const numberToBinary = (num: string): string => {
  const number = parseInt(num);
  if (isNaN(number)) throw new Error('Invalid number');
  return number.toString(2);
};

export const binaryToNumber = (binary: string): string => {
  return parseInt(binary, 2).toString();
};

// Octal conversion
export const textToOctal = (text: string): string => {
  return text.split('')
    .map(char => char.charCodeAt(0).toString(8))
    .join(' ');
};

export const octalToText = (octal: string): string => {
  return octal.split(' ')
    .map(oct => String.fromCharCode(parseInt(oct, 8)))
    .join('');
};

export const numberToOctal = (num: string): string => {
  const number = parseInt(num);
  if (isNaN(number)) throw new Error('Invalid number');
  return number.toString(8);
};

export const octalToNumber = (octal: string): string => {
  return parseInt(octal, 8).toString();
};

// Hexadecimal conversion
export const textToHex = (text: string): string => {
  return text.split('')
    .map(char => char.charCodeAt(0).toString(16).toUpperCase())
    .join(' ');
};

export const hexToText = (hex: string): string => {
  return hex.split(' ')
    .map(h => String.fromCharCode(parseInt(h, 16)))
    .join('');
};

export const numberToHex = (num: string): string => {
  const number = parseInt(num);
  if (isNaN(number)) throw new Error('Invalid number');
  return number.toString(16).toUpperCase();
};

export const hexToNumber = (hex: string): string => {
  return parseInt(hex, 16).toString();
};

// ASCII conversion
export const textToAscii = (text: string): string => {
  return text.split('')
    .map(char => char.charCodeAt(0).toString())
    .join(' ');
};

export const asciiToText = (ascii: string): string => {
  return ascii.split(' ')
    .map(code => String.fromCharCode(parseInt(code)))
    .join('');
};

// Reverse text
export const reverseText = (text: string): string => {
  return text.split('').reverse().join('');
};

// ROT13 cipher
export const rot13 = (text: string): string => {
  return text.replace(/[A-Za-z]/g, (char) => {
    const start = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
  });
};

// Caesar cipher (default shift of 3)
export const caesarCipher = (text: string, shift: number = 3): string => {
  return text.replace(/[A-Za-z]/g, (char) => {
    const start = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - start + shift) % 26) + start);
  });
};

export const caesarDecipher = (text: string, shift: number = 3): string => {
  return caesarCipher(text, -shift);
};