import React, { useState } from 'react'

const Form = () => {
    const[fullName,setFullName] = useState('')
    const[fname, setFName] = useState('')
    const[lname, setLName] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault();
        setFullName(`${fname} ${lname}`)
    }
  return (
    <div>
        <h1>Full Name Display</h1>
      <form onSubmit={submitHandler}>
        First Name:<input type='text' value={fname} onChange={(e) => setFName(e.target.value)} required/><br/>
        Last Name:<input type='text' value={lname} onChange={(e) => setLName(e.target.value)} required/><br/>
        <button type='submit'>Submit</button>
      </form>
      <div>
        Full Name:{fullName}
      </div>
    </div>
  )
}

export default Form