import { useState } from "react";
import AddonsStep from "../AddonsStep/AddonsStep";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import SelectPlan from "../SelectPlan/SelectPlan";
import Summary from "../Summary/Summary";

const MultiStepForm = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');

  const [activePlan, setActivePlan] = useState();
  const [isYearly, setIsYearly] = useState();

  const steps = [
    'YOUR INFO',
    'SELECT PLAN',
    'ADD-ONS',
    'SUMMARY'
  ]

  const savePersonalInfo = (name, mail, phone) => {
    setName(name);
    setMail(mail);
    setPhone(phone);
    _next();
  }

  const savePlan = (plan, isYearly) => {
    setActivePlan(plan);
    setIsYearly(isYearly);
    _next();
  }

  const _next = () => {
    setCurrentStep((prev) => prev >= 3 ? 4 : prev + 1);
  }

  const _prev = () => {
    setCurrentStep((prev) => prev <= 1 ? 1 : prev - 1);
  }

  const [addons, setAddons] = useState(
    [
      { name: 'online service', label: 'Online Service', descr: 'Access to multiplayer games', price: 1, isActive: false },
      { name: 'larger storage', label: 'Larger Storage', descr: 'Access to multiplayer games', price: 2, isActive: false },
      { name: 'customizable profile', label: 'Customizable Profile', descr: 'Access to multiplayer games', price: 2, isActive: false },
    ]
  );

  const onChangePlan = () => {
    setCurrentStep(2);
  }

  const handleAddonClick = (name) => {
    const idx = addons.findIndex((addon) => addon.name === name);
    const changedAddon = addons.find((addon) => addon.name === name);
    changedAddon.isActive = !changedAddon.isActive;
    setAddons([
      ...addons.slice(0, idx),
      changedAddon,
      ...addons.slice(idx + 1)
    ]);
  }


  
  return (
    <div className="flex align-top shadow-xl rounded-2xl bg-white p-4 pr-0">
      <ProgressIndicator stepLabels={steps} currentStep={currentStep} />
      {currentStep === 1 && <PersonalInfo onSubmit={savePersonalInfo} />}
      {currentStep === 2 && <SelectPlan onSubmit={savePlan} onPrev={_prev} />}
      {currentStep === 3 && <AddonsStep addons={addons} handleClick={handleAddonClick} onPrev={_prev} onSubmit={_next} />}
      {currentStep === 4 && <Summary onChangePlan={onChangePlan} plan={activePlan} isYearly={isYearly} addons={addons.filter(({ isActive }) => isActive === true)} />}
    </div>
  );
}

export default MultiStepForm;