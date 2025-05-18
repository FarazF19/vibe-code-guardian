
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Upload, FileText, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Dashboard header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b border-slate-200 dark:border-slate-800">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShieldCheck className="w-8 h-8 text-vibeblue-500" />
              <span className="text-xl font-bold gradient-text">VibeSafe</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-vibeviolet-500 flex items-center justify-center text-white text-xs">
                JD
              </div>
              <span className="text-sm font-medium hidden md:inline">John Doe</span>
            </div>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Dashboard content */}
      <main className="container py-8">
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-2">Welcome back, John</h1>
          <p className="text-slate-500 dark:text-slate-400">Your security dashboard</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="vibrant-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Security Score</p>
                <h3 className="text-2xl font-bold gradient-text">82/100</h3>
              </div>
              <div className="rounded-full p-3 bg-vibeblue-100 dark:bg-vibeblue-900/30 text-vibeblue-500">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={82} className="h-2 bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
          
          <div className="vibrant-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Scans This Month</p>
                <h3 className="text-2xl font-bold">5/10</h3>
              </div>
              <div className="rounded-full p-3 bg-vibeviolet-100 dark:bg-vibeviolet-900/30 text-vibeviolet-500">
                <FileText className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={50} className="h-2 bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
          
          <div className="vibrant-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Pro Plan</p>
                <h3 className="text-2xl font-bold">19 days left</h3>
              </div>
              <div className="rounded-full p-3 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                <Settings className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="text-sm" size="sm">
                Manage Subscription
              </Button>
            </div>
          </div>
        </div>
        
        <div className="vibrant-card p-8 text-center mb-8">
          <h2 className="text-xl font-semibold mb-3">Ready to scan your code?</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            Upload your codebase or connect to your GitHub repository to start securing your code.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500 hover:from-vibeblue-600 hover:to-vibeviolet-600 text-white px-6 py-6">
              <Upload className="mr-2 h-5 w-5" /> Upload Code
            </Button>
            <Button variant="outline" className="border-slate-300 dark:border-slate-700 px-6 py-6">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Connect GitHub
            </Button>
          </div>
        </div>
        
        <div className="vibrant-card p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Scans</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Project</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Issues</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-slate-500 dark:text-slate-400">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <td className="py-3 px-4 text-sm">May 17, 2023</td>
                  <td className="py-3 px-4 text-sm font-medium">frontend-app</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Secure
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">0</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <td className="py-3 px-4 text-sm">May 15, 2023</td>
                  <td className="py-3 px-4 text-sm font-medium">api-service</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                      Warning
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">3</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm">May 10, 2023</td>
                  <td className="py-3 px-4 text-sm font-medium">backend-app</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                      Critical
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">7</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
