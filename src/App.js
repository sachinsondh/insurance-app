import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import CustomerForm from "./Components/customer-form";
import { Route, Switch } from "react-router-dom";
import Chart from "./Components/chart";

function App() {
  //rendring navbar & other components with routes
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/policy/:id" component={CustomerForm} />
          <Route path="/customer-form" component={CustomerForm} />
          <Route path="/policy" component={Home} />
          <Route path="/chart" component={Chart} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
