import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHN, fetchVinh, fetchHCM } from "./store/weatherSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const hn = useSelector((state) => state.weather.hn);
  const hcm = useSelector((state) => state.weather.hcm);
  const vinh = useSelector((state) => state.weather.vinh);
  const dispatch = useDispatch();

  const HaNoi = () => {
    return (
      <div>
        <h2>Hà Nội</h2>
        {JSON.stringify(hn.list[0])}
        <div className="container">
          <p>
            Nhiệt độ : {JSON.stringify(hn.list[0].main.temp) / 10} °C /
            <i class="bi bi-brightness-high"></i>
          </p>
          <p>Tốc độ gió : {JSON.stringify(hn.list[0].clouds.all)}</p>
          <p>
            Thời tiết :
            <p>
              {(() => {
                switch (JSON.stringify(hn.list[0].weather[0].main)) {
                  case "Clouds":
                    return '<i class="bi bi-cloud"></i>';
                  case "Rain":
                    return '<i class="bi bi-cloud-drizzle-fill"></i>';
                  case "blue":
                    return "#0000FF";
                  case "blue":
                    return "#0000FF";
                  case "blue":
                    return "#0000FF";
                  default:
                    return "#FFFFFF";
                }
              })()}
            </p>
          </p>
        </div>
      </div>
    );
  };

  const HCM = () => {
    return (
      <div>
        <h2>Hồ Chí Minh</h2>
        {JSON.stringify(hcm.list[0])}
        <div className="container">
          <p>
            Nhiệt độ : {JSON.stringify(hcm.list[0].main.temp) / 10} °C /
            <i class="bi bi-brightness-high"></i>
          </p>
          <p>Tốc độ gió : {JSON.stringify(hcm.list[0].clouds.all)}</p>
          <p>
            Thời tiết :
            <p>
              {(() => {
                switch (JSON.stringify(hcm.list[0].weather[0].main)) {
                  case "Clouds":
                    console.log("clouds");

                    return '<i class="bi bi-cloud"></i>';
                  case "Rain":
                    console.log("rain");
                    return '<i class="bi bi-cloud-drizzle-fill"></i>';

                  default:
                    return "#FFFFFF";
                }
              })()}
            </p>
            <p>thoi tiet : {JSON.stringify(hcm.list[0].weather[0].main)}</p>
            <p>"Rain"</p>
            <p>
              test{" "}
              {JSON.stringify(hcm.list[0].weather[0].main) == 'Rain'? "true" : "false"}
            </p>
          </p>
        </div>
      </div>
    );
  };

  const Vinh = () => {
    return (
      <div>
        <h2>Vinh</h2>
        {JSON.stringify(vinh)}
      </div>
    );
  };

  const clickHandler = () => {
    dispatch(fetchHN);

    dispatch(fetchHCM);
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
              <Link to="/hcm">Hồ Chí Minh city</Link>
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
          <Route path="/hcm">
            <HCM />
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
