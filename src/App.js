import "./App.css";
import { Helmet } from "react-helmet";

import Todopage from "./Components/todopage";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>To-Do List</title>
      </Helmet>
      <Todopage />
    </Fragment>
  );
}

export default App;
