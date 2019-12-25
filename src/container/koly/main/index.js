import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Test from '../../../component/koly/test'
import Morth from '../../../component/koly/morth'
import Clock from '../../../component/koly/clock'
import Galery from '../../../component/koly/galery'
import Logo from '../../../component/koly/logo'


const Main = () => (
  <div className='main-container'>
    <Switch>
      <Route path='/morth' component={Morth} />
      <Route path='/galery' component={Galery} />
      <Route path='/test' component={Test} />
      <Route path='/clock' component={Clock} />
    </Switch>
    <Logo />
  </div>
)

export default Main;
