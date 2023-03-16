import { useState } from "react";
import AddonsStep from "../AddonsStep/AddonsStep";
import SuccessPage from "../FinalStep/SuccessPage";
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

const MultiStepForm = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const [isFormValid, setFormValid] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: plans[0],
    isYearly: false,
    addons: [],
  });

  const _next = () => {
    setCurrentStep((prev) => prev >= 4 ? 5 : prev + 1);
    if (currentStep === steps.length) {
      alert(JSON.stringify(formData, null, 2));
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
        return <PersonalInfo setFormValid={setFormValid} setFormData={setFormData} formData={formData} />
      case 2:
        return <SelectPlan formData={formData} setFormData={setFormData} plans={plans} />
      case 3:
        return <AddonsStep formData={formData} setFormData={setFormData} addons={addons} />
      case 4:
        return <Summary onChangePlan={onChangePlan} formData={formData} />
      case 5:
        return <SuccessPage />
      default:
        return;
    }
  }

  return (
    <div className="flex w-full max-w-[1000px] sm:min-h-[600px] sm:h-fit mx-auto align-top shadow-lg rounded-2xl mt-12 mb-14 sm:bg-white sm:p-4 pr-0">
      <ProgressIndicator steps={steps} currentStep={Math.min(currentStep, 4)} />
      <div className="z-10 bg-white rounded-2xl flex flex-col py-8 px-6 md:px-12 lg:px-18 xl:px-20 flex-grow">
        {currentStep <= steps.length
          ? <>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 md:mt-5 mb-2">{steps[currentStep - 1].title}</h2>
            <h3 className="text-base mb-6 text-gray-400">{steps[currentStep - 1].subtitle}</h3>
            <div className="flex-grow">
              {PageDisplay()}
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 sm:static sm:w-auto sm:p-0 flex items-center mt-12 bg-white">
              {currentStep > 1 && <span className="cursor-pointer text-gray-400 text-sm md:text-base font-medium transition-colors hover:text-blue-600" onClick={_prev}>Go Back</span>}
              <button
                onClick={_next}
                disabled={!isFormValid}
                className={"next-step-button w-[108px] text-sm text-white rounded-md py-3 px-2 ml-auto mr-0 transition-all active:opacity-60 disabled:grayscale-[70%] disabled:cursor-not-allowed" + (currentStep < steps.length ? ' bg-blue-600' : ' bg-blue-500')}>
                {currentStep < steps.length ? 'Next Step' : 'Confirm'}
              </button>
            </div>
          </>
          : <>{PageDisplay()}</>
        }
      </div>
    </div>
  );
}

export default MultiStepForm;