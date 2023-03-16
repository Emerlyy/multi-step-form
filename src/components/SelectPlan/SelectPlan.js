import { useCallback } from "react";
import PlanDurationSwitcher from "../PlanDurationSwitcher/PlanDurationSwitcher";
import PlanSelector from "../PlanSelector/PlanSelector"

const SelectPlan = ({ formData, setFormData, plans }) => {

  const toggleIsYearly = useCallback(() => {
    setFormData((formData) => ({
      ...formData,
      isYearly: !formData.isYearly
    }));
  }, [setFormData])

  const handlePlanChange = (plan) => {
    if (formData.plan.name === plan.name)
      return;
    setFormData((formData) => ({ ...formData, plan }));
  }

  return (
    <div className="flex flex-col gap-y-8">
      <PlanSelector plans={plans} onPlanChange={handlePlanChange} activePlan={formData.plan} isYearly={formData.isYearly} />
      <PlanDurationSwitcher isChecked={formData.isYearly} handleCheck={toggleIsYearly} />
    </div>
  )
};

export default SelectPlan;