
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Upload, FileText, Settings, LogOut, Code, Terminal, Eye, Lock, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';

const SecurityIssueCard = ({ 
  title, 
  description, 
  severity, 
  affectedFiles, 
  icon: Icon 
}: { 
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  affectedFiles: string[];
  icon: React.ElementType;
}) => {
  const severityColors = {
    low: 'bg-blue-500',
    medium: 'bg-yellow-500',
    high: 'bg-orange-500',
    critical: 'bg-red-500'
  };
  
  const severityLabels = {
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    critical: 'Critical'
  };
  
  return (
    <div className="vibrant-card hover-lift">
      <div className="flex items-center border-b border-slate-800 p-5">
        <div className={`w-10 h-10 rounded-lg ${severityColors[severity]}/20 flex items-center justify-center mr-4`}>
          <Icon className={`h-5 w-5 text-${severity === 'low' ? 'blue' : severity === 'medium' ? 'yellow' : severity === 'high' ? 'orange' : 'red'}-400`} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-400">
            <span className={`inline-block w-2 h-2 rounded-full ${severityColors[severity]} mr-1`}></span>
            {severityLabels[severity]} Severity
          </p>
        </div>
        <Button variant="outline" className="text-vibeblue-400 border-slate-700 hover:bg-slate-800">Fix Issue</Button>
      </div>
      <div className="p-5">
        <p className="text-slate-300 mb-4">{description}</p>
        <div>
          <p className="text-sm font-medium text-slate-400 mb-2">Affected Files:</p>
          <div className="space-y-1">
            {affectedFiles.map((file, index) => (
              <div key={index} className="bg-slate-800/50 px-3 py-2 rounded-md text-sm font-mono text-slate-300">
                {file}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const securityIssues = [
    {
      title: "SQL Injection Vulnerability",
      description: "User input isn't properly sanitized before database queries, potentially allowing SQL injection attacks.",
      severity: "critical" as const,
      affectedFiles: ["src/controllers/userController.js", "src/services/authService.js"],
      icon: AlertTriangle
    },
    {
      title: "Outdated Dependencies",
      description: "Several packages in your project have known vulnerabilities and require updates.",
      severity: "medium" as const,
      affectedFiles: ["package.json"],
      icon: FileText
    },
    {
      title: "Insufficient Authentication",
      description: "API routes lack proper authentication middleware for sensitive operations.",
      severity: "high" as const,
      affectedFiles: ["src/routes/api.js", "src/middleware/auth.js"],
      icon: Lock
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      {/* Dashboard header */}
      <header className="bg-slate-900/80 backdrop-blur-xl shadow-md shadow-vibeblue-900/10 border-b border-slate-800 sticky top-0 z-30">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 rounded-full p-1.5">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">VibeSafe</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-vibeblue-600 to-vibeviolet-600 flex items-center justify-center text-white text-xs">
                JD
              </div>
              <span className="text-sm font-medium hidden md:inline">John Doe</span>
            </div>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      
      {/* Dashboard content */}
      <main className="container py-8">
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-2 text-white">Welcome back, John</h1>
          <p className="text-slate-400">Your security dashboard</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-card glow p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Security Score</p>
                <h3 className="text-2xl font-bold gradient-text">82/100</h3>
              </div>
              <div className="rounded-full p-3 bg-vibeblue-900/30 text-vibeblue-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={82} className="h-2 bg-slate-800" />
            </div>
          </div>
          
          <div className="glass-card glow p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Scans This Month</p>
                <h3 className="text-2xl font-bold text-white">5/10</h3>
              </div>
              <div className="rounded-full p-3 bg-vibeviolet-900/30 text-vibeviolet-400">
                <FileText className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <Progress value={50} className="h-2 bg-slate-800" />
            </div>
          </div>
          
          <div className="glass-card glow p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Pro Plan</p>
                <h3 className="text-2xl font-bold text-white">19 days left</h3>
              </div>
              <div className="rounded-full p-3 bg-slate-800 text-slate-400">
                <Settings className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="text-sm border-slate-700 text-slate-300 hover:bg-slate-800" size="sm">
                Manage Subscription
              </Button>
            </div>
          </div>
        </div>
        
        <div className="glass-card glow p-8 text-center mb-8 rounded-xl border border-slate-800 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vibeblue-500 to-transparent"></div>
          
          <h2 className="text-xl font-semibold mb-3 text-white">Ready to scan your code?</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Upload your codebase or connect to your GitHub repository to start securing your code.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button className="glass-card glow bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 hover:from-vibeblue-700 hover:to-vibeviolet-700 text-white px-6 py-6">
              <Upload className="mr-2 h-5 w-5" /> Upload Code
            </Button>
            <Button variant="outline" className="glass-card border-slate-700 hover:border-vibeblue-500 px-6 py-6">
              <Github className="mr-2 h-5 w-5" /> Connect GitHub
            </Button>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-6 text-white">Security Issues</h2>
        <div className="space-y-6 mb-8">
          {securityIssues.map((issue, index) => (
            <SecurityIssueCard key={index} {...issue} />
          ))}
        </div>
        
        <div className="glass-card p-6 rounded-xl border border-slate-800">
          <h2 className="text-xl font-semibold mb-4 text-white">Recent Scans</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Project</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Issues</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-slate-400">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-sm">May 17, 2025</td>
                  <td className="py-3 px-4 text-sm font-medium">frontend-app</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400">
                      Secure
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">0</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">View</Button>
                  </td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-sm">May 15, 2025</td>
                  <td className="py-3 px-4 text-sm font-medium">api-service</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900/30 text-yellow-400">
                      Warning
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">3</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">View</Button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm">May 10, 2025</td>
                  <td className="py-3 px-4 text-sm font-medium">backend-app</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-900/30 text-red-400">
                      Critical
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">7</td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">View</Button>
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
