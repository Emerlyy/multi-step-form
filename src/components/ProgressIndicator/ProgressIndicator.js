import ProgressIndicatorListItem from "../ProgressIndicatorListItem/ProgressIndicatorListItem";

const ProgressIndicator = ({ stepLabels, currentStep }) => {
  return (
    <div className="progress w-[274px] bg-cover bg-no-repeat px-8 py-10 rounded-xl">
      <ul className="flex flex-col gap-y-6">
        {
          stepLabels.map((label, idx) => <li key={idx + 1}>
            <ProgressIndicatorListItem step={idx + 1} label={label} active={idx + 1 === currentStep} />
          </li>)
        }
      </ul>
    </div>
  )
}

export default ProgressIndicator;