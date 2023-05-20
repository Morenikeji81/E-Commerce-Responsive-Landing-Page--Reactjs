import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'
import Register from './Pages/Login/Register'
import Login from './Pages/Login/Login'
import Account from './Pages/Account/Account'
import {useSelector} from "react-redux"


const App = () => {
  const isLogIn = useSelector((state) => state.auth.isLogIn)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  return (
    <div>
      {isLogIn  && (

      
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register}/>
        <Route exact path='/account' component={Account}/>
        </Switch>
        <Footer />
      </Router>
      )}
      {!isLogIn && <Login/>}
    </div>
  )
}


export default App