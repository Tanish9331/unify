
// Unit conversion factors for various measurement types

export const lengthUnits = {
  "Meter": {
    "Kilometer": 0.001,
    "Centimeter": 100,
    "Millimeter": 1000,
    "Micrometer": 1000000,
    "Nanometer": 1000000000,
    "Mile": 0.000621371,
    "Yard": 1.09361,
    "Foot": 3.28084,
    "Inch": 39.3701,
    "Nautical Mile": 0.000539957
  },
  "Kilometer": {
    "Meter": 1000,
    "Centimeter": 100000,
    "Millimeter": 1000000,
    "Micrometer": 1000000000,
    "Nanometer": 1000000000000,
    "Mile": 0.621371,
    "Yard": 1093.61,
    "Foot": 3280.84,
    "Inch": 39370.1,
    "Nautical Mile": 0.539957
  },
  "Centimeter": {
    "Meter": 0.01,
    "Kilometer": 0.00001,
    "Millimeter": 10,
    "Micrometer": 10000,
    "Nanometer": 10000000,
    "Mile": 0.00000621371,
    "Yard": 0.0109361,
    "Foot": 0.0328084,
    "Inch": 0.393701,
    "Nautical Mile": 0.00000539957
  },
  "Millimeter": {
    "Meter": 0.001,
    "Kilometer": 0.000001,
    "Centimeter": 0.1,
    "Micrometer": 1000,
    "Nanometer": 1000000,
    "Mile": 6.21371e-7,
    "Yard": 0.00109361,
    "Foot": 0.00328084,
    "Inch": 0.0393701,
    "Nautical Mile": 5.39957e-7
  },
  "Micrometer": {
    "Meter": 0.000001,
    "Kilometer": 1e-9,
    "Centimeter": 0.0001,
    "Millimeter": 0.001,
    "Nanometer": 1000,
    "Mile": 6.21371e-10,
    "Yard": 1.09361e-6,
    "Foot": 3.28084e-6,
    "Inch": 3.93701e-5,
    "Nautical Mile": 5.39957e-10
  },
  "Nanometer": {
    "Meter": 1e-9,
    "Kilometer": 1e-12,
    "Centimeter": 1e-7,
    "Millimeter": 1e-6,
    "Micrometer": 0.001,
    "Mile": 6.21371e-13,
    "Yard": 1.09361e-9,
    "Foot": 3.28084e-9,
    "Inch": 3.93701e-8,
    "Nautical Mile": 5.39957e-13
  },
  "Mile": {
    "Meter": 1609.34,
    "Kilometer": 1.60934,
    "Centimeter": 160934,
    "Millimeter": 1609340,
    "Micrometer": 1609340000,
    "Nanometer": 1.60934e+12,
    "Yard": 1760,
    "Foot": 5280,
    "Inch": 63360,
    "Nautical Mile": 0.868976
  },
  "Yard": {
    "Meter": 0.9144,
    "Kilometer": 0.0009144,
    "Centimeter": 91.44,
    "Millimeter": 914.4,
    "Micrometer": 914400,
    "Nanometer": 9.144e+8,
    "Mile": 0.000568182,
    "Foot": 3,
    "Inch": 36,
    "Nautical Mile": 0.000493737
  },
  "Foot": {
    "Meter": 0.3048,
    "Kilometer": 0.0003048,
    "Centimeter": 30.48,
    "Millimeter": 304.8,
    "Micrometer": 304800,
    "Nanometer": 3.048e+8,
    "Mile": 0.000189394,
    "Yard": 0.333333,
    "Inch": 12,
    "Nautical Mile": 0.000164579
  },
  "Inch": {
    "Meter": 0.0254,
    "Kilometer": 0.0000254,
    "Centimeter": 2.54,
    "Millimeter": 25.4,
    "Micrometer": 25400,
    "Nanometer": 2.54e+7,
    "Mile": 0.0000157828,
    "Yard": 0.0277778,
    "Foot": 0.0833333,
    "Nautical Mile": 0.0000137149
  },
  "Nautical Mile": {
    "Meter": 1852,
    "Kilometer": 1.852,
    "Centimeter": 185200,
    "Millimeter": 1852000,
    "Micrometer": 1.852e+9,
    "Nanometer": 1.852e+12,
    "Mile": 1.15078,
    "Yard": 2025.37,
    "Foot": 6076.12,
    "Inch": 72913.4
  }
};

export const weightUnits = {
  "Kilogram": {
    "Gram": 1000,
    "Milligram": 1000000,
    "Metric Ton": 0.001,
    "Long Ton": 0.000984207,
    "Short Ton": 0.00110231,
    "Pound": 2.20462,
    "Ounce": 35.274,
    "Stone": 0.157473,
    "Carat": 5000
  },
  "Gram": {
    "Kilogram": 0.001,
    "Milligram": 1000,
    "Metric Ton": 0.000001,
    "Long Ton": 9.84207e-7,
    "Short Ton": 1.10231e-6,
    "Pound": 0.00220462,
    "Ounce": 0.035274,
    "Stone": 0.000157473,
    "Carat": 5
  },
  "Milligram": {
    "Kilogram": 0.000001,
    "Gram": 0.001,
    "Metric Ton": 1e-9,
    "Long Ton": 9.84207e-10,
    "Short Ton": 1.10231e-9,
    "Pound": 2.20462e-6,
    "Ounce": 0.000035274,
    "Stone": 1.57473e-7,
    "Carat": 0.005
  },
  "Metric Ton": {
    "Kilogram": 1000,
    "Gram": 1000000,
    "Milligram": 1000000000,
    "Long Ton": 0.984207,
    "Short Ton": 1.10231,
    "Pound": 2204.62,
    "Ounce": 35274,
    "Stone": 157.473,
    "Carat": 5000000
  },
  "Long Ton": {
    "Kilogram": 1016.05,
    "Gram": 1016050,
    "Milligram": 1016050000,
    "Metric Ton": 1.01605,
    "Short Ton": 1.12,
    "Pound": 2240,
    "Ounce": 35840,
    "Stone": 160,
    "Carat": 5080230
  },
  "Short Ton": {
    "Kilogram": 907.185,
    "Gram": 907185,
    "Milligram": 907185000,
    "Metric Ton": 0.907185,
    "Long Ton": 0.892857,
    "Pound": 2000,
    "Ounce": 32000,
    "Stone": 142.857,
    "Carat": 4535920
  },
  "Pound": {
    "Kilogram": 0.453592,
    "Gram": 453.592,
    "Milligram": 453592,
    "Metric Ton": 0.000453592,
    "Long Ton": 0.000446429,
    "Short Ton": 0.0005,
    "Ounce": 16,
    "Stone": 0.0714286,
    "Carat": 2267.96
  },
  "Ounce": {
    "Kilogram": 0.0283495,
    "Gram": 28.3495,
    "Milligram": 28349.5,
    "Metric Ton": 0.0000283495,
    "Long Ton": 0.0000279018,
    "Short Ton": 0.00003125,
    "Pound": 0.0625,
    "Stone": 0.00446429,
    "Carat": 141.748
  },
  "Stone": {
    "Kilogram": 6.35029,
    "Gram": 6350.29,
    "Milligram": 6350290,
    "Metric Ton": 0.00635029,
    "Long Ton": 0.00625,
    "Short Ton": 0.007,
    "Pound": 14,
    "Ounce": 224,
    "Carat": 31751.5
  },
  "Carat": {
    "Kilogram": 0.0002,
    "Gram": 0.2,
    "Milligram": 200,
    "Metric Ton": 2e-7,
    "Long Ton": 1.96841e-7,
    "Short Ton": 2.20462e-7,
    "Pound": 0.000440925,
    "Ounce": 0.00705479,
    "Stone": 0.0000314946
  }
};

export const temperatureUnits = {
  "Celsius": {
    "Fahrenheit": (c: number) => (c * 9/5) + 32,
    "Kelvin": (c: number) => c + 273.15,
    "Rankine": (c: number) => (c + 273.15) * 9/5,
    "Réaumur": (c: number) => c * 0.8,
  },
  "Fahrenheit": {
    "Celsius": (f: number) => (f - 32) * 5/9,
    "Kelvin": (f: number) => (f - 32) * 5/9 + 273.15,
    "Rankine": (f: number) => f + 459.67,
    "Réaumur": (f: number) => (f - 32) * 4/9,
  },
  "Kelvin": {
    "Celsius": (k: number) => k - 273.15,
    "Fahrenheit": (k: number) => (k - 273.15) * 9/5 + 32,
    "Rankine": (k: number) => k * 1.8,
    "Réaumur": (k: number) => (k - 273.15) * 0.8,
  },
  "Rankine": {
    "Celsius": (r: number) => (r - 491.67) * 5/9,
    "Fahrenheit": (r: number) => r - 459.67,
    "Kelvin": (r: number) => r * 5/9,
    "Réaumur": (r: number) => (r - 491.67) * 4/9,
  },
  "Réaumur": {
    "Celsius": (re: number) => re * 1.25,
    "Fahrenheit": (re: number) => re * 2.25 + 32,
    "Kelvin": (re: number) => re * 1.25 + 273.15,
    "Rankine": (re: number) => re * 2.25 + 491.67,
  },
};

export const areaUnits = {
  "Square Meter": {
    "Square Kilometer": 0.000001,
    "Square Centimeter": 10000,
    "Square Millimeter": 1000000,
    "Square Mile": 3.861e-7,
    "Square Yard": 1.19599,
    "Square Foot": 10.7639,
    "Square Inch": 1550,
    "Hectare": 0.0001,
    "Acre": 0.000247105
  },
  "Square Kilometer": {
    "Square Meter": 1000000,
    "Square Centimeter": 10000000000,
    "Square Millimeter": 1000000000000,
    "Square Mile": 0.386102,
    "Square Yard": 1195990,
    "Square Foot": 10763900,
    "Square Inch": 1.55e+9,
    "Hectare": 100,
    "Acre": 247.105
  },
  "Square Centimeter": {
    "Square Meter": 0.0001,
    "Square Kilometer": 1e-10,
    "Square Millimeter": 100,
    "Square Mile": 3.861e-11,
    "Square Yard": 0.000119599,
    "Square Foot": 0.00107639,
    "Square Inch": 0.155,
    "Hectare": 1e-8,
    "Acre": 2.47105e-8
  },
  "Square Millimeter": {
    "Square Meter": 0.000001,
    "Square Kilometer": 1e-12,
    "Square Centimeter": 0.01,
    "Square Mile": 3.861e-13,
    "Square Yard": 1.19599e-6,
    "Square Foot": 1.07639e-5,
    "Square Inch": 0.00155,
    "Hectare": 1e-10,
    "Acre": 2.47105e-10
  },
  "Square Mile": {
    "Square Meter": 2589990,
    "Square Kilometer": 2.58999,
    "Square Centimeter": 25899900000,
    "Square Millimeter": 2.59e+12,
    "Square Yard": 3097600,
    "Square Foot": 27878400,
    "Square Inch": 4.0145e+9,
    "Hectare": 258.999,
    "Acre": 640
  },
  "Square Yard": {
    "Square Meter": 0.836127,
    "Square Kilometer": 8.36127e-7,
    "Square Centimeter": 8361.27,
    "Square Millimeter": 836127,
    "Square Mile": 3.2283e-7,
    "Square Foot": 9,
    "Square Inch": 1296,
    "Hectare": 8.36127e-5,
    "Acre": 0.000206612
  },
  "Square Foot": {
    "Square Meter": 0.092903,
    "Square Kilometer": 9.2903e-8,
    "Square Centimeter": 929.03,
    "Square Millimeter": 92903,
    "Square Mile": 3.587e-8,
    "Square Yard": 0.111111,
    "Square Inch": 144,
    "Hectare": 9.2903e-6,
    "Acre": 2.2957e-5
  },
  "Square Inch": {
    "Square Meter": 0.00064516,
    "Square Kilometer": 6.4516e-10,
    "Square Centimeter": 6.4516,
    "Square Millimeter": 645.16,
    "Square Mile": 2.491e-10,
    "Square Yard": 0.000771605,
    "Square Foot": 0.00694444,
    "Hectare": 6.4516e-8,
    "Acre": 1.5942e-7
  },
  "Hectare": {
    "Square Meter": 10000,
    "Square Kilometer": 0.01,
    "Square Centimeter": 100000000,
    "Square Millimeter": 10000000000,
    "Square Mile": 0.00386102,
    "Square Yard": 11959.9,
    "Square Foot": 107639,
    "Square Inch": 15500000,
    "Acre": 2.47105
  },
  "Acre": {
    "Square Meter": 4046.86,
    "Square Kilometer": 0.00404686,
    "Square Centimeter": 40468600,
    "Square Millimeter": 4046860000,
    "Square Mile": 0.0015625,
    "Square Yard": 4840,
    "Square Foot": 43560,
    "Square Inch": 6272640,
    "Hectare": 0.404686
  }
};

export const volumeUnits = {
  "Cubic Meter": {
    "Cubic Kilometer": 1e-9,
    "Cubic Centimeter": 1000000,
    "Cubic Millimeter": 1000000000,
    "Liter": 1000,
    "Milliliter": 1000000,
    "US Gallon": 264.172,
    "US Quart": 1056.69,
    "US Pint": 2113.38,
    "US Cup": 4226.75,
    "US Fluid Ounce": 33814,
    "US Table Spoon": 67628,
    "US Tea Spoon": 202884,
    "Imperial Gallon": 219.969,
    "Imperial Quart": 879.877,
    "Imperial Pint": 1759.75,
    "Imperial Fluid Ounce": 35195.1,
    "Imperial Table Spoon": 56312.1,
    "Imperial Tea Spoon": 168936,
    "Cubic Mile": 2.39913e-10,
    "Cubic Yard": 1.30795,
    "Cubic Foot": 35.3147,
    "Cubic Inch": 61023.7
  },
  "Cubic Kilometer": {
    "Cubic Meter": 1000000000,
    "Cubic Centimeter": 1e+15,
    "Cubic Millimeter": 1e+18,
    "Liter": 1e+12,
    "Milliliter": 1e+15,
    "US Gallon": 2.64172e+11,
    "US Quart": 1.05669e+12,
    "US Pint": 2.11338e+12,
    "US Cup": 4.22675e+12,
    "US Fluid Ounce": 3.3814e+13,
    "US Table Spoon": 6.7628e+13,
    "US Tea Spoon": 2.02884e+14,
    "Imperial Gallon": 2.19969e+11,
    "Imperial Quart": 8.79877e+11,
    "Imperial Pint": 1.75975e+12,
    "Imperial Fluid Ounce": 3.51951e+13,
    "Imperial Table Spoon": 5.63121e+13,
    "Imperial Tea Spoon": 1.68936e+14,
    "Cubic Mile": 0.239913,
    "Cubic Yard": 1.30795e+9,
    "Cubic Foot": 3.53147e+10,
    "Cubic Inch": 6.10237e+13
  },
  "Cubic Centimeter": {
    "Cubic Meter": 0.000001,
    "Cubic Kilometer": 1e-15,
    "Cubic Millimeter": 1000,
    "Liter": 0.001,
    "Milliliter": 1,
    "US Gallon": 0.000264172,
    "US Quart": 0.00105669,
    "US Pint": 0.00211338,
    "US Cup": 0.00422675,
    "US Fluid Ounce": 0.033814,
    "US Table Spoon": 0.067628,
    "US Tea Spoon": 0.202884,
    "Imperial Gallon": 0.000219969,
    "Imperial Quart": 0.000879877,
    "Imperial Pint": 0.00175975,
    "Imperial Fluid Ounce": 0.0351951,
    "Imperial Table Spoon": 0.0563121,
    "Imperial Tea Spoon": 0.168936,
    "Cubic Mile": 2.39913e-16,
    "Cubic Yard": 1.30795e-6,
    "Cubic Foot": 0.0000353147,
    "Cubic Inch": 0.0610237
  },
  "Liter": {
    "Cubic Meter": 0.001,
    "Cubic Kilometer": 1e-12,
    "Cubic Centimeter": 1000,
    "Cubic Millimeter": 1000000,
    "Milliliter": 1000,
    "US Gallon": 0.264172,
    "US Quart": 1.05669,
    "US Pint": 2.11338,
    "US Cup": 4.22675,
    "US Fluid Ounce": 33.814,
    "US Table Spoon": 67.628,
    "US Tea Spoon": 202.884,
    "Imperial Gallon": 0.219969,
    "Imperial Quart": 0.879877,
    "Imperial Pint": 1.75975,
    "Imperial Fluid Ounce": 35.1951,
    "Imperial Table Spoon": 56.3121,
    "Imperial Tea Spoon": 168.936,
    "Cubic Mile": 2.39913e-13,
    "Cubic Yard": 0.00130795,
    "Cubic Foot": 0.0353147,
    "Cubic Inch": 61.0237
  }
};

export const timeUnits = {
  "Second": {
    "Millisecond": 1000,
    "Microsecond": 1000000,
    "Nanosecond": 1000000000,
    "Minute": 1/60,
    "Hour": 1/3600,
    "Day": 1/86400,
    "Week": 1/604800,
    "Month (30 days)": 1/2592000,
    "Year (365 days)": 1/31536000,
    "Decade": 1/315360000,
    "Century": 1/3153600000,
  },
  "Millisecond": {
    "Second": 0.001,
    "Microsecond": 1000,
    "Nanosecond": 1000000,
    "Minute": 0.0000166667,
    "Hour": 2.77778e-7,
    "Day": 1.15741e-8,
    "Week": 1.65344e-9,
    "Month (30 days)": 3.8052e-10,
    "Year (365 days)": 3.17098e-11,
    "Decade": 3.17098e-12,
    "Century": 3.17098e-13,
  },
  "Minute": {
    "Second": 60,
    "Millisecond": 60000,
    "Microsecond": 60000000,
    "Nanosecond": 60000000000,
    "Hour": 1/60,
    "Day": 1/1440,
    "Week": 1/10080,
    "Month (30 days)": 1/43200,
    "Year (365 days)": 1/525600,
    "Decade": 1/5256000,
    "Century": 1/52560000,
  },
  "Hour": {
    "Second": 3600,
    "Millisecond": 3600000,
    "Microsecond": 3600000000,
    "Nanosecond": 3600000000000,
    "Minute": 60,
    "Day": 1/24,
    "Week": 1/168,
    "Month (30 days)": 1/720,
    "Year (365 days)": 1/8760,
    "Decade": 1/87600,
    "Century": 1/876000,
  },
  "Day": {
    "Second": 86400,
    "Millisecond": 86400000,
    "Microsecond": 86400000000,
    "Nanosecond": 86400000000000,
    "Minute": 1440,
    "Hour": 24,
    "Week": 1/7,
    "Month (30 days)": 1/30,
    "Year (365 days)": 1/365,
    "Decade": 1/3650,
    "Century": 1/36500,
  }
};

export const speedUnits = {
  "Meter per second": {
    "Kilometer per hour": 3.6,
    "Mile per hour": 2.23694,
    "Foot per second": 3.28084,
    "Knot": 1.94384,
    "Speed of light": 3.33564e-9,
    "Speed of sound": 0.00291545
  },
  "Kilometer per hour": {
    "Meter per second": 0.277778,
    "Mile per hour": 0.621371,
    "Foot per second": 0.911344,
    "Knot": 0.539957,
    "Speed of light": 9.26566e-10,
    "Speed of sound": 0.000809848
  },
  "Mile per hour": {
    "Meter per second": 0.44704,
    "Kilometer per hour": 1.60934,
    "Foot per second": 1.46667,
    "Knot": 0.868976,
    "Speed of light": 1.49116e-9,
    "Speed of sound": 0.00130332
  },
  "Foot per second": {
    "Meter per second": 0.3048,
    "Kilometer per hour": 1.09728,
    "Mile per hour": 0.681818,
    "Knot": 0.592484,
    "Speed of light": 1.01671e-9,
    "Speed of sound": 0.000888671
  },
  "Knot": {
    "Meter per second": 0.514444,
    "Kilometer per hour": 1.852,
    "Mile per hour": 1.15078,
    "Foot per second": 1.68781,
    "Speed of light": 1.71589e-9,
    "Speed of sound": 0.00149983
  }
};

export const dataUnits = {
  "Bit": {
    "Byte": 0.125,
    "Kilobit": 0.001,
    "Kibibit": 0.000976563,
    "Kilobyte": 0.000125,
    "Kibibyte": 0.0001220703125,
    "Megabit": 0.000001,
    "Mebibit": 9.53674e-7,
    "Megabyte": 1.25e-7,
    "Mebibyte": 1.19209e-7,
    "Gigabit": 1e-9,
    "Gibibit": 9.31323e-10,
    "Gigabyte": 1.25e-10,
    "Gibibyte": 1.16415e-10,
    "Terabit": 1e-12,
    "Tebibit": 9.09495e-13,
    "Terabyte": 1.25e-13,
    "Tebibyte": 1.13687e-13
  },
  "Byte": {
    "Bit": 8,
    "Kilobit": 0.008,
    "Kibibit": 0.0078125,
    "Kilobyte": 0.001,
    "Kibibyte": 0.0009765625,
    "Megabit": 8e-6,
    "Mebibit": 7.62939e-6,
    "Megabyte": 1e-6,
    "Mebibyte": 9.53674e-7,
    "Gigabit": 8e-9,
    "Gibibit": 7.45058e-9,
    "Gigabyte": 1e-9,
    "Gibibyte": 9.31323e-10,
    "Terabit": 8e-12,
    "Tebibit": 7.27596e-12,
    "Terabyte": 1e-12,
    "Tebibyte": 9.09495e-13
  },
  "Kilobit": {
    "Bit": 1000,
    "Byte": 125,
    "Kibibit": 0.976563,
    "Kilobyte": 0.125,
    "Kibibyte": 0.1220703125,
    "Megabit": 0.001,
    "Mebibit": 0.000953674,
    "Megabyte": 0.000125,
    "Mebibyte": 0.000119209,
    "Gigabit": 0.000001,
    "Gibibit": 9.31323e-7,
    "Gigabyte": 1.25e-7,
    "Gibibyte": 1.16415e-7,
    "Terabit": 1e-9,
    "Tebibit": 9.09495e-10,
    "Terabyte": 1.25e-10,
    "Tebibyte": 1.13687e-10
  },
  "Kilobyte": {
    "Bit": 8000,
    "Byte": 1000,
    "Kilobit": 8,
    "Kibibit": 7.8125,
    "Kibibyte": 0.9765625,
    "Megabit": 0.008,
    "Mebibit": 0.00762939,
    "Megabyte": 0.001,
    "Mebibyte": 0.000953674,
    "Gigabit": 8e-6,
    "Gibibit": 7.45058e-6,
    "Gigabyte": 1e-6,
    "Gibibyte": 9.31323e-7,
    "Terabit": 8e-9,
    "Tebibit": 7.27596e-9,
    "Terabyte": 1e-9,
    "Tebibyte": 9.09495e-10
  },
  "Megabyte": {
    "Bit": 8000000,
    "Byte": 1000000,
    "Kilobit": 8000,
    "Kibibit": 7812.5,
    "Kilobyte": 1000,
    "Kibibyte": 976.563,
    "Megabit": 8,
    "Mebibit": 7.62939,
    "Mebibyte": 0.953674,
    "Gigabit": 0.008,
    "Gibibit": 0.00745058,
    "Gigabyte": 0.001,
    "Gibibyte": 0.000931323,
    "Terabit": 8e-6,
    "Tebibit": 7.27596e-6,
    "Terabyte": 1e-6,
    "Tebibyte": 9.09495e-7
  },
  "Gigabyte": {
    "Bit": 8000000000,
    "Byte": 1000000000,
    "Kilobit": 8000000,
    "Kibibit": 7812500,
    "Kilobyte": 1000000,
    "Kibibyte": 976563,
    "Megabit": 8000,
    "Mebibit": 7629.39,
    "Megabyte": 1000,
    "Mebibyte": 953.674,
    "Gigabit": 8,
    "Gibibit": 7.45058,
    "Gibibyte": 0.931323,
    "Terabit": 0.008,
    "Tebibit": 0.00727596,
    "Terabyte": 0.001,
    "Tebibyte": 0.000909495
  }
};

export const pressureUnits = {
  "Pascal": {
    "Kilopascal": 0.001,
    "Bar": 0.00001,
    "Psi": 0.000145038,
    "Atmosphere": 9.86923e-6,
    "Torr": 0.00750062,
    "Millimeter of Mercury": 0.00750062
  },
  "Kilopascal": {
    "Pascal": 1000,
    "Bar": 0.01,
    "Psi": 0.145038,
    "Atmosphere": 0.00986923,
    "Torr": 7.50062,
    "Millimeter of Mercury": 7.50062
  },
  "Bar": {
    "Pascal": 100000,
    "Kilopascal": 100,
    "Psi": 14.5038,
    "Atmosphere": 0.986923,
    "Torr": 750.062,
    "Millimeter of Mercury": 750.062
  },
  "Psi": {
    "Pascal": 6894.76,
    "Kilopascal": 6.89476,
    "Bar": 0.0689476,
    "Atmosphere": 0.068046,
    "Torr": 51.7149,
    "Millimeter of Mercury": 51.7149
  },
  "Atmosphere": {
    "Pascal": 101325,
    "Kilopascal": 101.325,
    "Bar": 1.01325,
    "Psi": 14.6959,
    "Torr": 760,
    "Millimeter of Mercury": 760
  },
  "Torr": {
    "Pascal": 133.322,
    "Kilopascal": 0.133322,
    "Bar": 0.00133322,
    "Psi": 0.0193368,
    "Atmosphere": 0.00131579,
    "Millimeter of Mercury": 1
  },
  "Millimeter of Mercury": {
    "Pascal": 133.322,
    "Kilopascal": 0.133322,
    "Bar": 0.00133322,
    "Psi": 0.0193368,
    "Atmosphere": 0.00131579,
    "Torr": 1
  }
};

export const angleUnits = {
  "Degree": {
    "Radian": 0.0174533,
    "Gradian": 1.11111,
    "Milliradian": 17.4533,
    "Minute of arc": 60,
    "Second of arc": 3600
  },
  "Radian": {
    "Degree": 57.2958,
    "Gradian": 63.662,
    "Milliradian": 1000,
    "Minute of arc": 3437.75,
    "Second of arc": 206265
  },
  "Gradian": {
    "Degree": 0.9,
    "Radian": 0.015708,
    "Milliradian": 15.708,
    "Minute of arc": 54,
    "Second of arc": 3240
  },
  "Milliradian": {
    "Degree": 0.0572958,
    "Radian": 0.001,
    "Gradian": 0.063662,
    "Minute of arc": 3.43775,
    "Second of arc": 206.265
  },
  "Minute of arc": {
    "Degree": 0.0166667,
    "Radian": 0.000290888,
    "Gradian": 0.0185185,
    "Milliradian": 0.290888,
    "Second of arc": 60
  },
  "Second of arc": {
    "Degree": 0.000277778,
    "Radian": 4.84814e-6,
    "Gradian": 0.000308642,
    "Milliradian": 0.00484814,
    "Minute of arc": 0.0166667
  }
};

// Convert from one unit to another
export const convertValue = (
  value: number,
  fromUnit: string,
  toUnit: string,
  unitType: string
) => {
  if (fromUnit === toUnit) {
    return value;
  }

  let unitList: any;

  switch (unitType) {
    case "length":
      unitList = lengthUnits;
      break;
    case "weight":
      unitList = weightUnits;
      break;
    case "temperature":
      unitList = temperatureUnits;
      if (typeof unitList[fromUnit][toUnit] === 'function') {
        return unitList[fromUnit][toUnit](value);
      }
      break;
    case "area":
      unitList = areaUnits;
      break;
    case "volume":
      unitList = volumeUnits;
      break;
    case "time":
      unitList = timeUnits;
      break;
    case "speed":
      unitList = speedUnits;
      break;
    case "data":
      unitList = dataUnits;
      break;
    case "pressure":
      unitList = pressureUnits;
      break;
    case "angle":
      unitList = angleUnits;
      break;
    default:
      return value;
  }

  if (!unitList || !unitList[fromUnit] || !unitList[fromUnit][toUnit]) {
    console.error(`Conversion from ${fromUnit} to ${toUnit} not supported`);
    return value;
  }

  return value * unitList[fromUnit][toUnit];
};

// Get all available units for a specific unit type
export const getUnitsForType = (unitType: string): string[] => {
  switch (unitType) {
    case "length":
      return Object.keys(lengthUnits);
    case "weight":
      return Object.keys(weightUnits);
    case "temperature":
      return Object.keys(temperatureUnits);
    case "area":
      return Object.keys(areaUnits);
    case "volume":
      return Object.keys(volumeUnits);
    case "time":
      return Object.keys(timeUnits);
    case "speed":
      return Object.keys(speedUnits);
    case "data":
      return Object.keys(dataUnits);
    case "pressure":
      return Object.keys(pressureUnits);
    case "angle":
      return Object.keys(angleUnits);
    default:
      return [];
  }
};
