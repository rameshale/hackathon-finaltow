import { Bell, MessageCircle, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Navbar({ userName, showGreeting }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="flex h-20 items-center justify-between relative">

          {/* Left: Brand */}
          <div className="flex items-center gap-3">
         

            <div className="flex flex-col leading-tight">
             <img
            src="https://www.synchrony.com/syc/img/2023_synchrony_basic_logo.svg"
            alt="Synchrony Logo"
            className="h-9 md:h-10"
          />
            </div>
          </div>

          {/* Center: Greeting / Title */}
          <div className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 text-center lg:block">
            {showGreeting && userName ? (
              <div className="space-y-1">
                <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                  Welcome back, <span className="text-blue-600">{userName}</span>
                </h1>
                <p className="text-sm text-slate-500">
                  You're making strong progress on your credit uplift journey
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                  Credit Uplift Engine
                </h1>
          
              </div>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">

            {/* Notification Button */}
            <button
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-slate-600 transition-all duration-200 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-900 active:scale-95"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            </button>

            {/* Messages Button */}
            <button
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-slate-600 transition-all duration-200 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-900 active:scale-95"
              aria-label="Messages"
            >
              <MessageCircle className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
            </button>

            {/* Divider */}
            <div className="mx-2 h-6 w-px bg-slate-200" />

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              title="Logout"
              className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md active:scale-[0.98]"
            >
              <LogOut className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;