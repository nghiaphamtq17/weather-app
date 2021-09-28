import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHN , fetchVinh , fetchDN } from "./store/weatherSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const hn = useSelector((state) => state.weather.hn);
  const dn = useSelector((state) => state.weather.dn);
  const vinh = useSelector((state) => state.weather.vinh);
  const dispatch = useDispatch();

  const HaNoi = () => {
    return (
      <div>
        <h2>Home</h2>
      {JSON.stringify(hn.name)}
    
      </div>
    );
  }

  const DaNang = () => {
    return (
      <div>
        <h2>Home</h2>
      {JSON.stringify(dn.name)}
    
      </div>
    );
  }

  const Vinh = () => {
    return (
      <div>
        <h2>Home</h2>
      {JSON.stringify(vinh.name)}
    
      </div>
    );
  }

  const clickHandler = () => {
    dispatch(fetchHN);
    
    dispatch(fetchDN);
    dispatch(fetchVinh);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/hanoi">Hà Nội</Link>
            </li>
            <li>
              <Link to="/danang">Đà Nẵng</Link>
            </li>
            <li>
              <Link to="/vinh">Vinh</Link>
            </li>
            <button onClick={() => clickHandler()}>Refresh</button>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/hanoi">
            <HaNoi />
          </Route>
          <Route path="/danang">
            <DaNang />
          </Route>
          <Route path="/vinh">
            <Vinh />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
