import React from 'react'
import { Switch, Link, Route} from 'react-router-dom'
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
                    <Switch>                        
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
                        
                    </Switch>

                </div>
            </Layout>


        <div className='footer' level={5} style={{color:'white' ,textAlign:'center'}}>
            <Typography.Title >
                CryptoGod<br />
                All Rights Reserved

            </Typography.Title>
            <Space>
                <Link to= '/'>Home</Link>
                <Link to= '/Exchanges'>Exchanges</Link>
                <Link to= '/news'>News</Link>
            </Space>

        </div>
        </div>

        
    </div>

)
}

export default App
