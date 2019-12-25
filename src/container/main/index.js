import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Test from '../../component/test'
import Morth from '../../component/morth'
import Clock from '../../component/clock'
import Galery from '../../component/galery'


const Main = () => (
  <div className='main-container'>
    <Switch>
      <Route  path='/morth' component={Morth} />
      <Route path='/galery' component={Galery} />
      <Route path='/test' component={Test} />
      <Route exact path='/clock' component={Clock} />
    </Switch>
  </div>
)

export default Main;
