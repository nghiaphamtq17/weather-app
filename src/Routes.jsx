import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HaNoiPage from "./components/HaNoiPage";
import HCMPage from "./components/HCMPage";
import VinhPage from "./components/VinhPage";
import { fetchHN, fetchVinh, fetchHCM } from "./store/service";

const Routes = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(fetchHN);

    dispatch(fetchHCM);
    dispatch(fetchVinh);
  };

  return (
    <Router>
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/hanoi">
            Hà Nội
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/vinh">
            Vinh
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/hcm">
            Thành Phố Hồ Chí Minh
          </Link>
        </li>
        <button class="btn btn-primary" onClick={() => clickHandler()}>
          Refresh
        </button>
      </ul>
      <Switch>
        <Route path="/hanoi">
          <HaNoiPage />
        </Route>
        <Route path="/hcm">
          <HCMPage />
        </Route>
        <Route path="/vinh">
          <VinhPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
