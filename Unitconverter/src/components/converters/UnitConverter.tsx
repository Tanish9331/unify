
import React, { useState, useRef, useEffect } from 'react';
import { 
  Ruler, Weight, Thermometer, Droplet, Clock, Gauge, DollarSign,
  AreaChart, Zap, RotateCcw, Activity,
  Database, Magnet, Waves, Type, FlaskConical, Scale, Atom,
  Flame, Fuel, IndianRupee
} from 'lucide-react';
import useUnitConverter, { ConversionType, conversionCategories } from '@/hooks/useUnitConverter';
import ConversionCard from './ConversionCard';
import GlassmorphicCard from '../ui-elements/GlassmorphicCard';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UnitConverter: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('common');
  const [selectedType, setSelectedType] = useState<ConversionType>('length');
  const tabsRef = useRef<HTMLDivElement>(null);
  const converter = useUnitConverter(selectedType);
  
  useEffect(() => {
    const activeTab = tabsRef.current?.querySelector('.active-tab');
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedType]);

  const conversionIcons: Record<string, React.ReactNode> = {
    // Common converters
    length: <Ruler size={18} />,
    weight: <Weight size={18} />,
    temperature: <Thermometer size={18} />,
    volume: <Droplet size={18} />,
    time: <Clock size={18} />,
    speed: <Gauge size={18} />,
    area: <AreaChart size={18} />,
    power: <Zap size={18} />,
    pressure: <Gauge size={18} />,
    energy: <Flame size={18} />,
    fuel: <Fuel size={18} />,
    currency: <IndianRupee size={18} />,
    
    // Engineering converters
    angularVelocity: <RotateCcw size={18} />,
    acceleration: <Activity size={18} />,
    density: <Scale size={18} />,
    torque: <Zap size={18} />,
    thermalConductivity: <Thermometer size={18} />,
    heatCapacity: <Flame size={18} />,
    heatTransfer: <Flame size={18} />,
    
    // Electricity & Magnetism
    charge: <Zap size={18} />,
    electricPotential: <Zap size={18} />,
    inductance: <Zap size={18} />,
    magnetism: <Magnet size={18} />,
    
    // Fluids & Radiology
    flowRate: <Droplet size={18} />,
    viscosity: <FlaskConical size={18} />,
    surfaceTension: <FlaskConical size={18} />,
    radiation: <Atom size={18} />,
    
    // Other converters
    data: <Database size={18} />,
    sound: <Waves size={18} />,
    typography: <Type size={18} />,
  };
  
  const handleTypeChange = (type: ConversionType) => {
    setSelectedType(type);
    converter.setConversionType(type);
  };
  
  return (
    <section id="converter" className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-2">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Powerful & Simple
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Advanced Unit Converter</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Convert between hundreds of different units with precision and ease. Select a category to get started.
          </p>
        </div>
        
        <div className="mb-8">
          <Tabs defaultValue="common" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <div className="relative overflow-hidden mb-2">
              <TabsList className="w-full justify-start overflow-x-auto pb-2 flex gap-2 bg-transparent h-auto">
                <TabsTrigger 
                  value="common"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Common
                </TabsTrigger>
                <TabsTrigger 
                  value="engineering"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Engineering
                </TabsTrigger>
                <TabsTrigger 
                  value="electricity"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Electricity
                </TabsTrigger>
                <TabsTrigger 
                  value="fluids"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Fluids & Radiology
                </TabsTrigger>
                <TabsTrigger 
                  value="other"
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Other
                </TabsTrigger>
              </TabsList>
              <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
            </div>

            {(Object.keys(conversionCategories) as Array<keyof typeof conversionCategories>).map((category) => (
              <TabsContent key={category} value={category} className="mt-4">
                <div 
                  ref={tabsRef}
                  className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none snap-x"
                >
                  {conversionCategories[category].map((item: any) => (
                    <button
                      key={item.type}
                      onClick={() => handleTypeChange(item.type as ConversionType)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 snap-start",
                        selectedType === item.type 
                          ? "bg-primary text-primary-foreground active-tab" 
                          : "bg-secondary/50 text-secondary-foreground hover:bg-secondary/70"
                      )}
                    >
                      {conversionIcons[item.type]}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-7/12 animate-scale-in">
            <ConversionCard
              conversionType={converter.conversionType}
              availableUnits={converter.availableUnits}
              fromUnit={converter.fromUnit}
              setFromUnit={converter.setFromUnit}
              toUnit={converter.toUnit}
              setToUnit={converter.setToUnit}
              inputValue={converter.inputValue}
              setInputValue={converter.setInputValue}
              result={converter.result}
              showResult={converter.showResult}
              calculateResult={converter.calculateResult}
              swapUnits={converter.swapUnits}
              copyToClipboard={converter.copyToClipboard}
            />
          </div>
          
          <div className="w-full lg:w-5/12 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <GlassmorphicCard variant="subtle" hover borderGlow>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Recent Conversions</h3>
                {converter.conversionHistory.length > 0 && (
                  <button 
                    onClick={converter.clearHistory}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              
              {converter.conversionHistory.length > 0 ? (
                <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                  {converter.conversionHistory.map((item, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-secondary/30 rounded-lg text-sm"
                    >
                      <div className="flex justify-between items-center">
                        <span>
                          {item.fromValue} {item.fromUnit.symbol}
                        </span>
                        <span className="text-muted-foreground">→</span>
                        <span className="font-medium">
                          {item.formattedValue}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No conversion history yet</p>
                  <p className="text-sm mt-1">Your recent conversions will appear here</p>
                </div>
              )}
            </GlassmorphicCard>
          </div>
        </div>
        
        <div className="mt-20 glass rounded-xl p-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-display font-medium mb-2">Why Use TheUnitConverter?</h3>
            <p className="text-muted-foreground">
              The most elegant and efficient tool for your conversion needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2L2 7l10 5l10-5l-10-5z"></path><path d="M2 17l10 5l10-5"></path><path d="M2 12l10 5l10-5"></path></svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Precise & Accurate</h4>
              <p className="text-muted-foreground text-sm">
                All conversions are calculated with mathematical precision for reliable results
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M9.6 20H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v6"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path><path d="M21 15.7c0 .7-.4 1.3-1 1.7"></path><path d="M16 21.7c0 .7.4 1.3 1 1.7"></path><path d="M12 16.5V21"></path><path d="m19 16 2 2"></path><path d="M21 21a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path></svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Intuitive Design</h4>
              <p className="text-muted-foreground text-sm">
                Clean interface with real-time conversions and simple controls
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><path d="M11 18H8a2 2 0 0 1-2-2V9"></path></svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Multiple Units</h4>
              <p className="text-muted-foreground text-sm">
                Convert between a wide range of measurement systems and units
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitConverter;
