import { memo } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"

const PlanDurationSwitcher = ({ isChecked, handleCheck }) => {

  return (
    <div className="flex justify-center items-center gap-x-4 py-3 bg-lightblue rounded-lg">
      <p className={`font-bold text-sm ${!isChecked ? 'text-blue-600' : 'text-gray-400'}`}>Monthly</p>
      <ToggleSwitch isChecked={isChecked} handleCheck={handleCheck} />
      <p className={`font-bold text-sm ${isChecked ? 'text-blue-600' : 'text-gray-400'}`}>Yearly</p>
    </div>
  )
}

export default memo(PlanDurationSwitcher);