import Card from '../Card/Card';

const PlanSelector = ({ plans, activePlan, onPlanChange, isYearly }) => {
  return (
    <div className="flex gap-x-4 justify-evenly">
      {
        plans.map((plan) => {
          const {
            name,
            price,
            ...rest
          } = plan;

          const isActive = name === activePlan.name;
          const freeCount = isYearly ? 2 : 0;
          const planPrice = isYearly ? 10 * price : price;
          const duration = isYearly ? 'yr' : 'mo';
          return <Card onClick={() => onPlanChange(plan)} key={name} isActive={isActive} price={planPrice} freeCount={freeCount} duration={duration} {...rest} />
        })
      }
    </div>
  )
}

export default PlanSelector;