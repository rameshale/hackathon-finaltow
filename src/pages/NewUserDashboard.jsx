import { ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '../components/Layout';
import InfoCard from '../components/InfoCard';
import CreditScoreGauge from '../components/CreditScoreGauge';
import OfferCard from '../components/OfferCard';
import { newUserData } from '../data/newUserData';

function NewUserDashboard() {
  return (
    <Layout userName={newUserData.userName} showGreeting={false}>
      <div className="px-6 py-10 max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-3xl border border-slate-200 shadow-xl p-10">

          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
              Hi {newUserData.userName},
            </h2>
            <p className="text-lg text-slate-600 mt-3">
              We’ve designed a personalized credit growth plan tailored for you.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">

            {/* Left Column */}
            <div className="space-y-8">

              <InfoCard title="Your Current Status" className="rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col items-center">
                  <CreditScoreGauge
                    score={newUserData.creditScore}
                    status={newUserData.status}
                  />
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600 font-medium">
                      Partial Credit Limit
                    </span>
                    <span className="text-slate-900 font-semibold text-base">
                      ${newUserData.partialCreditLimit}
                    </span>
                  </div>
                </div>
              </InfoCard>

              <InfoCard title="Improvement Tips" className="rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <ul className="space-y-4">
                  {newUserData.improvementTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <InfoCard title="Success Story" className="rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <img
                    src={newUserData.successStory.image}
                    alt="Success Story"
                    className="w-14 h-14 rounded-full object-cover shadow-sm"
                  />
                  <div>
                    <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold inline-block mb-3">
                      +20 pts improvement
                    </div>
                    <p className="text-slate-600 text-sm italic leading-relaxed">
                      "{newUserData.successStory.quote}"
                    </p>
                  </div>
                </div>
              </InfoCard>

            </div>

            {/* Right Column */}
            <div className="xl:col-span-2 space-y-12">

              {/* Offers */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Your Customized Offers
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {newUserData.offers.map((offer) => (
                    <OfferCard key={offer.id} offer={offer} />
                  ))}
                </div>
              </div>

              {/* Improvement Plan */}
              <InfoCard
                title="Credit Improvement Plan"
                className="rounded-2xl border border-slate-200 shadow-md"
              >
                <div className="flex items-center gap-3 mb-8">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-600 text-sm">
                    Track your progress toward approval readiness
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {newUserData.improvementPlan.steps.map((step) => (
                    <div
                      key={step.id}
                      className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${
                        step.status === 'In Progress'
                          ? 'bg-blue-50 border-blue-300'
                          : step.status === 'Next Step'
                          ? 'bg-green-50 border-green-300'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <CheckCircle
                          className={`w-5 h-5 ${
                            step.status === 'In Progress'
                              ? 'text-blue-600'
                              : step.status === 'Next Step'
                              ? 'text-green-600'
                              : 'text-slate-400'
                          }`}
                        />

                        {step.status === 'Next Step' && (
                          <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                            Next
                          </span>
                        )}
                      </div>

                      <p className="text-slate-900 font-semibold text-sm leading-relaxed">
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Score Target */}
                <div className="flex items-center justify-between bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      Current Target
                    </p>
                    <p className="text-3xl font-semibold text-slate-900">
                      {newUserData.improvementPlan.targetScore}
                    </p>
                  </div>

                  <ArrowRight className="w-6 h-6 text-blue-600" />

                  <div className="text-right">
                    <p className="text-xs text-slate-500 mb-1">
                      Goal
                    </p>
                    <p className="text-3xl font-semibold text-green-600">
                      {newUserData.improvementPlan.targetScore}
                    </p>
                  </div>
                </div>

              </InfoCard>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default NewUserDashboard;