const Card = ({ label, price, img, isActive, freeCount, onClick, duration }) => {

  const style = `border-2 flex flex-col px-3 py-4 rounded-lg items-start justify-between gap-y-10 cursor-pointer w-[132px] transition-all hover:border-purple ${isActive ? 'border-purple bg-lightblue' : ''}`

  return (
    <div className={style} onClick={onClick}>
      <div>
        <img src={img} alt='arcade' />
      </div>
      <div>
        <h4 className="text-blue-600 font-bold">{label}</h4>
        <span className="block text-gray-400 text-sm">${price}/{duration}</span>
        {freeCount > 0 && <span className="text-blue-600 text-xs font-medium">{freeCount} months free</span>}
      </div>
    </div>
  )
};

export default Card;