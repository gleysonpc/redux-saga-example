import React, { Fragment } from "react";
import Users from "./components/Users";
import { Provider } from "react-redux";
import store from "./redux";
import Toaster from "./components/Toaster";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Fragment> 
          <Toaster />         
          <Users />
        </Fragment>
      </Provider>
    </div>
  );
}

export default App;
