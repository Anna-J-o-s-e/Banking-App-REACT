import React from 'react'
import NavBar from './NavBar'

const AddAccount = () => {
  return (
    <div>
        <NavBar/>
<center><h1>BANK OF INDIA</h1><br />
<h3>USER ACCOUNT ENTRY</h3></center>
<br /><br />

<div className="Ccontainer">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">User Name</label>
        <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Mobile No.</label>
        <input type="number" name="" id="" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Account No.</label>
        <input type="text" className="form-control" />
 
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Account Type</label>
        <select name="" id="" className="form-control">
            <option className="Savings">Savings</option>
            <option className="Current">Current</option>
            <option className="Deposit">Deposit</option>
        </select>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Aadhaar No.</label>
        <input type="number" name="" id="" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Pan Card No.</label>
        <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">ATM Card</label>
        <select name="" id="" className="form-control">
            <option className="Yes">Yes</option>
            <option className="No">No</option>
        </select>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Branch</label>
        <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Pin Code</label>
        <input type="number" name="" id="" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">IFSC Code</label>
        <input type="text" className="form-control" />

    </div>
    <center>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <button className="btn btn-success">Add Account</button>

    </div>
    </center>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddAccount