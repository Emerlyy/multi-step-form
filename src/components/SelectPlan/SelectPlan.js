import { useState } from "react";
import Button from "../Button/Button";
import PlanDurationSwitcher from "../PlanDurationSwitcher/PlanDurationSwitcher";
import PlanSelector from "../PlanSelector/PlanSelector"

const SelectPlan = ({ onSubmit, onPrev }) => {

  const plans = [
    { name: 'arcade', label: 'Arcade', img: '/images/icon-arcade.svg', price: 9 },
    { name: 'advanced', label: 'Advanced', img: '/images/icon-advanced.svg', price: 12 },
    { name: 'pro', label: 'Pro', img: '/images/icon-pro.svg', price: 15 },
  ];

  const [activePlan, setActivePlan] = useState(plans[0]);
  const [isYearly, setIsYearly] = useState(false);

  const toggleIsYearly = () => {
    setIsYearly((prev) => !prev);
  }

  const handlePlanChange = (plan) => {
    setActivePlan(plan);
  }

  const handleSubmit = () => {
    onSubmit(activePlan, isYearly);
  }

  return (
    <div className="py-5 px-20">
      <h2 className="text-3xl font-bold text-blue-600 mt-5 mb-2">Select your plan</h2>
      <h3 className="text-base mb-8 text-gray-400">You have the option of monthly or year billing.</h3>
      <div className="flex flex-col gap-y-8">
        <PlanSelector plans={plans} onPlanChange={handlePlanChange} activePlan={activePlan} isYearly={isYearly} />
        <PlanDurationSwitcher isCheked={isYearly} handleCheck={toggleIsYearly} />
        <Button onClick={handleSubmit}>Next Step</Button>
      </div>
    </div>
  )
};

export default SelectPlan;