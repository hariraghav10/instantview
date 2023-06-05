import React from "react";
import { useEffect,useState } from "react";
import "../Styles/Bookings.css";


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    "date":"05-06-2023",
    "EVSE":"Evse001",
    "User":"ndiwbw",
    "cost:":12,
  },
  {
    "date":"05-06-2023",
    "EVSE":"Evse002",
    "User":"ndiasw",
    "cost:":34,
  },
  {
    "date":"05-06-2023",
    "EVSE":"Evse001",
    "User":"ndiwbw",
    "cost:":12,
  },
  {
    "date":"05-06-2023",
    "EVSE":"Evse002",
    "User":"ndiasw",
    "cost:":34,
  },
  {
    "date":"05-06-2023",
    "EVSE":"Evse001",
    "User":"ndiwbw",
    "cost:":12,
  },
  {
    "date":"05-06-2023",
    "EVSE":"Evse002",
    "User":"ndiasw",
    "cost:":34,
  },
  {
    "date":"05-06-2023",
    "EVSE":"Evse001",
    "User":"ndiwbw",
    "cost:":12,
  },
  {
    "date":"05-06-2023",
    "EVSE":"Evse002",
    "User":"ndiasw",
    "cost:":34,
  }
  
];





 const Bookings = () => {

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    fetch('https://csms2.onrender.com/api1/listbook')
      .then(response => response.json())
      .then(data => {console.log(data);setItems(data)})
      .catch(error => console.error(error));
  };
  return (
    <div className="bookingbox">
      <div className="bookdiv">
        
      <TableContainer component={Paper}>
      <Table  aria-label="customized table" className="tablee">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">EVSE</StyledTableCell>
            <StyledTableCell align="right">User</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="right" className="colomm">{row.date}</StyledTableCell>
              <StyledTableCell align="right"  className="colomm">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.User}</StyledTableCell>
              <StyledTableCell align="right">{row["cost:"]}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      </div>
    </div>
  );
};
export default Bookings