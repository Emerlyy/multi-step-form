import PlanDurationSwitcher from "../PlanDurationSwitcher/PlanDurationSwitcher";
import PlanSelector from "../PlanSelector/PlanSelector"

const SelectPlan = ({ formData, setFormData, plans }) => {

  const toggleIsYearly = () => {
    setFormData((formData) => ({
      ...formData,
      isYearly: !formData.isYearly
    }));
  }

  const handlePlanChange = (plan) => {
    setFormData({ ...formData, plan });
  }

  return (
    <div className="flex flex-col gap-y-8">
      <PlanSelector plans={plans} onPlanChange={handlePlanChange} activePlan={formData.plan} isYearly={formData.isYearly} />
      <PlanDurationSwitcher isChecked={formData.isYearly} handleCheck={toggleIsYearly} />
    </div>
  )
};

export default SelectPlan;