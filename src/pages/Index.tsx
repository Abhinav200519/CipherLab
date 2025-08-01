import { ConversionCard } from "@/components/ConversionCard";
import { Header } from "@/components/Header";
import {
  textToMorse,
  morseToText,
  textToBinary,
  binaryToText,
  numberToBinary,
  binaryToNumber,
  textToOctal,
  octalToText,
  numberToOctal,
  octalToNumber,
  textToHex,
  hexToText,
  numberToHex,
  hexToNumber,
  textToAscii,
  asciiToText,
  reverseText,
  rot13,
  caesarCipher,
  caesarDecipher,
} from "@/utils/converters";

const Index = () => {
  const converters = [
    {
      title: "Morse Code",
      icon: "🔵",
      convertToFormat: textToMorse,
      convertFromFormat: morseToText,
      placeholder: "Enter text to convert to Morse code...",
      outputPlaceholder: "-.-- --- ..- .-. / -- --- .-. ... . / -.-. --- -.. .",
    },
    {
      title: "Binary",
      icon: "⚫",
      convertToFormat: textToBinary,
      convertFromFormat: binaryToText,
      numberConvertToFormat: numberToBinary,
      numberConvertFromFormat: binaryToNumber,
      placeholder: "Enter text to convert to binary...",
      outputPlaceholder: "01001000 01100101 01101100 01101100 01101111",
      numberPlaceholder: "Enter number to convert to binary...",
      numberOutputPlaceholder: "1010110111",
    },
    {
      title: "Octal",
      icon: "🟣",
      convertToFormat: textToOctal,
      convertFromFormat: octalToText,
      numberConvertToFormat: numberToOctal,
      numberConvertFromFormat: octalToNumber,
      placeholder: "Enter text to convert to octal...",
      outputPlaceholder: "110 145 154 154 157",
      numberPlaceholder: "Enter number to convert to octal...",
      numberOutputPlaceholder: "1337",
    },
    {
      title: "Hexadecimal",
      icon: "🔶",
      convertToFormat: textToHex,
      convertFromFormat: hexToText,
      numberConvertToFormat: numberToHex,
      numberConvertFromFormat: hexToNumber,
      placeholder: "Enter text to convert to hex...",
      outputPlaceholder: "48 65 6C 6C 6F",
      numberPlaceholder: "Enter number to convert to hex...",
      numberOutputPlaceholder: "2FF",
    },
    {
      title: "ASCII Values",
      icon: "🔤",
      convertToFormat: textToAscii,
      convertFromFormat: asciiToText,
      placeholder: "Enter text to convert to ASCII values...",
      outputPlaceholder: "72 101 108 108 111",
    },
    {
      title: "Reverse Text",
      icon: "🔁",
      convertToFormat: reverseText,
      convertFromFormat: reverseText,
      placeholder: "Enter text to reverse...",
      outputPlaceholder: "txet desrever ruoY",
    },
    {
      title: "ROT13 Cipher",
      icon: "🧪",
      convertToFormat: rot13,
      convertFromFormat: rot13,
      placeholder: "Enter text to apply ROT13...",
      outputPlaceholder: "Lbhe EBG13 grkg",
    },
    {
      title: "Caesar Cipher",
      icon: "🔐",
      convertToFormat: (text) => caesarCipher(text, 3),
      convertFromFormat: (text) => caesarDecipher(text, 3),
      placeholder: "Enter text for Caesar cipher...",
      outputPlaceholder: "Brxu Fdhvdu flskhu",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {converters.map((converter) => (
            <ConversionCard
              key={converter.title}
              title={converter.title}
              icon={converter.icon}
              convertToFormat={converter.convertToFormat}
              convertFromFormat={converter.convertFromFormat}
              numberConvertToFormat={converter.numberConvertToFormat}
              numberConvertFromFormat={converter.numberConvertFromFormat}
              placeholder={converter.placeholder}
              outputPlaceholder={converter.outputPlaceholder}
              numberPlaceholder={converter.numberPlaceholder}
              numberOutputPlaceholder={converter.numberOutputPlaceholder}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            Click the <span className="text-primary">rotate icon</span> to switch conversion direction • 
            Click output to <span className="text-primary">copy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
