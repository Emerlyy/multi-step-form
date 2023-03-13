import { memo } from "react";

const Button = memo(({ children, ...props }) => {
  return (
    <button {...props} className="bg-blue-600 w-fit text-sm text-white rounded-md py-3 px-6 mt-12 self-end">{children}</button>
  )
})

export default Button;