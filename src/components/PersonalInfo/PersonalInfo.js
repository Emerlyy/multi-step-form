import { useEffect } from "react";
import { useInput } from "../../hooks/useInput";
import FormInput from "../FormInput/FormInput";

const PersonalInfo = ({ setFormValid, setFormData, formData }) => {

  const name = useInput(formData.name, { isEmpty: true, minLength: 2 });
  const email = useInput(formData.email, { isEmpty: true, isEmail: true });
  const phone = useInput(formData.phone, { isEmpty: true, isPhone: true });


  useEffect(() => {
    if (name.inputValid && email.inputValid && phone.inputValid) {
      setFormValid(true);
      setFormData((p) => ({ ...p, name: name.value, email: email.value, phone: phone.value }));
    }
    else {
      setFormValid(false);
    }
    // eslint-disable-next-line
  }, [name.inputValid, email.inputValid, phone.inputValid]);

  useEffect(() => {
    if (name.inputValid && email.inputValid && phone.inputValid) {
      setFormData((p) => ({ ...p, name: name.value, email: email.value, phone: phone.value }));
    }
    // eslint-disable-next-line
  }, [name.value, email.value, phone.value]);

  return (
    <div className="flex flex-col gap-y-6">
      <FormInput
        {...name}
        label='Name'
        id='name'
        type='text'
        placeholder="e.g. Stephen King" />
      <FormInput
        {...email}
        label='Email Address'
        id='email'
        type='email'
        placeholder="e.g. stephenking@lorem.com" />
      <FormInput
        {...phone}
        label='Phone Number'
        id='phone'
        type='tel'
        placeholder="e.g. +1 234 567 890" />
    </div>
  )
}

export default PersonalInfo;