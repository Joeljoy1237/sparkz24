"use client"
import React, { useState } from 'react';
import styles from '@styles/scss/registration.module.scss';

export default function Registration() {
  const [category, setCategory] = useState("");
  const [inputFields, setInputFields] = useState([
    { name: "", age: "", category: "", school: "", schoolAddress: "" }
  ]);

  const addFields = () => {
    let newField = { name: '', age: '', category: '', school: '', schoolAddress: '' };
    setInputFields([...inputFields, newField]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleSubmit = () => {
    console.log(inputFields);
}
  const renderClassOptions = () => {
    if (category === "1") {
      return (
        <>
          <option value="5">Class V</option>
          <option value="6">Class VI</option>
          <option value="7">Class VII</option>
        </>
      );
    } else if (category === "2") {
      return (
        <>
          <option value="8">Class VIII</option>
          <option value="9">Class IX</option>
          <option value="10">Class X</option>
        </>
      );
    }
  };

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {inputFields.map((input, index) => (
          <div key={index}>
            <input
              name='name'
              placeholder='Name'
              value={input.name}
              onChange={event => handleFormChange(index, event)}
            />
            <input
              name='age'
              placeholder='Age'
              value={input.age}
              onChange={event => handleFormChange(index, event)}
            />
            <select
              name="category"
              value={input.category}
              onChange={event => {
                handleCategoryChange(event);
              }}
            >
              <option value="" disabled>Select Category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
            </select>
            <select
              name="class"
              value={input.class}
              onChange={event => handleFormChange(index, event)}
            >
              <option value="" disabled>Select Class</option>
              {renderClassOptions()}
            </select>
            <input
              name='school'
              placeholder='School'
              value={input.school}
              onChange={event => handleFormChange(index, event)}
            />
            <input
              name='schoolAddress'
              placeholder='School Address'
              value={input.schoolAddress}
              onChange={event => handleFormChange(index, event)}
            />
            {index < 5 && (
              <button type='button' onClick={() => addFields()}>Add More..</button>
            )}
          </div>
        ))}
        <button type='submit' onClick={(e) => { e.preventDefault(); handleSubmit() }}>Submit</button>
      </form>
    </div>
  );
}
