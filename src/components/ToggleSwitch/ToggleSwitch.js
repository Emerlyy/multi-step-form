import { memo } from 'react';
import './ToggleSwitch.css'

const ToggleSwitch = ({ isChecked, handleCheck }) => {

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <span className="slider round"></span>
    </label>
  );
}

export default memo(ToggleSwitch);