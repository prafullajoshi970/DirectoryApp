import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import TableData from './component/TableData'
import Detail from './component/Deatil'
import Adhar from './component/Adhar'
function App() {
  return (
    <div><div className='head'><h2> Directory App</h2></div>
      
      <BrowserRouter>
      <Routes>
        <Route path='Table' element={<TableData/>}></Route>
        <Route path='/' element={<Detail/>}></Route>
        <Route path='Adhar' element={<Adhar/>}></Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  )
}

export default App