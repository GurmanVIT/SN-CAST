import "../src/assets/style/Style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Index";
import { Provider } from "react-redux";
import store from "./redux/store";
import ApiBinding from "./component/ApiBinding/ApiBinding";
import Deposit from "./component/Deposit/Deposit";
import Home from "./component/Home/Home";

// export

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/api_binding" element={<ApiBinding />} />
          <Route path="/deposit" element={<Deposit />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
