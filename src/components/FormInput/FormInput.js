import { memo } from "react";

const FormInput = memo(({ inputController, label, id, ...inputProps }) => {

  const showError = !inputController.inputValid && inputController.isDirty;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="block text-blue-600 text-sm font-medium" htmlFor={id}>{label}</label>
        {showError && <div className="text-sm text-red-600 font-medium">{inputController.errorMessage}</div>}
      </div>
      <Input
        value={inputController.value}
        onChange={inputController.onChange}
        onBlur={inputController.onBlur}
        id={id}
        isValid={!showError}
        {...inputProps} />
    </div>
  )
})

const Input = memo(({ isValid, ...rest }) => {
  const style = 'border rounded-lg w-full px-3 py-2 font-medium text-blue-600 outline-none focus:ring-1 focus:ring-blue-600' + (!isValid && ' ring-red-600 ring-1');
  return <input className={style} {...rest} />
})

export default FormInput;