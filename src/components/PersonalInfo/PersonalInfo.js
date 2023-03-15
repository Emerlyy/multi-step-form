import { memo } from "react";
import FormInput from "../FormInput/FormInput";

const PersonalInfo = memo(({ nameController, emailController, phoneController }) => {

  return (
    <div className="flex flex-col gap-y-6">
      <FormInput
        inputController={nameController}
        label='Name'
        id='name'
        type='text'
        placeholder="e.g. Stephen King" />
      <FormInput
        inputController={emailController}
        label='Email Address'
        id='email'
        type='email'
        placeholder="e.g. stephenking@lorem.com" />
      <FormInput
        inputController={phoneController}
        label='Phone Number'
        id='phone'
        type='tel'
        placeholder="e.g. +1 234 567 890" />
    </div>
  )
})

export default PersonalInfo;