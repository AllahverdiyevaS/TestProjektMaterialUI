import React from "react";
import { usePlantsStore } from "../store/plantsStore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, TextField } from "@mui/material";

const UserTable = () => {
  const { plants, filter, setFilter } = usePlantsStore();

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      <TextField
        label="Filter"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        variant="outlined"
        sx={{
          margin: 2,
          "& .MuiOutlinedInput-root": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "darkgray",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "green",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            "&.Mui-focused": {
              color: "green",
            },
          },
        }}
      />
      <TableContainer component={Paper} sx={{ width: "80%", marginLeft: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#13a143ff" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">Place Of Origin</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPlants.map((plant) => (
              <TableRow
                key={plant.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {plant.id}
                </TableCell>
                <TableCell align="right">{plant.name}</TableCell>
                <TableCell align="right">{plant.country}</TableCell>
                <TableCell align="right">{plant.price} $</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserTable;
