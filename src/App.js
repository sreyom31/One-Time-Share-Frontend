import { Fragment } from "react";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
