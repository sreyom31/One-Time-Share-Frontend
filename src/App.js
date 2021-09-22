import { Fragment } from "react";
import FileUpload from "./components/FileUpload";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      {/* <Home /> */}
      <FileUpload />
      <Footer />
    </Fragment>
  );
}

export default App;
