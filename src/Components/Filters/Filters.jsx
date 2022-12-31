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
import "./Filters.css";
const Filters = () => {
  return (
    <Fragment>
      <div className="schedule-filters">
        <h4>Filters</h4>

        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                size="small"
                sx={{ paddingLeft: "60px" }}
              >
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                variant="outlined"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
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
              <InputLabel id="demo-simple-select-label" size="small">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
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
              <InputLabel id="demo-simple-select-label" size="small">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                size="small"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Filters;
