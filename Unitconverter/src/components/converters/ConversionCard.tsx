
import React from 'react';
import { ArrowRight, ArrowLeftRight, Calculator, Sparkles } from 'lucide-react';
import GlassmorphicCard from '../ui-elements/GlassmorphicCard';
import ConversionResult from './ConversionResult';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { Unit, ConversionType } from '@/hooks/useUnitConverter';

interface ConversionCardProps {
  conversionType: ConversionType;
  availableUnits: Unit[];
  fromUnit: Unit;
  setFromUnit: (unit: Unit) => void;
  toUnit: Unit;
  setToUnit: (unit: Unit) => void;
  inputValue: number;
  setInputValue: (value: number) => void;
  result: any;
  showResult: boolean;
  calculateResult: () => void;
  swapUnits: () => void;
  copyToClipboard: () => boolean;
  className?: string;
}

const ConversionCard: React.FC<ConversionCardProps> = ({
  conversionType,
  availableUnits,
  fromUnit,
  setFromUnit,
  toUnit,
  setToUnit,
  inputValue,
  setInputValue,
  result,
  showResult,
  calculateResult,
  swapUnits,
  copyToClipboard,
  className
}) => {
  // Title mapping for different conversion types
  const conversionTitles: Record<string, string> = {
    // Common converters
    length: 'Length Converter',
    weight: 'Weight & Mass Converter',
    temperature: 'Temperature Converter',
    volume: 'Volume Converter',
    time: 'Time Converter',
    speed: 'Speed Converter',
    area: 'Area Converter',
    power: 'Power Converter',
    pressure: 'Pressure Converter',
    energy: 'Energy Converter',
    fuel: 'Fuel Consumption Converter',
    currency: 'Currency Converter',
    
    // Engineering converters
    angularVelocity: 'Angular Velocity Converter',
    acceleration: 'Acceleration Converter',
    density: 'Density Converter',
    torque: 'Torque Converter',
    thermalConductivity: 'Thermal Conductivity Converter',
    heatCapacity: 'Heat Capacity Converter',
    heatTransfer: 'Heat Transfer Coefficient Converter',
    
    // Electricity & Magnetism
    charge: 'Charge & Current Converter',
    electricPotential: 'Electric Potential Converter',
    inductance: 'Inductance & Capacitance Converter',
    magnetism: 'Magnetism Converter',
    
    // Fluids & Radiology
    flowRate: 'Flow Rate Converter',
    viscosity: 'Viscosity Converter',
    surfaceTension: 'Surface Tension Converter',
    radiation: 'Radiation Converter',
    
    // Other converters
    data: 'Data Storage Converter',
    sound: 'Sound & Light Converter',
    typography: 'Typography Converter',
  };
  
  return (
    <GlassmorphicCard 
      className={cn("w-full max-w-md", className)} 
      hover 
      borderGlow 
      variant="colorful" 
      colorScheme="gradient"
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
          <Sparkles size={18} className="text-primary animate-pulse" />
          <span className="text-gradient">{conversionTitles[conversionType] || 'Unit Converter'}</span>
        </h3>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="fromValue" className="block text-sm font-medium text-foreground/80 mb-1">
            Value
          </label>
          <Input
            id="fromValue"
            type="number"
            value={inputValue === 0 ? '' : inputValue}
            onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
            placeholder="Enter a value"
            className="w-full px-4 py-3 h-auto rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
        
        <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-2">
          <div>
            <label htmlFor="fromUnit" className="block text-sm font-medium text-foreground/80 mb-1">
              From
            </label>
            <select
              id="fromUnit"
              value={fromUnit.id}
              onChange={(e) => {
                const unit = availableUnits.find(u => u.id === e.target.value);
                if (unit) setFromUnit(unit);
              }}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
            >
              {availableUnits.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
          </div>
          
          <button
            onClick={swapUnits}
            className="mt-6 p-2 rounded-full border border-white/30 bg-white/10 hover:bg-white/30 transition-colors hover:shadow-md hover:scale-105 active:scale-95"
            aria-label="Swap units"
          >
            <ArrowLeftRight size={16} className="text-primary" />
          </button>
          
          <div>
            <label htmlFor="toUnit" className="block text-sm font-medium text-foreground/80 mb-1">
              To
            </label>
            <select
              id="toUnit"
              value={toUnit.id}
              onChange={(e) => {
                const unit = availableUnits.find(u => u.id === e.target.value);
                if (unit) setToUnit(unit);
              }}
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
            >
              {availableUnits.map((unit) => (
                <option key={unit.id} value={unit.id}>
                  {unit.name} ({unit.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <Button 
          onClick={calculateResult}
          className="w-full py-6 text-lg font-medium flex items-center justify-center gap-2 btn-gradient hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
        >
          <Calculator size={18} />
          Calculate
        </Button>
        
        {showResult && (
          <div className="pt-2">
            <ConversionResult 
              result={result} 
              copyToClipboard={copyToClipboard} 
            />
          </div>
        )}
      </div>
    </GlassmorphicCard>
  );
};

export default ConversionCard;
