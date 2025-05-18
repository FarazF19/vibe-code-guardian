
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-vibeblue-950 to-slate-950 p-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMnYxOS42YzAgMS4yMzItLjk2OCAyLjItMi4xOTggMi4ySDE4Yy0xLjIzIDAtMi4yLTEuMTY4LTIuMi0yLjRWMjAuMmMwLTEuMjMyIDEuMTctMi4yIDIuNC0yLjJoMTcuNnoiIHN0cm9rZT0iIzMzODlmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDB6bTAgN2MtMTIuNzAzIDAtMjMgMTAuMjk3LTIzIDIzIDAgMTIuNzAzIDEwLjI5NyAyMyAyMyAyMyAxMi43MDMgMCAyMy0xMC4yOTcgMjMtMjMgMC0xMi43MDMtMTAuMjk3LTIzLTIzLTIzeiIgc3Ryb2tlPSIjODcwMGZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-vibeblue-600/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-vibeviolet-600/10 rounded-full blur-[80px]"></div>
      
      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 rounded-full p-2">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text ml-2">VibeSafe</span>
          </Link>
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-slate-400 mt-2">Sign in to your account</p>
        </div>
        
        <div className="glass-card glow rounded-xl border border-slate-800 p-6">
          <div className="mb-6">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-600 hover:bg-slate-800 p-6 rounded-lg">
              <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="currentColor"/>
              </svg>
              <span>Sign in with Google</span>
            </Button>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 glass-card text-slate-400">
                or continue with
              </span>
            </div>
          </div>
          
          <form>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-slate-800 border-slate-700 text-white"
                />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                    Password
                  </label>
                  <Link to="/forgot-password" className="text-sm text-vibeblue-400 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-3 rounded-lg bg-slate-800 border-slate-700 text-white"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 hover:from-vibeblue-700 hover:to-vibeviolet-700 text-white p-6 rounded-lg">
                Sign in
              </Button>
            </div>
          </form>
        </div>
        
        <div className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <Link to="/register" className="text-vibeblue-400 hover:underline font-medium">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
