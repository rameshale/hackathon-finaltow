import { ChevronLeft, ChevronRight, CreditCard, Calendar, Lock } from 'lucide-react';

function Modal4({ onFinish, onBack }) {
  return (
    <div className="bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 rounded-3xl shadow-2xl p-6 relative max-h-[90vh] overflow-y-auto">
      <div className="flex items-center justify-between mb-4 sticky top-0 bg-gradient-to-br from-yellow-100 via-green-100 to-blue-100 pb-2 z-10">
        <button
          onClick={onBack}
          className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 transition"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm font-medium">My Credit Uplift Journey</span>
        </button>
        <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
          <div className="w-5 h-5 bg-slate-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xs font-medium text-slate-600 bg-white/60 px-3 py-1 rounded-full">Progress</span>
            <span className="text-xs font-medium text-slate-600 bg-yellow-200/60 px-3 py-1 rounded-full">Tracker</span>
          </div>

          <div className="bg-gradient-to-r from-green-400/30 to-green-300/30 backdrop-blur-sm rounded-xl px-4 py-2 mb-4 inline-flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-1 h-4 bg-orange-500 rounded"></div>
              <div className="w-1 h-5 bg-yellow-500 rounded"></div>
              <div className="w-1 h-6 bg-green-500 rounded"></div>
            </div>
            <span className="text-base font-bold text-slate-900">1 of 32 points earned</span>
          </div>
        </div>
        <div className="flex flex-col items-center flex-shrink-0 ml-2">
          <div className="text-2xl">💡</div>
          <div className="text-5xl">👨‍💼</div>
        </div>
      </div>

      <div className="bg-pink-100/60 backdrop-blur-sm rounded-2xl p-4 mb-4">
        <h3 className="text-base font-bold text-slate-900 mb-3">Weekly Credit Plan</h3>

        <div className="space-y-2 mb-4">
          <div className="bg-white/80 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-blue-700" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Reduce Credit Utilization Below 30%</p>
                <p className="text-xs text-slate-600">Goal: pay/settle card(s) payers</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-700">+9</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">+1 pt</span>
            </div>
          </div>

          <div className="bg-white/80 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-green-700" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Set Up Automatic Bill Payments</p>
                <p className="text-xs text-slate-600">Improvize payments</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-700">Jul 20</span>
              <span className="bg-yellow-500 text-slate-900 text-xs px-2 py-1 rounded-full font-semibold">-3</span>
            </div>
          </div>

          <div className="bg-white/80 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center">
                <Lock className="w-4 h-4 text-purple-700" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Make One On-Time Payment</p>
                <p className="text-xs text-slate-600">Takes placing march</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-700">Aug 15</span>
              <span className="bg-blue-700 text-white text-xs px-3 py-1 rounded-full font-semibold">Locked</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-xs font-semibold text-slate-700 mb-3">Recommended Starter Options <span className="text-slate-500">(Optional)</span></h4>

        <div className="bg-amber-50/80 backdrop-blur-sm rounded-2xl p-4">
          <div className="flex items-start space-x-3 mb-3">
            <div className="flex-1">
              <h5 className="text-sm font-bold text-slate-900 mb-2">Credit Builder Starter Card</h5>
              <ul className="space-y-1 text-xs text-slate-700">
                <li>• Pre-Approved just for you</li>
                <li>• Sales of interent</li>
                <li>• Locks positive payment history</li>
                <li>• Payments reported to credit bureaus</li>
              </ul>
            </div>
            <div className="w-24 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg flex-shrink-0">
              <div>
                <div className="text-xs mb-1">Synchrony</div>
                <div className="text-xs opacity-80">•••• 1234</div>
              </div>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-slate-900 font-semibold py-2 px-4 rounded-xl shadow-md transition-all duration-300 text-sm">
            Accept Starter Card
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-slate-300 rounded-lg flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-slate-600" />
            </div>
            <div className="w-6 h-6 bg-slate-200 rounded"></div>
          </div>
          <h5 className="text-xs font-bold text-slate-900 mb-1">Credit Builder Starter Card</h5>
          <ul className="space-y-0.5 text-xs text-slate-600 mb-2">
            <li>• Low $300 pending limit</li>
            <li>• No annual fee</li>
            <li>• Builds positive payment history</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-slate-900 font-semibold py-2 px-3 rounded-lg shadow-sm transition-all duration-300 text-xs">
            Learn More
          </button>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-slate-300 rounded-lg flex items-center justify-center">
              <Calendar className="w-4 h-4 text-slate-600" />
            </div>
            <div className="w-6 h-6 bg-slate-200 rounded"></div>
          </div>
          <h5 className="text-xs font-bold text-slate-900 mb-1">Buy Now, Pay Later Plan</h5>
          <ul className="space-y-0.5 text-xs text-slate-600 mb-2">
            <li>• Preplans payments</li>
            <li>• Flextible splits</li>
            <li>• Payments reported to bureaus</li>
          </ul>
          <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-slate-900 font-semibold py-2 px-3 rounded-lg shadow-sm transition-all duration-300 text-xs">
            Learn More
          </button>
        </div>
      </div>

      <p className="text-xs text-slate-600 text-center mb-4 italic">
        Just a little move to reach approval readiness.
      </p>

      <button
        onClick={onFinish}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300"
      >
        Finish
      </button>
    </div>
  );
}

export default Modal4;
