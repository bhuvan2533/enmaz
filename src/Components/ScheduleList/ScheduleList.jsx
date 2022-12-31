import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ScheduleList.css";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // // hide last border
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
}));

function createData(
  customerName,
  location,
  area,
  subArea,
  machine,
  uploadResBtn,
  viewBtn,
  approveBtn
) {
  return {
    customerName,
    location,
    area,
    subArea,
    machine,
    uploadResBtn,
    viewBtn,
    approveBtn,
  };
}

//To change the row data change the below values as needed based on the response received from the backend
const rows = [
  createData(
    "Bhuvan",
    "Location1",
    "Sub area 1",
    "Sub area 1",
    "Machines 12",
    "fad",
    "adf",
    "afd"
  ),
  createData(
    "Bhuvan",
    "Location1",
    "Sub area 1",
    "Sub area 1",
    "Machines 12",
    "fad",
    "adf",
    "afd"
  ),
  createData(
    "Bhuvan",
    "Location1",
    "Sub area 1",
    "Sub area 1",
    "Machines 12",
    "fad",
    "adf",
    "afd"
  ),
  createData(
    "Bhuvan",
    "Location1",
    "Sub area 1",
    "Sub area 1",
    "Machines 12",
    "fad",
    "adf",
    "afd"
  ),
  createData(
    "Bhuvan",
    "Location1",
    "Sub area 1",
    "Sub area 1",
    "Machines 12",
    "fad",
    "adf",
    "afd"
  ),
  createData(
    "Bhuvan",
    "Location1",
    "Sub area 1",
    "Sub area 1",
    "Machines 12",
    "fad",
    "adf",
    "afd"
  ),
];

export default function CustomizedTables() {
  return (
    <>
      <div className="scheduleList">
        <h4>Schedule List</h4>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#E8F1FF" }}>
              <TableRow>
                <StyledTableCell sx={{ fontWeight: "600" }}>
                  Customer
                </StyledTableCell>
                <StyledTableCell align="right">Location</StyledTableCell>
                <StyledTableCell align="right">Area</StyledTableCell>
                <StyledTableCell align="right">Sub Area</StyledTableCell>
                <StyledTableCell align="right">Machines</StyledTableCell>
                <StyledTableCell align="right">Technology</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.customerName}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.location}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.area}</StyledTableCell>
                  <StyledTableCell align="right">{row.subArea}</StyledTableCell>
                  <StyledTableCell align="right">{row.machine}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      className="schedule-list-button"
                    >
                      Upload Results
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      className="schedule-list-button"
                    >
                      View
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button
                      variant="contained"
                      className="schedule-list-button"
                    >
                      Approve
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
