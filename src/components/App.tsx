import React from "react";
import '../index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Nav from "./Nav";
import Animation from "./Animation";



const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Animation></Animation>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
