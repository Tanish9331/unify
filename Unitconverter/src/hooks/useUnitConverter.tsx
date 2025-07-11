import { useState, useEffect } from 'react';

// Conversion types - expanded with all the requested categories
export type ConversionType = 
  // Common Converters
  'length' | 'weight' | 'temperature' | 'volume' | 'time' | 'speed' | 'currency' |
  'area' | 'power' | 'pressure' | 'energy' | 'fuel' |
  // Engineering Converters
  'angularVelocity' | 'acceleration' | 'density' | 'torque' | 'thermalConductivity' | 'heatCapacity' | 'heatTransfer' |
  // Electricity & Magnetism
  'charge' | 'electricPotential' | 'inductance' | 'magnetism' |
  // Fluids & Radiology
  'flowRate' | 'viscosity' | 'surfaceTension' | 'radiation' |
  // Other Converters
  'data' | 'sound' | 'typography';

// Unit interfaces
export interface Unit {
  id: string;
  name: string;
  symbol: string;
}

// Conversion pairs
export interface ConversionPair {
  from: Unit;
  to: Unit;
}

// Conversion result
export interface ConversionResult {
  value: number;
  formattedValue: string;
  fromValue: number;
  fromUnit: Unit;
  toUnit: Unit;
}

// Unit definitions - Common units
const lengthUnits: Unit[] = [
  { id: 'mm', name: 'Millimeter', symbol: 'mm' },
  { id: 'cm', name: 'Centimeter', symbol: 'cm' },
  { id: 'm', name: 'Meter', symbol: 'm' },
  { id: 'km', name: 'Kilometer', symbol: 'km' },
  { id: 'in', name: 'Inch', symbol: 'in' },
  { id: 'ft', name: 'Foot', symbol: 'ft' },
  { id: 'yd', name: 'Yard', symbol: 'yd' },
  { id: 'mi', name: 'Mile', symbol: 'mi' },
];

const weightUnits: Unit[] = [
  { id: 'mg', name: 'Milligram', symbol: 'mg' },
  { id: 'g', name: 'Gram', symbol: 'g' },
  { id: 'kg', name: 'Kilogram', symbol: 'kg' },
  { id: 'oz', name: 'Ounce', symbol: 'oz' },
  { id: 'lb', name: 'Pound', symbol: 'lb' },
  { id: 'st', name: 'Stone', symbol: 'st' },
  { id: 't', name: 'Metric Ton', symbol: 't' },
];

const temperatureUnits: Unit[] = [
  { id: 'c', name: 'Celsius', symbol: '°C' },
  { id: 'f', name: 'Fahrenheit', symbol: '°F' },
  { id: 'k', name: 'Kelvin', symbol: 'K' },
];

const volumeUnits: Unit[] = [
  { id: 'ml', name: 'Milliliter', symbol: 'ml' },
  { id: 'l', name: 'Liter', symbol: 'L' },
  { id: 'pt', name: 'Pint', symbol: 'pt' },
  { id: 'qt', name: 'Quart', symbol: 'qt' },
  { id: 'gal', name: 'Gallon', symbol: 'gal' },
  { id: 'floz', name: 'Fluid Ounce', symbol: 'fl oz' },
  { id: 'cup', name: 'Cup', symbol: 'cup' },
];

const timeUnits: Unit[] = [
  { id: 'ms', name: 'Millisecond', symbol: 'ms' },
  { id: 's', name: 'Second', symbol: 's' },
  { id: 'min', name: 'Minute', symbol: 'min' },
  { id: 'h', name: 'Hour', symbol: 'h' },
  { id: 'd', name: 'Day', symbol: 'd' },
  { id: 'wk', name: 'Week', symbol: 'wk' },
  { id: 'mo', name: 'Month', symbol: 'mo' },
  { id: 'yr', name: 'Year', symbol: 'yr' },
];

const speedUnits: Unit[] = [
  { id: 'mps', name: 'Meters per second', symbol: 'm/s' },
  { id: 'kph', name: 'Kilometers per hour', symbol: 'km/h' },
  { id: 'mph', name: 'Miles per hour', symbol: 'mph' },
  { id: 'kn', name: 'Knot', symbol: 'kn' },
  { id: 'ftps', name: 'Feet per second', symbol: 'ft/s' },
];

const currencyUnits: Unit[] = [
  { id: 'usd', name: 'US Dollar', symbol: '$' },
  { id: 'eur', name: 'Euro', symbol: '€' },
  { id: 'gbp', name: 'British Pound', symbol: '£' },
  { id: 'jpy', name: 'Japanese Yen', symbol: '¥' },
  { id: 'inr', name: 'Indian Rupee', symbol: '₹' },
  { id: 'cad', name: 'Canadian Dollar', symbol: 'C$' },
  { id: 'aud', name: 'Australian Dollar', symbol: 'A$' },
  { id: 'chf', name: 'Swiss Franc', symbol: 'CHF' },
];

// New Units - expanding categories
const areaUnits: Unit[] = [
  { id: 'mm2', name: 'Square Millimeter', symbol: 'mm²' },
  { id: 'cm2', name: 'Square Centimeter', symbol: 'cm²' },
  { id: 'm2', name: 'Square Meter', symbol: 'm²' },
  { id: 'ha', name: 'Hectare', symbol: 'ha' },
  { id: 'km2', name: 'Square Kilometer', symbol: 'km²' },
  { id: 'in2', name: 'Square Inch', symbol: 'in²' },
  { id: 'ft2', name: 'Square Foot', symbol: 'ft²' },
  { id: 'ac', name: 'Acre', symbol: 'ac' },
  { id: 'mi2', name: 'Square Mile', symbol: 'mi²' },
];

const powerUnits: Unit[] = [
  { id: 'w', name: 'Watt', symbol: 'W' },
  { id: 'kw', name: 'Kilowatt', symbol: 'kW' },
  { id: 'mw', name: 'Megawatt', symbol: 'MW' },
  { id: 'hp', name: 'Horsepower', symbol: 'hp' },
  { id: 'ftlbs', name: 'Foot-pound/second', symbol: 'ft·lb/s' },
  { id: 'btu', name: 'BTU/hour', symbol: 'BTU/h' },
];

const pressureUnits: Unit[] = [
  { id: 'pa', name: 'Pascal', symbol: 'Pa' },
  { id: 'kpa', name: 'Kilopascal', symbol: 'kPa' },
  { id: 'bar', name: 'Bar', symbol: 'bar' },
  { id: 'psi', name: 'Pound per square inch', symbol: 'psi' },
  { id: 'atm', name: 'Atmosphere', symbol: 'atm' },
  { id: 'torr', name: 'Torr', symbol: 'Torr' },
];

const energyUnits: Unit[] = [
  { id: 'j', name: 'Joule', symbol: 'J' },
  { id: 'kj', name: 'Kilojoule', symbol: 'kJ' },
  { id: 'cal', name: 'Calorie', symbol: 'cal' },
  { id: 'kcal', name: 'Kilocalorie', symbol: 'kcal' },
  { id: 'wh', name: 'Watt-hour', symbol: 'Wh' },
  { id: 'kwh', name: 'Kilowatt-hour', symbol: 'kWh' },
  { id: 'btu', name: 'BTU', symbol: 'BTU' },
];

const fuelUnits: Unit[] = [
  { id: 'mpg_us', name: 'Miles per gallon (US)', symbol: 'mpg' },
  { id: 'mpg_imp', name: 'Miles per gallon (Imperial)', symbol: 'mpg (imp)' },
  { id: 'kml', name: 'Kilometers per liter', symbol: 'km/L' },
  { id: 'l100km', name: 'Liters per 100 kilometers', symbol: 'L/100km' },
];

const angularVelocityUnits: Unit[] = [
  { id: 'rps', name: 'Radians per second', symbol: 'rad/s' },
  { id: 'rpm', name: 'Revolutions per minute', symbol: 'rpm' },
  { id: 'dps', name: 'Degrees per second', symbol: '°/s' },
];

const dataUnits: Unit[] = [
  { id: 'b', name: 'Byte', symbol: 'B' },
  { id: 'kb', name: 'Kilobyte', symbol: 'KB' },
  { id: 'mb', name: 'Megabyte', symbol: 'MB' },
  { id: 'gb', name: 'Gigabyte', symbol: 'GB' },
  { id: 'tb', name: 'Terabyte', symbol: 'TB' },
  { id: 'pb', name: 'Petabyte', symbol: 'PB' },
];

// Unit conversion mapping
const unitsByType: Record<ConversionType, Unit[]> = {
  // Common Converters
  length: lengthUnits,
  weight: weightUnits,
  temperature: temperatureUnits,
  volume: volumeUnits,
  time: timeUnits,
  speed: speedUnits,
  currency: currencyUnits,
  area: areaUnits,
  power: powerUnits,
  pressure: pressureUnits,
  energy: energyUnits,
  fuel: fuelUnits,
  
  // Engineering Converters
  angularVelocity: angularVelocityUnits,
  acceleration: [
    { id: 'mps2', name: 'Meters per second squared', symbol: 'm/s²' },
    { id: 'ftps2', name: 'Feet per second squared', symbol: 'ft/s²' },
    { id: 'g', name: 'Standard gravity', symbol: 'g' },
  ],
  density: [
    { id: 'kgm3', name: 'Kilogram per cubic meter', symbol: 'kg/m³' },
    { id: 'gml', name: 'Gram per milliliter', symbol: 'g/mL' },
    { id: 'lbft3', name: 'Pound per cubic foot', symbol: 'lb/ft³' },
  ],
  torque: [
    { id: 'nm', name: 'Newton meter', symbol: 'N·m' },
    { id: 'ftlb', name: 'Foot-pound', symbol: 'ft·lb' },
    { id: 'inlb', name: 'Inch-pound', symbol: 'in·lb' },
  ],
  thermalConductivity: [
    { id: 'wmc', name: 'Watt per meter-kelvin', symbol: 'W/(m·K)' },
    { id: 'btufh', name: 'BTU-inch per hour-foot²-°F', symbol: 'BTU·in/(h·ft²·°F)' },
  ],
  heatCapacity: [
    { id: 'jkg', name: 'Joule per kilogram-kelvin', symbol: 'J/(kg·K)' },
    { id: 'btulb', name: 'BTU per pound-°F', symbol: 'BTU/(lb·°F)' },
  ],
  heatTransfer: [
    { id: 'wm2', name: 'Watt per square meter-kelvin', symbol: 'W/(m²·K)' },
    { id: 'btuh', name: 'BTU per hour-foot²-°F', symbol: 'BTU/(h·ft²·°F)' },
  ],
  
  // Electricity & Magnetism
  charge: [
    { id: 'c', name: 'Coulomb', symbol: 'C' },
    { id: 'ah', name: 'Ampere-hour', symbol: 'A·h' },
    { id: 'mah', name: 'Milliampere-hour', symbol: 'mA·h' },
  ],
  electricPotential: [
    { id: 'v', name: 'Volt', symbol: 'V' },
    { id: 'kv', name: 'Kilovolt', symbol: 'kV' },
    { id: 'mv', name: 'Millivolt', symbol: 'mV' },
  ],
  inductance: [
    { id: 'h', name: 'Henry', symbol: 'H' },
    { id: 'mh', name: 'Millihenry', symbol: 'mH' },
    { id: 'uh', name: 'Microhenry', symbol: 'µH' },
  ],
  magnetism: [
    { id: 't', name: 'Tesla', symbol: 'T' },
    { id: 'g', name: 'Gauss', symbol: 'G' },
    { id: 'wb', name: 'Weber', symbol: 'Wb' },
  ],
  
  // Fluids & Radiology
  flowRate: [
    { id: 'm3s', name: 'Cubic meter per second', symbol: 'm³/s' },
    { id: 'lpm', name: 'Liter per minute', symbol: 'L/min' },
    { id: 'cfm', name: 'Cubic foot per minute', symbol: 'CFM' },
    { id: 'gpm', name: 'Gallon per minute', symbol: 'gal/min' },
  ],
  viscosity: [
    { id: 'pas', name: 'Pascal-second', symbol: 'Pa·s' },
    { id: 'p', name: 'Poise', symbol: 'P' },
    { id: 'cp', name: 'Centipoise', symbol: 'cP' },
  ],
  surfaceTension: [
    { id: 'nm', name: 'Newton per meter', symbol: 'N/m' },
    { id: 'dyncm', name: 'Dyne per centimeter', symbol: 'dyn/cm' },
  ],
  radiation: [
    { id: 'gy', name: 'Gray', symbol: 'Gy' },
    { id: 'rad', name: 'Rad', symbol: 'rad' },
    { id: 'sv', name: 'Sievert', symbol: 'Sv' },
    { id: 'rem', name: 'Rem', symbol: 'rem' },
  ],
  
  // Other Converters
  data: dataUnits,
  sound: [
    { id: 'db', name: 'Decibel', symbol: 'dB' },
    { id: 'phon', name: 'Phon', symbol: 'phon' },
    { id: 'sone', name: 'Sone', symbol: 'sone' },
  ],
  typography: [
    { id: 'pt', name: 'Point', symbol: 'pt' },
    { id: 'px', name: 'Pixel', symbol: 'px' },
    { id: 'em', name: 'Em', symbol: 'em' },
    { id: 'rem', name: 'Root em', symbol: 'rem' },
  ],
};

// Currency exchange rates - will be updated by API
let currencyRates: Record<string, number> = {
  usd: 1,
  eur: 0.93,
  gbp: 0.80,
  jpy: 150.52,
  inr: 83.36,
  cad: 1.37,
  aud: 1.54,
  chf: 0.89,
};

// Fetch currency rates from API
const fetchCurrencyRates = async () => {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    
    if (data && data.rates) {
      // Update with the latest rates
      currencyRates = {
        usd: 1, // Base currency
        eur: data.rates.EUR || currencyRates.eur,
        gbp: data.rates.GBP || currencyRates.gbp,
        jpy: data.rates.JPY || currencyRates.jpy,
        inr: data.rates.INR || currencyRates.inr,
        cad: data.rates.CAD || currencyRates.cad,
        aud: data.rates.AUD || currencyRates.aud,
        chf: data.rates.CHF || currencyRates.chf,
      };
      
      console.log('Currency rates updated:', currencyRates);
    }
  } catch (error) {
    console.error('Error fetching currency rates:', error);
  }
};

// Conversion function
const convert = (
  value: number,
  from: Unit,
  to: Unit,
  type: ConversionType
): ConversionResult => {
  let result = 0;
  
  // Conversion factors and formulas based on type
  if (type === 'length') {
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
    
    const meters = value * toMeters[from.id];
    result = meters / toMeters[to.id];
  } 
  else if (type === 'weight') {
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
    
    const grams = value * toGrams[from.id];
    result = grams / toGrams[to.id];
  } 
  else if (type === 'temperature') {
    // Special case for temperature with formulas
    if (from.id === 'c' && to.id === 'f') {
      result = (value * 9/5) + 32;
    } else if (from.id === 'f' && to.id === 'c') {
      result = (value - 32) * 5/9;
    } else if (from.id === 'c' && to.id === 'k') {
      result = value + 273.15;
    } else if (from.id === 'k' && to.id === 'c') {
      result = value - 273.15;
    } else if (from.id === 'f' && to.id === 'k') {
      result = ((value - 32) * 5/9) + 273.15;
    } else if (from.id === 'k' && to.id === 'f') {
      result = ((value - 273.15) * 9/5) + 32;
    } else {
      result = value; // Same unit
    }
  } 
  else if (type === 'volume') {
    // Base: milliliters
    const toMilliliters: Record<string, number> = {
      ml: 1,
      l: 1000,
      pt: 473.176,
      qt: 946.353,
      gal: 3785.41,
      floz: 29.5735,
      cup: 236.588,
    };
    
    const milliliters = value * toMilliliters[from.id];
    result = milliliters / toMilliliters[to.id];
  } 
  else if (type === 'time') {
    // Base: seconds
    const toSeconds: Record<string, number> = {
      ms: 0.001,
      s: 1,
      min: 60,
      h: 3600,
      d: 86400,
      wk: 604800,
      mo: 2592000, // Approximate (30 days)
      yr: 31536000, // Non-leap year
    };
    
    const seconds = value * toSeconds[from.id];
    result = seconds / toSeconds[to.id];
  } 
  else if (type === 'speed') {
    // Base: meters per second
    const toMetersPerSecond: Record<string, number> = {
      mps: 1,
      kph: 1/3.6,
      mph: 0.44704,
      kn: 0.514444,
      ftps: 0.3048,
    };
    
    const mps = value * toMetersPerSecond[from.id];
    result = mps / toMetersPerSecond[to.id];
  } 
  else if (type === 'currency') {
    // Use the fetched rates for currency conversion
    const usd = value / currencyRates[from.id];
    result = usd * currencyRates[to.id];
  }
  else if (type === 'area') {
    // Base: square meters
    const toSquareMeters: Record<string, number> = {
      mm2: 0.000001,
      cm2: 0.0001,
      m2: 1,
      ha: 10000,
      km2: 1000000,
      in2: 0.00064516,
      ft2: 0.092903,
      ac: 4046.86,
      mi2: 2589988.11,
    };
    
    const squareMeters = value * toSquareMeters[from.id];
    result = squareMeters / toSquareMeters[to.id];
  }
  else if (type === 'power') {
    // Base: watts
    const toWatts: Record<string, number> = {
      w: 1,
      kw: 1000,
      mw: 1000000,
      hp: 745.7,
      ftlbs: 1.35582,
      btu: 0.29307,
    };
    
    const watts = value * toWatts[from.id];
    result = watts / toWatts[to.id];
  }
  // Add more specialized conversion logic for other types as needed
  // For demo purposes, we'll implement basic conversion for remaining types
  else {
    // Basic conversion using the first unit in each category as the base unit
    const units = unitsByType[type];
    if (units && units.length > 0) {
      // Simple ratio-based conversion (this would be replaced with proper formulas in a real app)
      // This is a placeholder implementation
      const conversionRatio = 1; // This would be calculated based on actual conversion factors
      result = value * conversionRatio;
    } else {
      result = value; // Fallback
    }
  }
  
  // Format the result based on the type
  let formattedValue = '';
  if (type === 'currency') {
    formattedValue = `${to.symbol}${result.toFixed(2)}`;
  } else {
    const decimalPlaces = result < 0.01 ? 6 : result < 1 ? 4 : 2;
    formattedValue = `${result.toFixed(decimalPlaces)} ${to.symbol}`;
  }
  
  return {
    value: result,
    formattedValue,
    fromValue: value,
    fromUnit: from,
    toUnit: to,
  };
};

// Group conversion types by category for UI organization
export const conversionCategories = {
  common: [
    { type: 'length', label: 'Length' },
    { type: 'weight', label: 'Weight & Mass' },
    { type: 'temperature', label: 'Temperature' },
    { type: 'volume', label: 'Volume' },
    { type: 'time', label: 'Time' },
    { type: 'speed', label: 'Speed' },
    { type: 'area', label: 'Area' },
    { type: 'power', label: 'Power' },
    { type: 'pressure', label: 'Pressure' },
    { type: 'energy', label: 'Energy' },
    { type: 'fuel', label: 'Fuel Consumption' },
    { type: 'currency', label: 'Currency' },
  ],
  engineering: [
    { type: 'angularVelocity', label: 'Angular Velocity' },
    { type: 'acceleration', label: 'Acceleration' },
    { type: 'density', label: 'Density' },
    { type: 'torque', label: 'Torque' },
    { type: 'thermalConductivity', label: 'Thermal Conductivity' },
    { type: 'heatCapacity', label: 'Heat Capacity' },
    { type: 'heatTransfer', label: 'Heat Transfer' },
  ],
  electricity: [
    { type: 'charge', label: 'Charge & Current' },
    { type: 'electricPotential', label: 'Electric Potential' },
    { type: 'inductance', label: 'Inductance & Capacitance' },
    { type: 'magnetism', label: 'Magnetism' },
  ],
  fluids: [
    { type: 'flowRate', label: 'Flow Rate' },
    { type: 'viscosity', label: 'Viscosity' },
    { type: 'surfaceTension', label: 'Surface Tension' },
    { type: 'radiation', label: 'Radiation' },
  ],
  other: [
    { type: 'data', label: 'Data Storage' },
    { type: 'sound', label: 'Sound & Light' },
    { type: 'typography', label: 'Typography' },
  ],
} as const;

const useUnitConverter = (initialType: ConversionType = 'length') => {
  const [conversionType, setConversionType] = useState<ConversionType>(initialType);
  const [availableUnits, setAvailableUnits] = useState<Unit[]>(unitsByType[initialType]);
  const [fromUnit, setFromUnit] = useState<Unit>(availableUnits[0]);
  const [toUnit, setToUnit] = useState<Unit>(availableUnits[1]);
  const [inputValue, setInputValue] = useState<number>(0);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [conversionHistory, setConversionHistory] = useState<ConversionResult[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  
  // Fetch currency rates on first load
  useEffect(() => {
    fetchCurrencyRates();
    
    // Refresh rates every hour
    const intervalId = setInterval(fetchCurrencyRates, 60 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Update available units when conversion type changes
  useEffect(() => {
    const units = unitsByType[conversionType];
    setAvailableUnits(units);
    setFromUnit(units[0]);
    setToUnit(units[1]);
    setShowResult(false);
    setInputValue(0);
  }, [conversionType]);
  
  // Calculate the result (but don't immediately show it)
  const calculateResult = () => {
    if (fromUnit && toUnit && inputValue !== undefined) {
      const conversionResult = convert(inputValue, fromUnit, toUnit, conversionType);
      setResult(conversionResult);
      setShowResult(true);
      
      // Add to history
      setConversionHistory(prev => {
        const newHistory = [conversionResult, ...prev];
        // Keep only the last 10 conversions
        return newHistory.slice(0, 10);
      });
      
      return conversionResult;
    }
    return null;
  };
  
  // Swap units
  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setShowResult(false);
  };
  
  // Copy result to clipboard
  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result.formattedValue);
      return true;
    }
    return false;
  };
  
  // Clear history
  const clearHistory = () => {
    setConversionHistory([]);
  };
  
  return {
    conversionType,
    setConversionType,
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
    conversionHistory,
    swapUnits,
    copyToClipboard,
    clearHistory,
  };
};

export default useUnitConverter;
