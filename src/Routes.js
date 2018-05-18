import React from 'react'
import {Route} from 'react-router-dom'


import Contacts from './Contacts'

class Routes extends React.Component  {
  render ( ) {
    return <div>
    <Route exact path ='/contacts' component={Contacts} />
    </div>
  }
}
export default Routes
