import { ChevronLeft } from 'lucide-react';

function Modal2({ onContinue, onBack }) {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 rounded-3xl shadow-2xl p-8 relative">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-base font-medium">Enroll in Credit Coach</span>
        </button>
        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-slate-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex items-start justify-between mb-8">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-900 mb-6 leading-relaxed">
            Would you like to work<br />
            with us to improve your<br />
            credit eligibility for<br />
            future applications?
          </h2>
        </div>
        <div className="flex flex-col items-center space-y-2 flex-shrink-0 ml-4">
          <div className="text-4xl">💡</div>
          <div className="text-6xl">👨‍💼</div>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 w-5 h-5 rounded border-orange-400 text-orange-500 focus:ring-orange-500"
          />
          <span className="text-sm text-slate-700 leading-relaxed">
            I understand this does not guarantee future approval.
          </span>
        </label>

        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 w-5 h-5 rounded border-yellow-400 text-yellow-500 focus:ring-yellow-500"
          />
          <span className="text-sm text-slate-700 leading-relaxed">
            I consent to personalized guidance and progress tracking aimed at improving my credit eligibility
          </span>
        </label>
      </div>

      <p className="text-xs text-slate-600 text-center mb-6">
        No impact to your current application
      </p>

      <button
        onClick={onContinue}
        className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-slate-900 font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300"
      >
        Continue
      </button>
    </div>
  );
}

export default Modal2;
