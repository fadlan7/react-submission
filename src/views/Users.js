import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import Topic from "./router-dom";

export default function Topics() {
  const history = useHistory();
  let match = useRouteMatch();

  console.log(match);

  return (
    <div className="App">
      <header>Topics</header>

      <div className="App">
        <header>
          <ul>
            <li>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/about")}
              >
                NAVIGATE
              </div>
              <Link to={`${match.url}/react-router`}>React Router</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route path={`${match.url}/:topicId`}>
            <Topic />
          </Route>

          <Route path={match.url}>
            <h1>Tolong pilih topiknya cuy</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
