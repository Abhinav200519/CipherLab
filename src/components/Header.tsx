import { Code2, Zap } from "lucide-react";

export const Header = () => {
  return (
    <div className="text-center space-y-4 mb-12">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-cyber text-background font-mono font-bold text-xl animate-pulse-glow">
        <Code2 className="w-6 h-6" />
        <span>CipherLab</span>
        <Zap className="w-6 h-6" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent animate-float">
        Universal Code Converter
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
        Transform text into multiple coding formats with <span className="text-primary">bi-directional</span> conversion support
      </p>
    </div>
  );
};