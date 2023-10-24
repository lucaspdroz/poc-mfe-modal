import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import SafeComponent from '../Error/SafeComponent'
const CustomModal = lazy(() => import('core/CustomModal'))
const Header = lazy(() => import('core/Header'))
import "./index.css";

const App = () => (
  <div className="container">
    <Suspense fallback={<p>loading...</p>}>
      <SafeComponent>
          <Header />
      </SafeComponent>
    </Suspense>
    <Suspense fallback={<p>loading...</p>}>
      <SafeComponent>
          <CustomModal />
      </SafeComponent>
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
