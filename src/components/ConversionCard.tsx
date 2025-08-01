import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, RotateCcw, Type, Hash } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ConversionCardProps {
  title: string;
  icon: string;
  convertToFormat: (text: string) => string;
  convertFromFormat: (encoded: string) => string;
  numberConvertToFormat?: (num: string) => string;
  numberConvertFromFormat?: (encoded: string) => string;
  placeholder: string;
  outputPlaceholder: string;
  numberPlaceholder?: string;
  numberOutputPlaceholder?: string;
}

export const ConversionCard = ({
  title,
  icon,
  convertToFormat,
  convertFromFormat,
  numberConvertToFormat,
  numberConvertFromFormat,
  placeholder,
  outputPlaceholder,
  numberPlaceholder,
  numberOutputPlaceholder,
}: ConversionCardProps) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isReversed, setIsReversed] = useState(false);
  const [isNumberMode, setIsNumberMode] = useState(false);
  const { toast } = useToast();
  
  const hasNumberMode = numberConvertToFormat && numberConvertFromFormat;

  const handleConvert = (text: string) => {
    if (!text.trim()) {
      setOutput("");
      return;
    }

    try {
      let result: string;
      if (isNumberMode && hasNumberMode) {
        result = isReversed ? numberConvertFromFormat(text) : numberConvertToFormat(text);
      } else {
        result = isReversed ? convertFromFormat(text) : convertToFormat(text);
      }
      setOutput(result);
    } catch (error) {
      setOutput("Invalid input format");
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Copied!",
        description: "Output copied to clipboard",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Could not copy to clipboard",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const toggleDirection = () => {
    setIsReversed(!isReversed);
    const temp = input;
    setInput(output);
    setOutput(temp);
    if (output) {
      handleConvert(output);
    }
  };

  const toggleNumberMode = () => {
    setIsNumberMode(!isNumberMode);
    setInput("");
    setOutput("");
  };

  const getCurrentPlaceholder = () => {
    if (isNumberMode && numberPlaceholder && numberOutputPlaceholder) {
      return isReversed ? numberOutputPlaceholder : numberPlaceholder;
    }
    return isReversed ? outputPlaceholder : placeholder;
  };

  const getCurrentOutputPlaceholder = () => {
    if (isNumberMode && numberPlaceholder && numberOutputPlaceholder) {
      return isReversed ? numberPlaceholder : numberOutputPlaceholder;
    }
    return isReversed ? placeholder : outputPlaceholder;
  };

  return (
    <Card className="cyber-glow bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-primary">
          <span className="text-xl">{icon}</span>
          <span className="text-lg font-mono">{title}</span>
          <div className="ml-auto flex items-center gap-1">
            {hasNumberMode && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleNumberMode}
                className={`text-muted-foreground hover:text-primary ${isNumberMode ? 'text-primary' : ''}`}
              >
                {isNumberMode ? <Hash className="w-4 h-4" /> : <Type className="w-4 h-4" />}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDirection}
              className="text-muted-foreground hover:text-primary"
            >
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground font-mono">
            {isNumberMode ? 
              (isReversed ? `${title} → Number` : `Number → ${title}`) :
              (isReversed ? `${title} → Text` : `Text → ${title}`)
            }
          </div>
          <Textarea
            placeholder={getCurrentPlaceholder()}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              handleConvert(e.target.value);
            }}
            className="min-h-[80px] bg-muted/50 border-border/50 focus:border-primary/50 font-mono text-sm resize-none"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground font-mono">Output</div>
            {output && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(output)}
                className="text-muted-foreground hover:text-primary"
              >
                <Copy className="w-4 h-4" />
              </Button>
            )}
          </div>
          <Textarea
            value={output}
            readOnly
            placeholder={getCurrentOutputPlaceholder()}
            className="min-h-[80px] bg-muted/30 border-border/30 font-mono text-sm resize-none cursor-pointer"
            onClick={() => output && copyToClipboard(output)}
          />
        </div>
      </CardContent>
    </Card>
  );
};