import React from 'react'
import {useState} from 'react'
import { useParams,useLocation, Link } from 'react-router-dom'
import './details.css'
import Formbook from '../Form/Form'


const Details = (props) => {

  // const nameM=useParams().name
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData);
  const handleBook = () => {
    setShowForm(!showForm);
  };

  return (
    <>
    <div className='details ' >
       
        <div className='container my-2 d-flex justify-content-center align-items-center flex-column flex-lg-row ' style={showForm===false?{zIndex:1}:{zIndex:-1,opacity:0.25}}>
          <div>
          {propsData?<img src={propsData.show.image.original} className='my-2 imd-fluid' style={{height:"600px",objectFit:""}} alt="" />:null}
          </div>
          <div className='m-4 p-3 py-4 ml-2 border-2 rounded-1 shadow-lg' style={{width:"50vw"}}>

          <h1>{propsData.show.name}</h1>
          {/* <div>
          {propsData.show.summary}
          </div> */}
          <div dangerouslySetInnerHTML={ { __html:propsData.show.summary  } }></div>
          <div>
          <p className='my-1 '><b>Language:</b> {propsData.show.language}</p>
          <p className='my-1 '><b>Type:</b> {propsData.show.type}</p>
          <p className='my-1 '><b>Premiered On:</b> {propsData.show.premiered}</p>
          {propsData.show.ended!==null?<p className='my-1 '><b>Ended On:</b> {propsData.show.ended}</p>:""}
          
          {propsData.show.genres.length!==0?<>
    <p className='my-1  '><b>Genres:</b> {propsData.show.genres.map((g,index)=>{
        return(
            <span>{g} </span>
            )
        })}</p>
        </>:""}
        {propsData.show.schedule.days.length!==0?<>
    <p className='my-1  '><b>Scheduled On:</b> {propsData.show.schedule.days.map((g,index)=>{
        return(
            <span>{g},</span>
            )
        })}</p>
        </>:""}
        <span className='my-1'><b>Official Site:</b> </span>
        <Link to={propsData.show.officialSite}>

        <span >{propsData.show.officialSite}</span>
        </Link>
        <div>
          <button className='book border my-2 rounded p-2 text-white shadow-lg' onClick={handleBook}>Book Your tickets</button>
        </div>
          </div>
          </div>
        </div>
    {showForm&&<div className='form' >
      <Formbook data={propsData} booking={props.booking} setBooking={props.setBooking}/>
    </div>}
    </div>
    </>
  )
}

export default Details