import React from 'react'
import { Link } from 'react-router-dom'
import{useEffect,useState} from 'react'
import './Detail.css'
function Adhar() {

  const [data, setData] = useState([]);
  const[filterin,setFilterin]=useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  // Update the displayed data based on searchKey
  useEffect(()=>{
    const filteredData = data.filter((user)=>user.Adhar===searchKey)
    setFilterin(filteredData );

  },[data,searchKey])
 
 
  console.log(data)
  console.log(searchKey)
  console.log(filterin)

  // Handle search input change
  const handleSearchChange = event => {
    setSearchKey(event.target.value);
   
  };

  return (
    <div>
         <header>
        <Link to='/Table'><button>Add new person</button></Link>
        <Link to='/Adhar'><button>Retrive Information</button></Link>
        </header>
        <div className='retrive'>
       
          <input className='inputee'
        type="text"
        placeholder="Search..."
        value={searchKey}
        onChange={handleSearchChange}
      />
   
          
      <div>
    {filterin.map((item, index) => (
      <div key={index} className='card'>
        <p>Name:{item.Name}</p>
        <p>DOB:{item.DateOfBirth}</p>
        <p>Adhar:{ item.Adhar}</p>
        <p>Mobile:{item.Mobile}</p>
        <p>Age:{item.Age}</p>
       
      </div>
    ))}
  </div>
      </div>
  
    
    </div>
  )
}

export default Adhar