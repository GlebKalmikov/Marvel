import { useState } from 'react';
import './dropdown.scss';

const Dropdown = ({ list = [], label = 'Show'}) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    // console.log('event :>> ', event);


    // setOpen(!open) // !true = false; !false = true
    // // if (open) {
    // //   // setOpen(false)
    // // } else {
    // //   // setOpen(true)
    // // }
  }

  console.log('open :>> ', open);
  // console.log('props :>> ', props);

  return (
    <div className="dropdown">
      <button onClick={handleClick}>{label}</button>
      {open &&
        <ul className="dropdown__list">
          {list.map(item => <li key={item}>{item}</li>)}
        </ul>
      }

      {/* <ul className={`dropdown__list ${open ? 'is-open' : ''}`}>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul> */}
    </div>
  )
}

export default Dropdown;

// const arr = [1, 2, 3];

// // const two = arr[1];

// const [one, two, three] = arr

// console.log('one :>> ', one);
// console.log('two :>> ', two);
// console.log('three :>> ', three);


// false && false
// true || false