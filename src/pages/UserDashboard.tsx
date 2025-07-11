
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { BarChart, LineChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

type ConversionHistoryItem = {
  id: number;
  date: string;
  fromUnit: string;
  toUnit: string;
  fromValue: number;
  toValue: number;
  category: string;
};

const UserDashboard = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const [conversionHistory, setConversionHistory] = useState<ConversionHistoryItem[]>([]);
  const [activityData, setActivityData] = useState<any[]>([]);
  
  useEffect(() => {
    if (isLoaded && user) {
      // Load conversion history from localStorage
      const storedHistory = localStorage.getItem(`conversionHistory_${user.id}`);
      if (storedHistory) {
        const parsedHistory = JSON.parse(storedHistory);
        setConversionHistory(parsedHistory);
        
        // Process data for charts
        const lastSevenDays = processActivityData(parsedHistory);
        setActivityData(lastSevenDays);
      }
    }
  }, [isLoaded, user]);
  
  // Process data for display in charts
  const processActivityData = (history: ConversionHistoryItem[]) => {
    const today = new Date();
    const last7Days: { [key: string]: { date: string, count: number } } = {};
    
    // Initialize the last 7 days with 0 counts
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      const dateStr = format(date, 'yyyy-MM-dd');
      last7Days[dateStr] = { date: format(date, 'MMM dd'), count: 0 };
    }
    
    // Count conversions for each day
    history.forEach(item => {
      if (item.date in last7Days) {
        last7Days[item.date].count += 1;
      }
    });
    
    return Object.values(last7Days);
  };
  
  const getCategoryDistribution = () => {
    const categories: { [key: string]: number } = {};
    
    conversionHistory.forEach(item => {
      if (item.category in categories) {
        categories[item.category]++;
      } else {
        categories[item.category] = 1;
      }
    });
    
    return Object.entries(categories).map(([name, value]) => ({ name, value }));
  };
  
  // Sort history with most recent first
  const sortedHistory = [...conversionHistory].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA; // Most recent first
  });
  
  // Get the count of conversions done today
  const getTodayCount = () => {
    const today = format(new Date(), 'yyyy-MM-dd');
    return conversionHistory.filter(item => item.date === today).length;
  };
  
  // Calculate the conversion streak (consecutive days)
  const getStreak = () => {
    if (conversionHistory.length === 0) return 0;
    
    const dates = [...new Set(conversionHistory.map(item => item.date))];
    dates.sort((a, b) => new Date(b).getTime() - new Date(a).getTime()); // Sort descending
    
    let streak = 1;
    const today = format(new Date(), 'yyyy-MM-dd');
    const yesterday = format(new Date(new Date().setDate(new Date().getDate() - 1)), 'yyyy-MM-dd');
    
    // Check if the user has a conversion today
    if (dates[0] !== today) {
      // Check if the user has a conversion yesterday
      if (dates[0] !== yesterday) {
        return 0; // Streak broken
      }
    }
    
    // Count consecutive days
    for (let i = 0; i < dates.length - 1; i++) {
      const currentDate = new Date(dates[i]);
      const nextDate = new Date(dates[i + 1]);
      const diffTime = currentDate.getTime() - nextDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-full md:w-1/4">
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">Profile</CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                    Go to Converter
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={user?.imageUrl} alt={user?.fullName || 'User'} />
                  <AvatarFallback>
                    {user?.firstName?.charAt(0) || ''}
                    {user?.lastName?.charAt(0) || ''}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-medium">{user?.fullName || 'User'}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user?.primaryEmailAddress?.emailAddress}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">{conversionHistory.length}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Total Conversions</div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">{getStreak()}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Day Streak</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Today's Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="text-3xl font-bold mb-2">{getTodayCount()}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Conversions Today</div>
                  
                  <Button 
                    className="w-full mt-6" 
                    variant="default"
                    onClick={() => navigate('/')}
                  >
                    New Conversion
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full md:w-3/4">
            <Tabs defaultValue="history">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="history">Conversion History</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="history" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Conversions</CardTitle>
                    <CardDescription>
                      View your recent unit conversions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {sortedHistory.length > 0 ? (
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Date</TableHead>
                              <TableHead>Category</TableHead>
                              <TableHead>From</TableHead>
                              <TableHead>To</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {sortedHistory.slice(0, 10).map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>
                                  {format(new Date(item.date), 'MMM dd, yyyy')}
                                </TableCell>
                                <TableCell>
                                  <Badge variant="outline">{item.category}</Badge>
                                </TableCell>
                                <TableCell>
                                  {item.fromValue} {item.fromUnit}
                                </TableCell>
                                <TableCell>
                                  {item.toValue} {item.toUnit}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <p>No conversion history yet.</p>
                        <Button 
                          className="mt-4" 
                          variant="outline"
                          onClick={() => navigate('/converter')}
                        >
                          Make Your First Conversion
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Conversion Activity</CardTitle>
                      <CardDescription>
                        Your conversion activity over the last 7 days
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={activityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#3b82f6" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Category Distribution</CardTitle>
                      <CardDescription>
                        Types of conversions you perform most
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        {conversionHistory.length > 0 ? (
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={getCategoryDistribution()}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                            </LineChart>
                          </ResponsiveContainer>
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-500">
                            No data available
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
