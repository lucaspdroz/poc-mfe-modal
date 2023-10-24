import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import SafeComponent  from '../Error/SafeComponent'
import "./index.css";

const CustomModal = lazy(() => import('core/CustomModal'))

const App = () => (
  <div className="container">
    <Suspense fallback={<p>loading...</p>}>
      <SafeComponent>
        <div className="react">
          <CustomModal />
        </div>
      </SafeComponent>
    </Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
