import {useState} from 'react'
import { Link } from 'react-router-dom'
import './table.css'
// import Adhar from './Adhar'

function TableData() {
  const [data,setData]=useState([{Name:"",DateOfBirth:"",Adhar:"",Mobile:"",Age:""},
  ]);

  const getData = () => {
    const data = localStorage.getItem('data');
    if (data) {
      return JSON.parse(data);
    }
    else {
      return []
    }
  }
 
  
  const AddItem=()=>{
 setData([...data,{Name:"",DateOfBirth:"",Adhar:"",Mobile:"",Age:""}])
  }

  const DeleteItem=(index)=>{
    const list=[...data]
    list.splice(index,1);
    setData(list);
  }

  const handleonChange=(e,idx)=>{
    const{name,value}=e.target;
    const list=[...data];
    list[idx][name]=value;
    setData(list);

  }

  localStorage.setItem(`${data.Adhar}`, JSON.stringify(data));

  
  // console.log(data);
  return (
    <div className="App">
         <header>
        <Link to='/Table'><button>Add New Person</button></Link>
        <Link to='/Adhar'><button>Retrive information</button></Link>
        </header>
      <form>
      <table className='tablee'>
       <tr className='tableerow'>
       <th>Name</th>
       <th>Date Of Birth</th>
       <th>Adhar Number</th>
       <th>Mobile Number</th>
       <th>Age</th>
       <th>Actions</th>
       </tr> 
       
      
       <>
        {data.map((el,idx)=>
       
       <tr key={idx} className='tableerow'>
       <td>  <input name='Name' type={"text"} value={el.Name} onChange={(e)=>handleonChange(e,idx)}></input></td>
       <td>  <input name='DateOfBirth' type={"text"} value={el.DateOfBirth} onChange={(e)=>handleonChange(e,idx)}></input></td>
       <td>  <input name='Adhar' type={"text"} value={el.Adhar} onChange={(e)=>handleonChange(e,idx)}></input></td>
       <td>  <input name='Mobile' type={"text"} value={el.Mobile} onChange={(e)=>handleonChange(e,idx)}></input></td>
       <td>  <input name='Age' type={"text"} value={el.Age} onChange={(e)=>handleonChange(e,idx)}></input></td>
       <td>  {data.length-1===idx &&<button onClick={getData && AddItem}>Save</button>}
             {data.length-1===idx &&<button className='Buton' onClick={()=>DeleteItem(idx)}>Delete</button>}
              </td>
              {data.length-1 ===idx&&
              <button className='AddList' onClick={AddItem}>Add list</button>}
               </tr>
               
               
              
             
      )}
         
      </>
          
     
      
      </table>
      </form>
 
    </div>
  );
}


export default TableData;
