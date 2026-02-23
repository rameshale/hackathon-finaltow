import { motion } from "framer-motion";

function CreditScoreGauge({ score = 642, status = "Almost Ready!" }) {
  return (
    <div className="flex flex-col items-center">
      {/* Image + Overlay Container */}
      <div className="relative w-64 h-44">
        {/* Background Credit Score Interpretation Image */}
        <img
          src={
            score >= 750
              ? "https://cdn.paisabazaar.ae/pbuae/images/what-does-a-750-credit-score-mean.png"
              : "https://cdn.paisabazaar.ae/pbuae/images/what-does-a-640-credit-score-mean.png"
          }
          alt="Credit Score Guide"
          className="w-full h-full object-contain rounded-xl border border-slate-200 shadow-sm"
        />

        {/* Animated Meter Indicator */}
      </div>

      {/* Center Score Label */}
      <div className="mt-4 text-center">
        <div className="text-xs uppercase tracking-wide text-slate-500 font-medium">
          Credit Score
        </div>
        <div className="text-4xl font-bold text-slate-900 mt-1">{score}</div>
      </div>

      {/* Status Pill */}
      <div className="mt-2">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-5 py-1.5 rounded-full text-sm font-semibold shadow-sm border border-yellow-300">
          {status}
        </span>
      </div>
    </div>
  );
}

export default CreditScoreGauge;
