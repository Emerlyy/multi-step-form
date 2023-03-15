import './ToggleSwitch.css'

const ToggleSwitch = ({ isCheked, handleCheck }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isCheked} onChange={handleCheck} />
      <span className="slider round"></span>
    </label>
  );
}

export default ToggleSwitch;