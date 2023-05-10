import React, { useEffect } from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button' 
import { useNavigate } from 'react-router-dom'
import CircularJSON from 'circular-json'
import './Form.css'

const Formbook = (props) => {
//get from local storage
const myBookings=JSON.parse(localStorage.getItem('myBookings'));
 const [date,setDate]=useState();
 const [value, setValue] =useState("");
 const [formValues, setFormValues] = useState({
    show: {},
    time: '',
    date: ''
  });
 const navigate=useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault()
    
    const booking={
        show:props.data,
        date:date,
        value:value
    }
    let newBookings;
    if(myBookings){
        newBookings=[...myBookings,booking]
    }
    else{
        newBookings=[booking]
    }
   
const json = CircularJSON.stringify(newBookings);
    localStorage.setItem('myBookings',json);
   
    alert("Booking Done")
    navigate('/shows')
}
  return (
    <div className='my-2 form-area border rounded-5'>
        <h1 className='my-2 heading'>Book Your Show</h1>
        <div className='d-flex justify-content-center align-items-center'>

        
        <form className='form-inputs d-flex flex-column justify-content-center align-items-center  p-4 ' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" style={{width:"20rem"}}>
                <Form.Label><b>Name: </b></Form.Label>
                {props.data?<Form.Control type="text" name="name"  className='input' placeholder={props.data.show.name} disabled/>:null}
            </Form.Group>
            <Form.Group className="mb-3 " style={{width:"20rem"}}>
                <Form.Label><b>Date: </b></Form.Label>
                <Form.Control type="date" name="date" className='input' onChange={(e)=>setDate(e)}/>
            </Form.Group>
            <label for="Timing"> <b>Show Timing: </b></label>
            <select value={value} onChange={(e)=>setValue(e.target.value)} className='my-2 p-2 show_time' style={{width:"10rem"}}>

       <option value="">select</option>
       <option value="Morning">Moring Show</option>

       <option value="Matnee">Matinee</option>

       <option value="Meat">Night Show</option>

     </select>
            <Button className='btn btn-primary Submitbtn' type='submit'>Book</Button>
            
        </form>
        </div>
    </div>
  )
}





export default Formbook