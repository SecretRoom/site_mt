import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Test from '../../../component/lera/test'
import Morth from '../../../component/lera/morth'
import Clock from '../../../component/lera/clock'
import Galery from '../../../component/lera/galery'
import Logo from '../../../component/lera/logo'


const Main = () => (
  <div className='main-container'>
    <Switch>
      <Route  path='/morth' component={Morth} />
      <Route path='/galery' component={Galery} />
      <Route path='/test' component={Test} />
      <Route exact path='/clock' component={Clock} />
    </Switch>
    <Logo />
  </div>
)

export default Main;
