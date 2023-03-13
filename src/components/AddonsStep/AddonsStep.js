import AddonCard from "../AddonCard/AddonCard";
import Button from '../Button/Button';
const AddonsStep = ({ isYearly, onPrev, onSubmit, addons, handleClick }) => {

  return (
    <div className="py-5 px-20">
      <h2 className="text-3xl font-bold text-blue-600 mt-5 mb-2">Pick add-ons</h2>
      <h3 className="text-base mb-8 text-gray-400">Add-ons help enhance your gaming experience.</h3>
      <div className="flex flex-col gap-y-8">
        {
          addons.map((addon) => {
            const {
              name,
              price,
              ...rest
            } = addon;

            const addonPrice = isYearly ? price * 10 : price;
            const duration = isYearly ? 'yr' : 'mo';

            return <AddonCard onChange={() => handleClick(name)} key={name} {...rest} price={addonPrice} duration={duration} />
          })
        }
        <Button onClick={onSubmit}>Next Step</Button>
      </div>
    </div>
  );


}

export default AddonsStep;