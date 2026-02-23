import { ArrowRight } from 'lucide-react';

function OfferCard({ offer }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-visible">

      {/* Header */}
      <div className={`relative ${offer.buttonColor} px-5 py-4 overflow-hidden rounded-tl-2xl rounded-tr-2xl`}>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300" />
        <h3 className="relative text-white font-semibold text-sm tracking-wide">
          {offer.title}
        </h3>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col">

        {/* Icon Section */}
        <div className="h-24 bg-gradient-to-br from-slate-50 to-white rounded-xl mb-5 flex items-center justify-center border border-slate-200 shadow-inner">
          <div className="text-4xl">
            {offer.id === 1 ? '🏦' : offer.id === 2 ? '📊' : '👨‍💼'}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-900 font-semibold text-sm leading-relaxed mb-4">
          {offer.description}
        </p>

        {/* Details */}
        <ul className="space-y-2 mb-6">
          {offer.details.map((detail, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-slate-600 text-xs leading-relaxed"
            >
              <span className="mt-1 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className={`mt-auto w-full ${offer.buttonColor} text-white py-2.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md`}
        >
          <span>{offer.buttonText}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>

      </div>
    </div>
  );
}

export default OfferCard;