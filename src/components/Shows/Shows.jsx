import React from 'react'
// import useLocalStorage from '../../hooks/useLocalStorage'
import { Ticket } from "phosphor-react";

const Shows = () => {
   const myBookings=JSON.parse(localStorage.getItem('myBookings'));
   console.log(myBookings)
    let date;
  return (
    <div className='container my-2 d-flex flex-column' style={{minHeight:"71.75vh"}}>
        {myBookings&&<h1>Your Shows</h1>}
       {myBookings?myBookings.map((booking,index)=>{
              return(
                <div className='d-flex justify-content-around align-items-center border p-4 rounded-5 my-2 shadow' style={{width:"35vw"}}>
                    <div><Ticket size={50} color="#bf7118" weight="fill"/></div>
                    <div><img src={booking.show.show.image.medium} alt="" style={{width:"100px"}} className='rounded'/></div>
                    <div className='mx-2'>
                    <h3><b>Name: </b>{booking.show.show.name}</h3>
                    <h5><b>Date: </b>{booking.date.target.value}</h5>
                    <h5><b>Show Time: </b>{booking.value}</h5>
                    </div>
                     
                </div>
              )
            }):<h1 className='mt-5'>Sorry!! No Bookings</h1>

       }
    </div>
  )
}

export default Shows