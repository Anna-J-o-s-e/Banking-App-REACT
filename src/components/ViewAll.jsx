import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {

const [data,changeData]=useState(
    [
        {"name":"Anna","acc":98765436,"mob":9876543456,"category":"Savings"},
        {"name":"Riya","acc":23456743,"mob":8976543233,"category":"Current"},
        {"name":"Neenu","acc":12345652,"mob":7854679067,"category":"deposit"},
        {"name":"Anjana","acc":12343256,"mob":9876543412,"category":"Savings"},
        {"name":"Karthika","acc":86723434,"mob":4567809864,"category":"Savings"},
        {"name":"Vijay","acc":86755234,"mob":2345687646,"category":"Savings"},
        {"name":"Mithun","acc":23459667,"mob":9876534556,"category":"deposit"},
        {"name":"Nancy","acc":12348664,"mob":8906543356,"category":"deposit"},
        {"name":"Varun","acc":12398768,"mob":7898763453,"category":"Savings"},
        {"name":"Bipin","acc":23459843,"mob":9876234565,"category":"Current"},
        {"name":"Sree","acc":12340987,"mob":90127634753,"category":"Current"}
    ]
)

  return (
    <div>
<NavBar/>
    <div className="container">
        <div className="row">
            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table className="table">
  <thead>
    <tr>
      <th scope="col">User Name</th>
      <th scope="col">Account No.</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Account Type</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index) => {
                return <tr>
                <td>{value.name}</td>
                <td>{value.acc}</td>
                <td>{value.mob}</td>
                <td>{value.category}</td>
              </tr>
            }
        )
    }
  </tbody>
</table>

            </div>
        </div>
    </div>    
    </div>
  )
}

export default ViewAll