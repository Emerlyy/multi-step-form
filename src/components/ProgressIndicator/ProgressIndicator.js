import { memo } from "react";
import ProgressIndicatorListItem from "../ProgressIndicatorListItem/ProgressIndicatorListItem";

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="progress w-full flex-shrink-0 absolute top-0 left-0 h-[160px] sm:static sm:h-auto sm:w-fit lg:w-[274px] bg-cover bg-no-repeat px-8 py-10 sm:rounded-xl">
      <ul className="flex justify-center gap-x-4 sm:flex-col sm:gap-y-6">
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