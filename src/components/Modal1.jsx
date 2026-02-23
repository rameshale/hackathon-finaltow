import { ChevronRight } from 'lucide-react';

function Modal1({ onContinue }) {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 rounded-3xl shadow-2xl p-8 relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <h3 className="text-lg font-semibold text-slate-800">Application Status</h3>
        </div>
        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-slate-400 rounded-full"></div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-4">Application Not Approved</h2>

      <p className="text-slate-700 text-sm leading-relaxed mb-6">
        Based on your current PRISM eligibility score, your Synchrony credit application cannot be approved at this time.
      </p>

      <div className="flex items-start space-x-3 mb-8">
        <div className="text-5xl flex-shrink-0">💡</div>
        <div>
          <p className="text-slate-800 font-medium">
            Let's build stronger credit<br />
            to improve your future eligibility!
          </p>
        </div>
      </div>

      <div className="relative mb-6">
        <div className="absolute -right-4 -top-6 text-6xl">👨‍💼</div>
      </div>

      <button
        onClick={onContinue}
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-slate-900 font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-between group"
      >
        <span className="text-base">Start Your Credit Uplift Journey</span>
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="text-xs text-slate-600 text-center mt-4">
        Optional program to improve your future approval
      </p>
    </div>
  );
}

export default Modal1;
