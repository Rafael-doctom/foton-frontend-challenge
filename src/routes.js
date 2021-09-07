import { Route, BrowserRouter, Switch } from "react-router-dom";
import Book from "./pages/Book";
import Home from "./pages/Home";

const Routes = () => {
   return(
       <BrowserRouter>
        <Switch>
           <Route component={ Home } exact path="/"/>
           <Route component={ Book } path="/book/:id" />
        </Switch>
       </BrowserRouter>
   )
}

export default Routes;