
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RotateCcw, ArrowRightLeft } from 'lucide-react';
import AnimatedNumber from '@/components/ui-elements/AnimatedNumber';
import { ConversionType } from '@/hooks/useUnitConverter';
import { useToast } from '@/components/ui/use-toast';

interface ConversionCardProps {
  category: ConversionType;
  units: { value: string; label: string }[];
}

const ConversionCard = ({ category, units }: ConversionCardProps) => {
  const [fromUnit, setFromUnit] = useState(units[0].value);
  const [toUnit, setToUnit] = useState(units[1].value);
  const [value, setValue] = useState(1);
  const [result, setResult] = useState(0);
  const { toast } = useToast();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(e.target.value);
    setValue(isNaN(inputValue) ? 0 : inputValue);
  };

  // Helper function to convert values - define BEFORE using it
  const convert = (value: number, fromUnit: string, toUnit: string, category: ConversionType): number => {
    // Basic implementation for core unit types
    if (category === 'length') {
      // Base: meters
      const toMeters: Record<string, number> = {
        mm: 0.001,
        cm: 0.01,
        m: 1,
        km: 1000,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.344,
      };
      
      const meters = value * toMeters[fromUnit];
      return meters / toMeters[toUnit];
    } 
    else if (category === 'weight') {
      // Base: grams
      const toGrams: Record<string, number> = {
        mg: 0.001,
        g: 1,
        kg: 1000,
        oz: 28.3495,
        lb: 453.592,
        st: 6350.29,
        t: 1000000,
      };
      
      const grams = value * toGrams[fromUnit];
      return grams / toGrams[toUnit];
    }
    else if (category === 'temperature') {
      // Special case for temperature with formulas
      if (fromUnit === 'c' && toUnit === 'f') {
        return (value * 9/5) + 32;
      } else if (fromUnit === 'f' && toUnit === 'c') {
        return (value - 32) * 5/9;
      } else if (fromUnit === 'c' && toUnit === 'k') {
        return value + 273.15;
      } else if (fromUnit === 'k' && toUnit === 'c') {
        return value - 273.15;
      } else if (fromUnit === 'f' && toUnit === 'k') {
        return ((value - 32) * 5/9) + 273.15;
      } else if (fromUnit === 'k' && toUnit === 'f') {
        return ((value - 273.15) * 9/5) + 32;
      } else {
        return value; // Same unit
      }
    }
    
    // Default case or other units
    return value;
  };

  // Calculate result whenever value, fromUnit, or toUnit changes
  useState(() => {
    const calculateResult = () => {
      // Use the helper conversion function that's now defined above
      const convertedResult = convert(value, fromUnit, toUnit, category);
      setResult(convertedResult);
    };
    
    calculateResult();
  }, [value, fromUnit, toUnit, category]);

  // Format result for display
  const formatResult = (result: number): string => {
    if (isNaN(result)) return "Error";
    const decimalPlaces = result < 0.01 ? 6 : result < 1 ? 4 : 2;
    return result.toFixed(decimalPlaces);
  };

  const switchUnits = () => {
    // Save current values
    const tempFromUnit = fromUnit;
    const tempToUnit = toUnit;
    
    // Switch units
    setFromUnit(tempToUnit);
    setToUnit(tempFromUnit);
    
    // Reset value to 1 for better UX
    setValue(1);
    
    toast({
      title: "Units switched",
      description: `Switched from ${tempFromUnit} to ${tempToUnit}`,
      duration: 2000,
    });
  };

  const resetValues = () => {
    setValue(1);
    setFromUnit(units[0].value);
    setToUnit(units[1].value);
  };

  return (
    <Card className="w-full shadow-md border border-gray-100 dark:border-gray-800">
      <CardContent className="pt-6">
        <Tabs defaultValue="convert" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="convert">Convert</TabsTrigger>
            <TabsTrigger value="table">Conversion Table</TabsTrigger>
          </TabsList>
          <TabsContent value="convert" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-3 items-center">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <Select value={fromUnit} onValueChange={setFromUnit}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {units.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  value={value.toString()}
                  onChange={handleInputChange}
                  className="mt-2"
                />
              </div>
              <div className="flex justify-center my-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={switchUnits} 
                  className="rounded-full h-10 w-10"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <Select value={toUnit} onValueChange={setToUnit}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    {units.map((unit) => (
                      <SelectItem key={unit.value} value={unit.value}>
                        {unit.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="mt-2 p-2 bg-gray-50 dark:bg-gray-800/50 rounded-md border border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <AnimatedNumber 
                    value={result} 
                    className="text-lg font-medium" 
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-sm text-center text-blue-700 dark:text-blue-300">
                  {value} {fromUnit} = {formatResult(result)} {toUnit}
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="table">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm font-medium border-b border-gray-200 dark:border-gray-700 pb-2">
                <div>{fromUnit}</div>
                <div>{toUnit}</div>
              </div>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                {[1, 2, 5, 10, 20, 50, 100].map((val) => (
                  <div key={val} className="grid grid-cols-2 gap-2 text-sm py-1 border-b border-gray-100 dark:border-gray-800">
                    <div>{val}</div>
                    <div>{formatResult(convert(val, fromUnit, toUnit, category))}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-end border-t border-gray-100 dark:border-gray-800 py-3">
        <Button variant="ghost" size="sm" onClick={resetValues} className="text-xs">
          <RotateCcw className="h-3 w-3 mr-1" />
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ConversionCard;
