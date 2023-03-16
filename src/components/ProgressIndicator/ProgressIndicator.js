import { memo } from "react";
import ProgressIndicatorListItem from "../ProgressIndicatorListItem/ProgressIndicatorListItem";

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="progress w-[274px] h-[568px] bg-cover bg-no-repeat px-8 py-10 rounded-xl">
      <ul className="flex flex-col gap-y-6">
        {
          steps.map(({ label }, idx) => <li key={idx + 1}>
            <ProgressIndicatorListItem step={idx + 1} label={label} active={idx + 1 === currentStep} />
          </li>)
        }
      </ul>
    </div>
  )
}

export default memo(ProgressIndicator);