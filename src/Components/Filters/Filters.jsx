import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { Fragment } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FactoryIcon from "@mui/icons-material/Factory";
import Dropdown from "../Dropdown/Dropdown";
import MemoryIcon from "@mui/icons-material/Memory";
import "./Filters.css";

const Filters = () => {
  const data = [
    "Bhuvan",
    "Anish",
    "Hemanth",
    "Ajith",
    "Amisha",
    "Ananya",
    "Aakanksha",
  ];

  return (
    <Fragment>
      <div className="schedule-filters">
        <h4>Filters</h4>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <Dropdown
                selectPlaceholder="Select your option"
                selectData={data}
                icon={<AccessAlarmIcon className="iconInSelect" />}
              />
            </FormControl>
          </Grid>

          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <Dropdown
                selectPlaceholder="Select Sub Area"
                selectData={data}
                icon={<AddLocationAltIcon className="iconInSelect" />}
              />
            </FormControl>
          </Grid>

          <Grid item md={4} xs={12} className="centerThis">
            <Button
              size="small"
              variant="contained"
              style={{
                background: "#004a77",
                fontSize: "13px",
                padding: "5px 20px",
                borderRadius: "100px",
              }}
            >
              Unscheduled Activity
            </Button>
          </Grid>

          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <Dropdown
                selectPlaceholder="Select Location"
                selectData={data}
                icon={<LocationOnIcon className="iconInSelect" />}
              />
            </FormControl>
          </Grid>

          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <Dropdown
                selectPlaceholder="Select Machine"
                selectData={data}
                icon={<FactoryIcon className="iconInSelect" />}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            md={4}
            xs={12}
            style={{ visibility: "hidden" }}
            className="centerThis"
          >
            <Button size="small" variant="contained">
              Unscheduled Activity
            </Button>
          </Grid>

          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <Dropdown
                selectPlaceholder="Select Area"
                selectData={data}
                icon={<AddLocationAltIcon className="iconInSelect" />}
              />
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <Dropdown
                selectPlaceholder="Select Technology"
                selectData={data}
                icon={<MemoryIcon className="iconInSelect" />}
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Filters;
