import './AddonCard.css';
const AddonCard = ({ label, descr, price, duration, isActive, onChange }) => {

  const style = `checkbox-container block relative border p-4 flex items-center justify-between gap-x-8 rounded-lg cursor-pointer w-[416px] focus-within:ring focus-within:ring-blue-900 ${isActive ? 'border-purple bg-lightblue' : ''}`

  return (
    <label className={style}>

      <input onChange={onChange} type="checkbox" checked={isActive} />
      <span className="checkmark"></span>

      <div className="flex-grow">
        <h4 className="text-blue-600 font-bold">{label}</h4>
        <p className="text-sm text-gray-400">{descr}</p>
      </div>
      <span className="text-sm text-[#5950b3]">+${price}/{duration}</span>
    </label>
  );
}

export default AddonCard;