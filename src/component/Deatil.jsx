import React from 'react'
import { Link } from 'react-router-dom'

function Deatil(props) {
  return (
    <><header>
    <Link to='/Table'><button>Add New Person </button></Link>
    <Link to='/Adhar'><button>Retrive Information</button></Link>
    </header>
    </>

  )
}

export default Deatil