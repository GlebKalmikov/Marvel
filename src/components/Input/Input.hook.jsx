import { useState } from 'react'
import './input.scss';

const Input = ({ name, label, onChange, value }) => {
  // const [value, setValue] = useState('');

  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }

  return (
    <label>
      {label}
      <input className='input' value={value} name={name} type='text' onChange={onChange} />
    </label>
  )
}

export default Input
