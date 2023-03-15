import { memo, useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import AddonsStep from "../AddonsStep/AddonsStep";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import SelectPlan from "../SelectPlan/SelectPlan";
import Summary from "../Summary/Summary";

const plans = [
  { name: 'arcade', label: 'Arcade', img: '/images/icon-arcade.svg', price: 9 },
  { name: 'advanced', label: 'Advanced', img: '/images/icon-advanced.svg', price: 12 },
  { name: 'pro', label: 'Pro', img: '/images/icon-pro.svg', price: 15 },
];

const addons = [
  { name: 'online service', label: 'Online Service', descr: 'Access to multiplayer games', price: 1 },
  { name: 'larger storage', label: 'Larger Storage', descr: 'Extra 1TB of cloud save', price: 2 },
  { name: 'customizable profile', label: 'Customizable Profile', descr: 'Custom theme on your profile', price: 2 },
];

const steps = [
  { label: 'YOUR INFO', title: 'Personal info', subtitle: 'Please provide your name, email address, and phone number.' },
  { label: 'SELECT PLAN', title: 'Select your plan', subtitle: 'You have the option of monthly or yearly billing.' },
  { label: 'ADD-ONS', title: 'Pick add-ons', subtitle: 'Add-ons help enhance your gaming experience.' },
  { label: 'SUMMARY', title: 'Finishing up', subtitle: 'Double-check everything looks OK beore confirming.' },
]

const MultiStepForm = memo(() => {

  const [currentStep, setCurrentStep] = useState(1);

  const name = useInput('', { isEmpty: true, minLength: 2 });
  const email = useInput('', { isEmpty: true, isEmail: true });
  const phone = useInput('', { isEmpty: true, isPhone: true });

  const [formData, setFormData] = useState({
    name: name.value,
    email: email.value,
    phone: phone.value,
    plan: plans[0],
    isYearly: false,
    addons: [],
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      name: name.value
    }))
  }, [name.value]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      email: email.value
    }))
  }, [email.value]);

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      phone: phone.value
    }))
  }, [phone.value]);

  const _next = () => {
    if (currentStep === steps.length) {
      alert(JSON.stringify(formData, null, 2));
    } else {
      setCurrentStep((prev) => prev >= 3 ? 4 : prev + 1);
    }
  }

  const _prev = () => {
    setCurrentStep((prev) => prev <= 1 ? 1 : prev - 1);
  }

  const onChangePlan = () => {
    setCurrentStep(2);
  }

  const PageDisplay = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo nameController={name} emailController={email} phoneController={phone} />
      case 2:
        return <SelectPlan formData={formData} setFormData={setFormData} plans={plans} />
      case 3:
        return <AddonsStep formData={formData} setFormData={setFormData} addons={addons} />
      case 4:
        return <Summary onChangePlan={onChangePlan} formData={formData} />
      default:
        return;
    }
  }

  return (
    <div className="flex align-top shadow-xl rounded-2xl bg-white p-4 pr-0">
      <ProgressIndicator steps={steps} currentStep={currentStep} />
      <div className="flex flex-col py-5 px-20">
        <h2 className="text-3xl font-bold text-blue-600 mt-5 mb-2">{steps[currentStep - 1].title}</h2>
        <h3 className="text-base mb-8 text-gray-400">{steps[currentStep - 1].subtitle}</h3>
        <div className="flex-grow min-w-[450px]">
          {PageDisplay()}
        </div>
        <div className="flex items-center mt-12">
          {currentStep > 1 && <span className="cursor-pointer text-gray-400 font-medium transition-colors hover:text-blue-600" onClick={_prev}>Go Back</span>}
          <button
            onClick={_next}
            disabled={!name.inputValid || !email.inputValid || !phone.inputValid}
            className={"next-step-button w-[108px] text-sm text-white rounded-md py-3 px-2 ml-auto mr-0 transition-all active:opacity-60 disabled:grayscale-[70%] disabled:cursor-not-allowed" + (currentStep < steps.length ? ' bg-blue-600' : ' bg-blue-500')}>
            {currentStep < steps.length ? 'Next Step' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
})

export default MultiStepForm;