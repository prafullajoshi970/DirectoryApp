import React from 'react'
import { Link } from 'react-router-dom'
import{useEffect,useState} from 'react'
import './Detail.css'
function Adhar() {
 const[item,setItem]=useState([]);
console.log(item)
  const getData = () => {
    const data = localStorage.getItem('data');
    if (data) {
      return JSON.stringify(data);
    }
    else {
      return []
    }
  }
 
useEffect(() => {
 
setItem(getData());


}, [])

  return (
    <div>
         <header>
        <Link to='/Table'><button>Add new person</button></Link>
        <Link to='/Adhar'><button>Retrive Information</button></Link>
        </header>
        <div className='retrive'>
      <input className="inputee"type={'text'}></input>
      <button className='buttone'>Search</button>
      <p>No Data Found</p> 
      </div>
    
    </div>
  )
}

export default Adhar