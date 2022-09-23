import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import { Home } from '../pages/Home'

export const Routes = () => {
return(
  <BrowserRouter>
    <Switch>
      <Route path='/'>
        <Home/>
     </Route>
     <Redirect to ='/'/>
      </Switch>
  </BrowserRouter>
)
}