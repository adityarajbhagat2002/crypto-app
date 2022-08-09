import React from 'react'
import {Switch ,Link, Route} from 'react-router-dom'
import {Layout, Typography,Space} from  'antd' 

import {Navbar} from './Components'

 const App = () => {
  return (

    <div className ='app'>
        <div className='Navbar'>
            <Navbar />

        </div>
        <div className='main'>

        </div>

        <div className='footer'>

        </div>

        
    </div>

  )
}

export default App
