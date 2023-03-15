import { memo } from "react";

const ProgressIndicatorListItem = memo(({ step, label, active }) => {

  let style = "rounded-full font-medium flex-shrink-0 h-8 w-8 flex items-center justify-center border border-white transition-all";

  style += active ? ' text-blue-600 bg-blue-100 border-none' : ' text-white';

  return (
    <div className="flex items-center gap-x-4">
      <div className={style}>{step}</div>
      <div className="flex-grow">
        <div className="text-xs text-blue-200 uppercase">STEP {step}</div>
        <div className="text-white font-medium uppercase">{label}</div>
      </div>
    </div>
  )
})

export default ProgressIndicatorListItem;