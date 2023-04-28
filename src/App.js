import './App.css';
import { Switch, Route } from "react-router-dom";

import index from './compoments/index'
function App() {
  return (
    <div>
      <Switch >
        <Route path="/" component={index}></Route>
      </Switch>
    </div>
  );
}

export default App;
