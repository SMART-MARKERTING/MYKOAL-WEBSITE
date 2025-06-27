import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, TrendingDown, ExternalLink, RefreshCw, Calendar, Building2, DollarSign } from 'lucide-react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: string;
  category: 'rates' | 'regulation' | 'market' | 'mbs';
}

interface MarketData {
  currentRates: {
    thirtyYear: number;
    fifteenYear: number;
    jumbo: number;
    lastUpdated: string;
  };
  news: NewsItem[];
  mbsData: {
    price: number;
    yield: number;
    change: number;
    lastUpdated: string;
  };
}

export default function MarketUpdatesPage() {
  const { data: marketData, isLoading, refetch, isFetching } = useQuery<MarketData>({
    queryKey: ['/api/market-updates'],
    refetchInterval: 1000 * 60 * 30, // Refresh every 30 minutes
    refetchOnWindowFocus: true,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'rates':
        return <TrendingUp className="w-4 h-4" />;
      case 'regulation':
        return <Building2 className="w-4 h-4" />;
      case 'market':
        return <DollarSign className="w-4 h-4" />;
      case 'mbs':
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <TrendingUp className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'rates':
        return 'bg-blue-100 text-blue-800';
      case 'regulation':
        return 'bg-red-100 text-red-800';
      case 'market':
        return 'bg-green-100 text-green-800';
      case 'mbs':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const hasValidData = marketData && (
    marketData.currentRates.thirtyYear > 0 || 
    marketData.news.length > 0 || 
    marketData.mbsData.price > 0
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-blue-900 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold">Market Updates</h1>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {[...Array(5)].map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-4/5" />
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-full mb-4" />
                  <Skeleton className="h-8 w-full mb-4" />
                  <Skeleton className="h-8 w-full" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Live Market Updates</h1>
              <p className="text-blue-200">Real-time mortgage rates, regulations, and market intelligence</p>
            </div>
            
            <Button
              onClick={() => refetch()}
              disabled={isFetching}
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* News Feed */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Latest News & Updates</h2>
              <p className="text-sm text-gray-500">
                Updated {marketData?.news?.[0]?.publishedAt ? formatDate(marketData.news[0].publishedAt) : 'recently'}
              </p>
            </div>
            
            <div className="space-y-6">
              {marketData?.news?.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={getCategoryColor(item.category)}>
                            {getCategoryIcon(item.category)}
                            <span className="ml-1 capitalize">{item.category}</span>
                          </Badge>
                          <span className="text-sm text-gray-500">{item.source}</span>
                        </div>
                        <CardTitle className="text-lg leading-tight hover:text-blue-600 transition-colors">
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            {item.title}
                          </a>
                        </CardTitle>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-3 line-clamp-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(item.publishedAt)}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          Read Full Article
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {(!marketData?.news || marketData.news.length === 0) && (
                <Card>
                  <CardContent className="text-center py-8">
                    <div className="space-y-4">
                      <p className="text-gray-500">Market news sources are currently being configured.</p>
                      <p className="text-sm text-gray-400">
                        For the latest mortgage rates and market updates, contact Mykoal directly at{' '}
                        <a href="tel:623-280-8351" className="text-blue-600 hover:underline">
                          (623) 280-8351
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Market Data Sidebar */}
          <div className="space-y-6">
            
            {/* Current Rates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                  Current Mortgage Rates
                </CardTitle>
                <p className="text-sm text-gray-500">
                  Last updated: {marketData?.currentRates?.lastUpdated ? formatDate(marketData.currentRates.lastUpdated) : 'Loading...'}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {hasValidData && marketData?.currentRates?.thirtyYear > 0 ? (
                  <>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">30-Year Fixed</span>
                      <span className="text-lg font-bold text-blue-600">
                        {marketData.currentRates.thirtyYear}%
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">15-Year Fixed</span>
                      <span className="text-lg font-bold text-green-600">
                        {marketData.currentRates.fifteenYear}%
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">Jumbo 30-Year</span>
                      <span className="text-lg font-bold text-purple-600">
                        {marketData.currentRates.jumbo}%
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-6 space-y-3">
                    <p className="text-gray-500">Rate data sources are being configured.</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800 font-medium">Get Current Rates</p>
                      <p className="text-sm text-blue-600">
                        Call Mykoal at{' '}
                        <a href="tel:623-280-8351" className="font-semibold hover:underline">
                          (623) 280-8351
                        </a>{' '}
                        for today's rates
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* MBS Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-purple-600" />
                  MBS Market Data
                </CardTitle>
                <p className="text-sm text-gray-500">
                  Mortgage-Backed Securities
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {marketData?.mbsData?.price ? `${marketData.mbsData.price}` : 'Loading...'}
                  </div>
                  <p className="text-sm text-gray-500">Current Price</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {marketData?.mbsData?.yield ? `${marketData.mbsData.yield}%` : 'Loading...'}
                    </div>
                    <p className="text-xs text-gray-500">Yield</p>
                  </div>
                  
                  <div>
                    <div className={`text-lg font-semibold ${
                      marketData?.mbsData?.change && marketData.mbsData.change > 0 
                        ? 'text-green-600' 
                        : marketData?.mbsData?.change && marketData.mbsData.change < 0 
                        ? 'text-red-600' 
                        : 'text-gray-900'
                    }`}>
                      {marketData?.mbsData?.change ? `${marketData.mbsData.change > 0 ? '+' : ''}${marketData.mbsData.change}` : 'Loading...'}
                    </div>
                    <p className="text-xs text-gray-500">Change</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <Button asChild className="w-full">
                  <Link href="/pre-qualification">
                    Get Pre-Qualified
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <Link href="/#contact">
                    Contact Mykoal
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <Link href="/#calculator">
                    Loan Calculator
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}