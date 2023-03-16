const Summary = ({ formData, onChangePlan }) => {

  const {
    plan,
    isYearly,
    addons
  } = formData;

  const total = plan.price + addons.reduce((acc, { price }) => acc + price, 0);

  return (
    <div className="flex flex-col">
      <div className="px-5 pt-4 bg-lightblue rounded-md">
        <div className="flex justify-between items-center  pb-4 ">
          <div>
            <span className="block font-medium text-blue-600">{plan.label} ({isYearly ? 'Yearly' : 'Monthly'})</span>
            <span onClick={onChangePlan} className="cursor-pointer underline text-sm text-gray-400 transition-colors hover:text-blue-500">Change</span>
          </div>
          <span className="font-bold text-blue-600">${isYearly ? plan.price * 10 + '/yr' : plan.price + '/mo'}</span>
        </div>
        {
          addons.length > 0 &&
          <div className="flex flex-col gap-y-4 pt-4 pb-4 border-t border-t-gray-300">
            {
              addons.map((addon) => {
                return <div key={addon.name} className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">{addon.label}</div>
                  <span className="text-sm text-blue-600">+${isYearly ? addon.price * 10 + '/yr' : addon.price + '/mo'}</span>
                </div>
              })
            }
          </div>
        }
      </div>
      <div className="flex justify-between items-center p-5">
        <div className="text-sm text-gray-400">Total (per {isYearly ? 'year' : 'month'})</div>
        <span className="text-base font-bold text-blue-500">${isYearly ? total * 10 + '/yr' : total + '/mo'}</span>
      </div>
    </div>
  );
}

export default Summary;