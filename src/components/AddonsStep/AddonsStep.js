import AddonCard from "../AddonCard/AddonCard";

const AddonsStep = ({ formData, setFormData, addons }) => {

  const handleSelect = (addon) => {

    const idx = formData.addons.findIndex(({ name }) => name === addon.name);

    if (idx === -1) {
      setFormData({
        ...formData,
        addons: [
          ...formData.addons,
          addon,
        ]
      });
    }
    else {
      setFormData({
        ...formData,
        addons: formData.addons.filter((_, i) => i !== idx)
      });
    }

  }

  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
      {
        addons.map((addon) => {
          const {
            name,
            price,
            ...rest
          } = addon;
          const addonPrice = formData.isYearly ? price * 10 : price;
          const duration = formData.isYearly ? 'yr' : 'mo';
          const isActive = formData.addons.findIndex(addon => addon.name === name) !== -1;
          return <AddonCard onSelected={() => handleSelect(addon)} key={name} {...rest} price={addonPrice} duration={duration} isActive={isActive} />
        })
      }
    </div>
  );
}

export default AddonsStep;