import { useState, useEffect } from 'react';
import { useCurrencyConverter, currencies } from '../utils/currencyConverter';

// Types of conversions available
export type ConversionType = 
  'length' | 'weight' | 'temperature' | 'area' | 'volume' | 'time' | 'speed' | 
  'data' | 'pressure' | 'angle' | 'currency';

// Unit interface
export interface Unit {
  id: string;
  name: string;
  symbol: string;
}

// Conversion result interface
export interface ConversionResult {
  value: number;
  formattedValue: string;
  fromValue: number;
  fromUnit: Unit;
  toUnit: Unit;
}

// Define available unit types
export const unitTypes = [
  { value: 'length', label: 'Length' },
  { value: 'weight', label: 'Weight' },
  { value: 'temperature', label: 'Temperature' },
  { value: 'area', label: 'Area' },
  { value: 'volume', label: 'Volume' },
  { value: 'time', label: 'Time' },
  { value: 'speed', label: 'Speed' },
  { value: 'data', label: 'Data' },
  { value: 'pressure', label: 'Pressure' },
  { value: 'angle', label: 'Angle' },
  { value: 'currency', label: 'Currency' }
];

// Group conversion types by category for UI organization
export const conversionCategories = {
  common: [
    { type: 'length' as ConversionType, label: 'Length' },
    { type: 'weight' as ConversionType, label: 'Weight & Mass' },
    { type: 'temperature' as ConversionType, label: 'Temperature' },
    { type: 'volume' as ConversionType, label: 'Volume' },
    { type: 'time' as ConversionType, label: 'Time' },
    { type: 'speed' as ConversionType, label: 'Speed' },
    { type: 'area' as ConversionType, label: 'Area' },
    { type: 'pressure' as ConversionType, label: 'Pressure' },
    { type: 'currency' as ConversionType, label: 'Currency' }
  ],
  engineering: [
    { type: 'length' as ConversionType, label: 'Length' },
    { type: 'area' as ConversionType, label: 'Area' }
  ],
  electricity: [
    { type: 'data' as ConversionType, label: 'Data' },
    { type: 'time' as ConversionType, label: 'Time' }
  ],
  fluids: [
    { type: 'volume' as ConversionType, label: 'Volume' },
    { type: 'pressure' as ConversionType, label: 'Pressure' }
  ],
  other: [
    { type: 'data' as ConversionType, label: 'Data Storage' },
    { type: 'angle' as ConversionType, label: 'Angle' }
  ]
};

// Function to get units for a specific type
export const getUnitsForType = (type: ConversionType): Unit[] => {
  switch(type) {
    case 'length':
      return [
        { id: 'mm', name: 'Millimeter', symbol: 'mm' },
        { id: 'cm', name: 'Centimeter', symbol: 'cm' },
        { id: 'm', name: 'Meter', symbol: 'm' },
        { id: 'km', name: 'Kilometer', symbol: 'km' },
        { id: 'in', name: 'Inch', symbol: 'in' },
        { id: 'ft', name: 'Foot', symbol: 'ft' },
        { id: 'yd', name: 'Yard', symbol: 'yd' },
        { id: 'mi', name: 'Mile', symbol: 'mi' }
      ];
    case 'weight':
      return [
        { id: 'mg', name: 'Milligram', symbol: 'mg' },
        { id: 'g', name: 'Gram', symbol: 'g' },
        { id: 'kg', name: 'Kilogram', symbol: 'kg' },
        { id: 'oz', name: 'Ounce', symbol: 'oz' },
        { id: 'lb', name: 'Pound', symbol: 'lb' },
        { id: 'st', name: 'Stone', symbol: 'st' },
        { id: 't', name: 'Metric Ton', symbol: 't' }
      ];
    case 'temperature':
      return [
        { id: 'c', name: 'Celsius', symbol: '°C' },
        { id: 'f', name: 'Fahrenheit', symbol: '°F' },
        { id: 'k', name: 'Kelvin', symbol: 'K' }
      ];
    case 'area':
      return [
        { id: 'mm2', name: 'Square Millimeter', symbol: 'mm²' },
        { id: 'cm2', name: 'Square Centimeter', symbol: 'cm²' },
        { id: 'm2', name: 'Square Meter', symbol: 'm²' },
        { id: 'ha', name: 'Hectare', symbol: 'ha' },
        { id: 'km2', name: 'Square Kilometer', symbol: 'km²' },
        { id: 'in2', name: 'Square Inch', symbol: 'in²' },
        { id: 'ft2', name: 'Square Foot', symbol: 'ft²' },
        { id: 'ac', name: 'Acre', symbol: 'ac' },
        { id: 'mi2', name: 'Square Mile', symbol: 'mi²' }
      ];
    case 'volume':
      return [
        { id: 'ml', name: 'Milliliter', symbol: 'ml' },
        { id: 'l', name: 'Liter', symbol: 'L' },
        { id: 'pt', name: 'Pint', symbol: 'pt' },
        { id: 'qt', name: 'Quart', symbol: 'qt' },
        { id: 'gal', name: 'Gallon', symbol: 'gal' },
        { id: 'floz', name: 'Fluid Ounce', symbol: 'fl oz' },
        { id: 'cup', name: 'Cup', symbol: 'cup' }
      ];
    case 'time':
      return [
        { id: 'ms', name: 'Millisecond', symbol: 'ms' },
        { id: 's', name: 'Second', symbol: 's' },
        { id: 'min', name: 'Minute', symbol: 'min' },
        { id: 'h', name: 'Hour', symbol: 'h' },
        { id: 'd', name: 'Day', symbol: 'd' },
        { id: 'wk', name: 'Week', symbol: 'wk' },
        { id: 'mo', name: 'Month', symbol: 'mo' },
        { id: 'yr', name: 'Year', symbol: 'yr' }
      ];
    case 'speed':
      return [
        { id: 'mps', name: 'Meters per second', symbol: 'm/s' },
        { id: 'kph', name: 'Kilometers per hour', symbol: 'km/h' },
        { id: 'mph', name: 'Miles per hour', symbol: 'mph' },
        { id: 'kn', name: 'Knot', symbol: 'kn' },
        { id: 'ftps', name: 'Feet per second', symbol: 'ft/s' }
      ];
    case 'data':
      return [
        { id: 'b', name: 'Byte', symbol: 'B' },
        { id: 'kb', name: 'Kilobyte', symbol: 'KB' },
        { id: 'mb', name: 'Megabyte', symbol: 'MB' },
        { id: 'gb', name: 'Gigabyte', symbol: 'GB' },
        { id: 'tb', name: 'Terabyte', symbol: 'TB' },
        { id: 'pb', name: 'Petabyte', symbol: 'PB' }
      ];
    case 'pressure':
      return [
        { id: 'pa', name: 'Pascal', symbol: 'Pa' },
        { id: 'kpa', name: 'Kilopascal', symbol: 'kPa' },
        { id: 'bar', name: 'Bar', symbol: 'bar' },
        { id: 'psi', name: 'Pound per square inch', symbol: 'psi' },
        { id: 'atm', name: 'Atmosphere', symbol: 'atm' },
        { id: 'torr', name: 'Torr', symbol: 'Torr' }
      ];
    case 'angle':
      return [
        { id: 'deg', name: 'Degree', symbol: '°' },
        { id: 'rad', name: 'Radian', symbol: 'rad' },
        { id: 'grad', name: 'Gradian', symbol: 'grad' },
        { id: 'arcmin', name: 'Arcminute', symbol: "'" },
        { id: 'arcsec', name: 'Arcsecond', symbol: '"' }
      ];
    case 'currency':
      return currencies.map(code => ({
        id: code.toLowerCase(),
        name: code,
        symbol: code
      }));
    default:
      return [
        { id: 'unit1', name: 'Unit 1', symbol: 'u1' },
        { id: 'unit2', name: 'Unit 2', symbol: 'u2' }
      ];
  }
};

// Conversion function
export const convertValue = (
  value: number,
  from: string,
  to: string,
  type: ConversionType
): number => {
  // Basic length conversion for demonstration
  if (type === 'length') {
    // Convert everything to meters first (base unit)
    const toMeters: Record<string, number> = {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.344
    };
    
    // Convert from source unit to meters
    const meters = value * toMeters[from];
    
    // Convert from meters to target unit
    return meters / toMeters[to];
  }
  
  // Other conversions would follow a similar pattern
  // For now, just return the original value for other types
  return value;
};

// Main hook
export const useUnitConverter = () => {
  const [unitType, setUnitType] = useState<ConversionType>('length');
  const [fromUnit, setFromUnit] = useState<string>('');
  const [toUnit, setToUnit] = useState<string>('');
  const [inputValue, setInputValue] = useState<number>(1);
  const [result, setResult] = useState<number | null>(null);
  const [availableUnits, setAvailableUnits] = useState<string[]>([]);
  
  // Currency specific hook
  const { 
    convert: convertCurrency, 
    isLoading: currencyLoading, 
    error: currencyError 
  } = useCurrencyConverter();

  // Update available units when unit type changes
  useEffect(() => {
    const units = getUnitsForType(unitType).map(unit => unit.id);
    
    setAvailableUnits(units);
    if (units.length > 0) {
      setFromUnit(units[0]);
      setToUnit(units.length > 1 ? units[1] : units[0]);
    } else {
      setFromUnit('');
      setToUnit('');
    }
    
    // Reset result when changing unit type
    setResult(null);
  }, [unitType]);

  // Convert the value
  const convert = () => {
    if (!fromUnit || !toUnit || inputValue === undefined) {
      setResult(null);
      return;
    }

    try {
      let convertedValue: number;
      
      if (unitType === 'currency') {
        // For currency, we use the currency converter
        convertedValue = convertCurrency(inputValue, toUnit);
      } else {
        // For all other types, use the standard converter
        convertedValue = convertValue(inputValue, fromUnit, toUnit, unitType);
      }
      
      setResult(convertedValue);
    } catch (error) {
      console.error('Conversion error:', error);
      setResult(null);
    }
  };

  useEffect(() => {
    convert();
  }, [inputValue, fromUnit, toUnit, unitType]);

  return {
    unitType,
    setUnitType,
    fromUnit,
    setFromUnit,
    toUnit,
    setToUnit,
    inputValue,
    setInputValue,
    result,
    availableUnits,
    unitTypes,
    convert,
    loading: unitType === 'currency' && currencyLoading,
    error: unitType === 'currency' ? currencyError : null
  };
};

export default useUnitConverter;
