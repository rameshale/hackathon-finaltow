import { ChevronLeft, ChevronRight } from 'lucide-react';

function Modal3({ onContinue, onBack }) {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 rounded-3xl shadow-2xl p-8 relative">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-base font-medium">Welcome to Your Credit Journey</span>
        </button>
        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-slate-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
            Welcome to<br />
            Your Credit Journey
          </h2>
        </div>
        <div className="flex flex-col items-center space-y-1 flex-shrink-0 ml-4">
          <div className="text-3xl">💡</div>
          <div className="text-6xl">👨‍💼</div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 mb-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">PRISM Approval Gap: 32 points</span>
        </div>

        <div className="relative">
          <div className="w-full bg-slate-300 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600">Current PRISM Eligibility</span>
          <span className="font-bold text-slate-900">Goal: 660</span>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-slate-900 font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-between group mb-3"
      >
        <span className="text-base">View Credit Plan</span>
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="text-xs text-slate-600 text-center">
        No impact to your current application
      </p>
    </div>
  );
}

export default Modal3;
