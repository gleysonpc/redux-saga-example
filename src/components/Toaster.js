import React from "react";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import ReduxToastr from "react-redux-toastr";

export default props => (
  <ReduxToastr
    timeOut={4000}
    newestOnTop={false}
    preventDuplicates
    position="top-right"
    getState={state => state.toastr} // This is the default
    transitionIn="fadeIn"
    transitionOut="fadeOut"
    progressBar
    closeOnToastrClick
  />
);
