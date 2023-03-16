import { memo } from "react";

const FormInput = ({ value, onChange, onBlur, inputValid, isDirty, errorMessage, label, id, ...inputProps }) => {

  const showError = !inputValid && isDirty;

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="block text-blue-600 text-sm font-medium" htmlFor={id}>{label}</label>
        {showError && <div className="text-sm text-red-600 font-medium">{errorMessage}</div>}
      </div>
      <Input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        hasError={showError}
        {...inputProps}
      />
    </div>
  )
}

const Input = ({ hasError, ...rest }) => {
  const style = 'border rounded-lg w-full px-3 py-2 font-medium text-blue-600 outline-none focus:ring-1 focus:ring-blue-600' + (hasError && ' ring-red-600 ring-1');
  return <input className={style} {...rest} />
}

export default memo(FormInput);