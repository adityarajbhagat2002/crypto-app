import React from 'react'
import {Switch ,Link, Route} from 'react-router-dom'
import {Layout, Typography,Space} from  'antd' 

import {Navbar , Homepage,Exchanges,Cryptocurrencies,CryptoDetails,News} from './Components'
import  './App.css'

 const App = () => {
  return (

    <div className ='app'>
        <div className='Navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                    <switch>
                        <Route exact path='/'>
                            <Homepage />
                        </Route>
                        <Route exact path='/Exchanges'>
                            <Exchanges />
                        </Route>
                        <Route exact path='/cryptocurrencies'>
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path='/crypto/:coinID'>
                            <CryptoDetails  />
                        </Route>
                        <Route exact path='/news'>
                            <News  />
                        </Route>
                    </switch>

                </div>
            </Layout>

        </div>

        <div className='footer'>

        </div>

        
    </div>

  )
}

export default App
