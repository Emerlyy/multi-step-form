import Button from "../Button/Button";

const Summary = ({ plan, addons, isYearly, onSubmit, onChangePlan }) => {
  return (
    <div className="py-5 px-20">
      <h2 className="text-3xl font-bold text-blue-600 mt-5 mb-2">Finishing up</h2>
      <h3 className="text-base mb-8 text-gray-400">Double-check everything looks OK before confirming</h3>
      <div className="flex flex-col">
        <div className="px-5 py-4 bg-gray-200 w-[420px]  rounded-md">
          <div className="flex justify-between items-center border-b pb-3 border-b-white">
            <div>
              <span className="block">{plan.label} ({`${isYearly ? 'Yearly' : 'Monthly'}`})</span>
              <span onClick={onChangePlan} className="cursor-pointer underline text-gray-400 hover:no-underline">Change</span>
            </div>
            <span>${plan.price}/{`${isYearly ? 'yr' : 'mo'}`}</span>
          </div>
          <div className="pt-3">
            {
              addons.map((addon) => {
                return <div className="flex justify-between items-center">
                  <div>{addon.label}</div>
                  <span>+${addon.price}/{`${isYearly ? 'yr' : 'mo'}`}</span>
                </div>
              })
            }
          </div>
        </div>
        <div className="flex justify-between items-center p-5">
          <div>Total (per {`${isYearly ? 'year' : 'month'}`})</div>
          <span>+${plan.price + addons.reduce((acc, { price }) => acc + price, 0)}/{`${isYearly ? 'yr' : 'mo'}`}</span>
        </div>
        <Button>Next Step</Button>
      </div>

    </div>
  );
}

export default Summary;