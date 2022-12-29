import { Fragment } from "react";
import "./App.css";
import Drawer from "./Components/Drawer/Drawer";
import Filters from "./Components/Filters/Filters.jsx";
function App() {
  return (
    <Fragment>
      <Drawer />
      <section id="schedule-global">
        <div className="schedule-global-header">
          <h1>Schedule</h1>
          <h3>Global</h3>
        </div>
        <Filters />
      </section>
    </Fragment>
  );
}

export default App;
