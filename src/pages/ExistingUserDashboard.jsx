import { useState } from 'react';
import { ArrowRight, CheckCircle, Lightbulb } from "lucide-react";
import Layout from "../components/Layout";
import InfoCard from "../components/InfoCard";
import CreditScoreGauge from "../components/CreditScoreGauge";
import TaskItem from "../components/TaskItem";
import ProgressBar from "../components/ProgressBar";
import ModalWrapper from '../components/ModalWrapper';
import Modal5 from '../components/Modal5';
import { existingUserData } from "../data/existingUserData";

function ExistingUserDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout userName={existingUserData.userName} showGreeting={true}>
      <div className="mx-auto max-w-[1400px] space-y-1 px-8">

        {/* Header Section */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Hi {existingUserData.userName},
              <span className="ml-2 font-normal text-slate-500">
                welcome back.
              </span>
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Here's a snapshot of your credit growth journey.
            </p>
          </div>
          <button
            onClick={handleOpenModal}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <span>View Coaching Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            {/* Current Progress */}
            <InfoCard title="Your Current Progress">
              <div className="space-y-6">
                <CreditScoreGauge
                  score={existingUserData.creditScore}
                  status={existingUserData.status}
                />

                <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-700">
                      Progress Balance
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">
                    {existingUserData.progressBalance}
                  </span>
                </div>
              </div>
            </InfoCard>

            {/* Success Story */}
            <InfoCard title="Success Story">
              <div className="flex items-start gap-4">
                <img
                  src={existingUserData.successStory.image}
                  alt="Success"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div className="space-y-3">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    +20 pts improvement
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600 italic">
                    “{existingUserData.successStory.quote}”
                  </p>
                </div>
              </div>
            </InfoCard>
          </div>

          {/* CENTER COLUMN - Credit Coach */}
          <InfoCard>
            <div className="space-y-6">

              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-emerald-50 p-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Credit Coach Update
                </h3>
              </div>

              <div className="flex items-center justify-center gap-6 py-4">
                <div className="text-5xl">👨‍💼</div>
                <Lightbulb className="h-14 w-14 text-amber-400" />
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-slate-900">
                  {existingUserData.coachUpdate.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600">
                  {existingUserData.coachUpdate.message}
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">
                  {existingUserData.coachUpdate.pointsRemain}
                </span>
              </div>

              <ul className="space-y-3">
                {existingUserData.coachUpdate.nextSteps.map((step, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 text-amber-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>

              <button className="group w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md active:scale-[0.98]">
                <div className="flex items-center justify-center gap-2">
                  <span>Next Steps</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </button>

            </div>
          </InfoCard>

          {/* RIGHT COLUMN - Starter Options */}
          <InfoCard>
            <div className="space-y-6">

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  Recommended Starter Option
                </h3>
                <ArrowRight className="h-5 w-5 text-slate-400" />
              </div>

              {/* Card Preview */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-md">
                <div className="flex items-center justify-between text-white">
                  <span className="text-sm font-medium tracking-wide opacity-80">
                    Synchrony
                  </span>
                  <div className="flex gap-1">
                    <div className="h-4 w-6 rounded bg-red-500" />
                    <div className="h-4 w-6 rounded bg-yellow-400" />
                  </div>
                </div>

                <div className="mt-10 text-sm font-mono tracking-widest text-white/70">
                  •••• 1234
                </div>
              </div>

              <h4 className="text-xl font-semibold text-slate-900">
                {existingUserData.starterOption.title}
              </h4>

              <ul className="space-y-2">
                {existingUserData.starterOption.benefits.map(
                  (benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{benefit}</span>
                    </li>
                  )
                )}
              </ul>

              <button className="group w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md active:scale-[0.98]">
                <div className="flex items-center justify-center gap-2">
                  <span>{existingUserData.starterOption.buttonText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </button>

            </div>
          </InfoCard>
        </div>

        {/* Improvement Plan Section */}
        <InfoCard title="Your Credit Improvement Plan">
          <div className="space-y-8">

            <ProgressBar
              current={existingUserData.improvementPlan.progress}
              total={existingUserData.improvementPlan.total}
              label={existingUserData.improvementPlan.title}
            />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {existingUserData.improvementPlan.tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>

            <button className="group w-full rounded-xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md active:scale-[0.98]">
              <div className="flex items-center justify-center gap-2">
                <span>Track My Progress</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </button>

          </div>
        </InfoCard>

      </div>

      <ModalWrapper isOpen={isModalOpen} onClose={handleCloseModal}>
        <Modal5 />
      </ModalWrapper>
    </Layout>
  );
}

export default ExistingUserDashboard;