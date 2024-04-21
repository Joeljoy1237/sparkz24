"use client"
import React, { useState } from 'react';
import styles from '@styles/scss/registration.module.scss';

export default function Registration() {
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(1);
  const [inputFields, setInputFields] = useState([
    { name: "", age: "", category: "", school: "", schoolAddress: "" }
  ]);

  const addFields = () => {
    let newField = { name: '', age: '', category: '', school: '', schoolAddress: '' };
    setInputFields([...inputFields, newField]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(category)
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
      <div className={styles.wrap}>
        <div className={styles.row}>
          <div className={styles.form}>
            {inputFields.map((input, index) => (
              <div className={styles.formwrap}>
                <div className={styles.formTop}>
                  <span className={styles.formTitle}>
                    Team Member {index+1}
                  </span>
                </div>
                <div key={index} className={styles.DataRow}>
                  <input
                    className={styles.txtField}
                    name='name'
                    placeholder='Name'
                    value={input.name}
                    onChange={event => handleFormChange(index, event)}
                  />
                  <input
                    className={styles.txtField}
                    name='age'
                    placeholder='Age'
                    value={input.age}
                    onChange={event => handleFormChange(index, event)}
                  />
                  <select
                    className={styles.txtField}
                    name="category"
                    value={input.category}
                    onChange={event => {
                      handleFormChange(index, event)
                      handleCategoryChange(event);
                    }}
                  >
                    <option value="0">Select Category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                  </select>
                  <select
                    className={styles.txtField}
                    name="class"
                    value={input.class}
                    onChange={event => handleFormChange(index, event)}
                  >
                    <option value="" disabled>Select Class</option>
                    {renderClassOptions()}
                  </select>
                  <input
                    className={styles.txtField}
                    name='school'
                    placeholder='School'
                    value={input.school}
                    onChange={event => handleFormChange(index, event)}
                  />
                  <input
                    className={styles.txtField}
                    name='schoolAddress'
                    placeholder='School Address'
                    value={input.schoolAddress}
                    onChange={event => handleFormChange(index, event)}
                  />
                </div>
              </div>
            ))}
            <div className={styles.actionRow}>
              {count < 5 && (
                <button className={styles.action} type='button' onClick={() => {
                  addFields();
                  setCount(count + 1);
                }}>Add another member..</button>
              )}
              <button className={styles.submit} type='submit' onClick={(e) => { e.preventDefault(); handleSubmit() }}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
