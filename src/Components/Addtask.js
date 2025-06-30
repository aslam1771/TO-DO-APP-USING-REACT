import React, { useState } from 'react';

const Addtask = ({ addTask }) => {
  const [value, setValue] = useState("");

  const addItem = () => {
    if (value.trim() !== "") {
      addTask(value);
      setValue("");
    }
  };

  return (
    <div className='input-container'>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='input'
        placeholder='Add a new task'
      />
      <button onClick={addItem} className='add-button'>ADD</button>
    </div>
  );
};

export default Addtask;


