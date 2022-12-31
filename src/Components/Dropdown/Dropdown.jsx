import React from "react";
import "./Dropdown.css";

//Call from the filters section

// data:
// const data = [
//   "Bhuvan",
//   "Anish",
//   "Hemanth",
//   "Ajith",
//   "Amisha",
//   "Ananya",
//   "Aakanksha",
// ];

// icon : pass a icon along with the classname
{
  /* <FormControl fullWidth>
  <Dropdown
    selectPlaceholder="Select your option (placeholder for the select element)"
    selectData={data}
    icon={<AddLocationAltIcon className="iconInSelect" />}
  />
</FormControl>; */
}

function Dropdown({ selectPlaceholder, selectData, icon }) {
  return (
    <>
      <div className="inputWithIcon">
        <div>{icon}</div>
        <select className="selectElement">
          <option value="" disabled selected hidden>
            {selectPlaceholder}
          </option>

          {selectData.map((item1) => {
            return <option>{item1}</option>;
          })}
        </select>
      </div>
    </>
  );
}
export default Dropdown;
