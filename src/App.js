import React, { Suspense } from 'react';
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import FileUpload from "./components/FileUpload";
import LoadingSpinner from "./components/LoadingSpinner"
import Layout from "./layout/Layout";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
  <Layout>
  <Suspense
    fallback={
      <div className='centered'>
        <LoadingSpinner />
      </div>
    }
  >
  <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/load/:id'>
          <FileUpload />
        </Route>
        
      </Switch>
  </Suspense>
</Layout>
</BrowserRouter>
  );
}

export default App;
