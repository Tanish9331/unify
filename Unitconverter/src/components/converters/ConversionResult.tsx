
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import AnimatedNumber from '@/components/ui-elements/AnimatedNumber';
import type { ConversionResult as ConversionResultType } from '@/hooks/useUnitConverter';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

interface ConversionResultProps {
  result: ConversionResultType | null;
  copyToClipboard: () => boolean;
  className?: string;
}

const ConversionResult: React.FC<ConversionResultProps> = ({ 
  result, 
  copyToClipboard,
  className
}) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const handleCopy = () => {
    const success = copyToClipboard();
    if (success) {
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Result copied to clipboard.",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  if (!result) {
    return null;
  }
  
  return (
    <div className={cn("bg-secondary/20 backdrop-blur-sm rounded-xl p-5 relative border border-white/10 shadow-sm", className)}>
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <div className="bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full font-medium shadow-sm">
          Result
        </div>
      </div>
      
      <div className="pt-3 pb-1">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-muted-foreground">
            {result.fromValue} {result.fromUnit.symbol} =
          </div>
          <button
            onClick={handleCopy}
            className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 active:scale-95"
            aria-label="Copy result"
          >
            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
          </button>
        </div>
        
        <div className="text-4xl font-display font-bold mb-2 text-balance">
          <AnimatedNumber
            value={result.value}
            decimals={result.value < 0.01 ? 6 : result.value < 1 ? 4 : 2}
          />
          <span className="text-sm ml-1 font-normal text-muted-foreground">
            {result.toUnit.symbol}
          </span>
        </div>
        
        <div className="text-sm text-muted-foreground">
          {result.toUnit.name}
        </div>
      </div>
    </div>
  );
};

export default ConversionResult;
