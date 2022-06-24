import Home from "./Pages/Home/Home"
import { BrowserRouter as Router } from "react-router-dom" 
import { Switch, Route } from "react-router-dom"

const Routes = () => {
  
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes;