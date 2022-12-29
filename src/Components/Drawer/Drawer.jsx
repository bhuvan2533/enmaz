import React, { Fragment } from "react";
//Import the image links here and pass to the navitems component as props
//Kindly change the path of the image if generating error
import im from "../../Images/AddGraphReport.png";
import NavItem from "./NavItem";
const Drawer = (props) => {
  return (
    <Fragment>
      <div id="drawer-container">
        <div className="drawer-top-section"></div>
        <div className="drawer-main-section">
          <ul>
            {/* Pass the image and the title  */}
            <li>
              <NavItem img={im} title="Page1" link="/page1" />
            </li>
            <li>
              <NavItem img={im} title="Page2" link="/page2" />
            </li>
            <li>
              <NavItem img={im} title="Page3" link="/page3" />
            </li>
            <li>
              <NavItem img={im} title="Page4" link="/page4" />
            </li>
            <li>
              <NavItem img={im} title="Page5" link="/page5" />
            </li>
            <li>
              <NavItem img={im} title="Page6" link="/page6" />
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Drawer;
