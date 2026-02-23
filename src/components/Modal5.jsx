import { ChevronLeft } from 'lucide-react';

function Modal5() {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 rounded-3xl shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-1 text-slate-700">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-base font-medium">Credit Coach Update</span>
        </div>
        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-slate-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
            Your Credit Uplift Progress
          </h2>
        </div>
        <div className="flex flex-col items-center space-y-1 flex-shrink-0 ml-4">
          <div className="text-3xl">💡</div>
          <div className="text-6xl">👨‍💼</div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 mb-6 space-y-4">
        <p className="text-sm font-semibold text-slate-800">
          Great job! You reduced your utilization to 34%.
        </p>

        <div className="space-y-3">
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <p className="text-sm text-slate-700">
              Your goal is 30% pay down another $50+ to reach it.
            </p>
          </div>

          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
            <p className="text-sm text-slate-700">
              One more on time payment will get you to 660+
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-800 mb-4">
          Recommended Starter Options <span className="text-slate-500">(Optional)</span>
        </h4>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-4 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                <div className="w-1 h-3 bg-white rounded"></div>
                <div className="w-1 h-4 bg-white rounded ml-0.5"></div>
                <div className="w-1 h-3 bg-white rounded ml-0.5"></div>
              </div>
              <span className="text-xs font-semibold">Synchrony</span>
            </div>
            <div className="mb-8"></div>
            <div className="text-xs font-mono opacity-80">•••• •••• •••• 1234</div>
          </div>

          <div className="bg-gradient-to-br from-orange-300 via-yellow-200 to-orange-300 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-6 h-6 bg-slate-700 rounded"></div>
              <div className="w-6 h-6 bg-slate-600 rounded"></div>
            </div>
            <div className="mb-4"></div>
            <div className="w-12 h-8 bg-slate-700 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-slate-900">Credit Builder Starter Card</h5>
            <p className="text-xs text-slate-600">Make limit one policies</p>
          </div>
          <div className="space-y-2">
            <h5 className="text-xs font-bold text-slate-900">Buy Now, Pay Later Plan</h5>
            <ul className="space-y-0.5 text-xs text-slate-600">
              <li>• May slaming payment</li>
              <li>• Moderate startilena</li>
            </ul>
          </div>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 mb-3">
        View Full Progress
      </button>

      <p className="text-xs text-slate-600 text-center">
        Continue building your credit journey
      </p>
    </div>
  );
}

export default Modal5;
