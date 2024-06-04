import "../src/assets/style/Style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login/Index";
import { Provider } from "react-redux";
import store from "./redux/store";
import ApiBinding from "./component/ApiBinding/ApiBinding";
import Deposit from "./component/Deposit/Deposit";
import Home from "./component/Home/Home";
import BindExchange from "./component/BindExchange/BindExchange";
import BybitApiBinding from "./component/BybitApiBinding/BybitApiBinding";

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
          <Route path="/exchange_bind" element={<BindExchange />} />
          <Route path="/bybit_api_binding" element={<BybitApiBinding />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
