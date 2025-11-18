import React, { use, useEffect } from "react";
import { Card, ListItem, Typography, Button, List } from "@mui/material";
import { usePlantsStore } from "../store/plantsStore";
import "./module.css";
const PlantsList = () => {
  const { plants, removePlant, fetchPlants } = usePlantsStore();
  useEffect(() => {
    fetchPlants?.();
  }, [fetchPlants]);

  return (
    <>
      <Typography className="plantsNameHeader">Plant Names</Typography>
      <List className="plantsList">
        {plants.map((plant) => (
          <ListItem key={plant.id}>
            {plant.name}
            <Button
              className="removeButton"
              onClick={() => removePlant?.(plant.id)}
            >
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default PlantsList;
