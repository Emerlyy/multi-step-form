import { useState } from "react";
import Button from "../Button/Button";

const PersonalInfo = ({ onSubmit, onPrev }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name, email, phone);
  }

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  }

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  }

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);
  }

  return (
    <div className="py-5 px-20">
      <h2 className="text-3xl font-bold text-blue-600 mt-5 mb-2">Personal info</h2>
      <h3 className="text-sm mb-8 text-gray-400">Please provide your name, email address, and phone number.</h3>
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-1 text-blue-600 text-sm font-medium" htmlFor='name'>Name</label>
          <input
            onChange={handleNameChange}
            value={name}
            className="border rounded-lg w-full px-3 py-2"
            name='name'
            type='text'
            placeholder="e.g. Stephen King"
            required />
        </div>
        <div>
          <label className="block mb-1 text-blue-600 text-sm font-medium" htmlFor='email'>Email Address</label>
          <input
            onChange={handleEmailChange}
            value={email}
            className="border rounded-lg w-full px-3 py-2"
            name='email'
            type='email'
            placeholder="e.g. stephenking@lorem.com"
            required />
        </div>
        <div>
          <label className="block mb-1 text-blue-600 text-sm font-medium" htmlFor="phone">Phone Number</label>
          <input
            onChange={handlePhoneChange}
            value={phone}
            className="border rounded-lg w-full px-3 py-2"
            name='phone'
            type='tel'
            placeholder="e.g. +1 234 567 890"
            required />
        </div>
        <Button>Next Step</Button>
      </form>
    </div>
  )
}

export default PersonalInfo;