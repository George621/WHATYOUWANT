import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './view/Home/index'
import Info from './view/Info/index'

const App = () => {
  return (
    <BrowserRouter basename = 'test.self.com'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/info' exact  component={Info} />
      </Switch>
    </BrowserRouter>
  )
}

export default App