import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { useDispatch } from "react-redux";

import Header from "./components/header";

import { login } from "./redux/actions/userActionCreators";

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  if (token && user) {
    dispatch(login(user, token))
  }

  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
