import React from "react";
import { usePlantsStore } from "../store/plantsStore";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
} from "@mui/material";
import PlantsList from "./PlantsList";

const PlantsTable = () => {
  const { plants, filter, setFilter } = usePlantsStore();

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Box>
      <TextField
        label="Filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        variant="outlined"
        sx={{ margin: 2 }}
      />
      <TableContainer component={Paper} sx={{ width: "80%", marginLeft: 2 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#13a143ff" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right"> NAME</TableCell>
              <TableCell align="right">Place Of Origin</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPlants.map((plant) => {
              return (
                <TableRow key={plant.id}>
                  <TableCell>{plant.id}</TableCell>
                  <TableCell align="right">{plant.name}</TableCell>
                  <TableCell align="right">{plant.country}</TableCell>
                  <TableCell align="right">{plant.price} $</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PlantsTable;
