import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FetchData = () => {
    const [data, setData] = useState("")
    const fetchData=async()=>{
        await axios.get(
            'https://api.tvmaze.com/search/shows?q=al'
            ).then((res)=>setData(res.data))

    }
    useEffect(() => {
      fetchData();
    }, [data])
    // fetchData();
  return (
    <div className='container my-4' >
    <h1>Available Shows</h1>
    <div className='container d-flex justify-content-center align-items-center flex-row flex-wrap my-3' style={{minHeight:"50vh",width:"100vw"}}>{data ? 
    data.map((item,index)=><>
    <div className='container my-3 p-4' style={{width:"400px",boxShadow:"2px 2px 10px silver",borderRadius:"10px" , minHeight:"650px"}}>
    <div className='d-flex justify-content-center align-items-center'>
    <img src={item.show.image.medium} alt="not found" className='img-thumbnail rounded' style={{width:"100%",height:"400px",objectFit:""}}/>
    </div>
    <h5 className='mt-2 mb-2 fs-2 fw-bold'>{item.show.name}</h5>
    <p className='my-1 fs-5'>Language: {item.show.language}</p>
    <p className='my-1 fs-5'>Type: {item.show.type}</p>
    {item.show.genres.length!==0?<>
    <p className='my-1 fs-5 '>Genres: {item.show.genres.map((g,index)=>{
        return(
            <span>{g} </span>
            )
        })}</p>
        </>:""}
    <Link to={`/details/${item.show.name}`} state={item}>
    <button className='mt-1 btn btn-secondary' >View more details</button>
    </Link>
    </div>
    </>)
    :<button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="sr-only">Loading...</span>
  </button>}</div>
</div>
  )
}

export default FetchData