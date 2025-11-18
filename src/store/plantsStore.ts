import { create } from "zustand";
import { Plant } from "../types/Plant";
import { persist, createJSONStorage } from "zustand/middleware";
interface PlantState {
  plants: Plant[];
  filter: string;
  setFilter: (value: string) => void;
}
export const usePlantsStore = create<PlantState>((set) => ({
  plants: [
    {
      id: 1,
      name: "Bart-Iris",
      country: "France",
      price: 29,
    },
    {
      id: 2,
      name: "Turkish Poppy",
      country: "Caucasus",
      price: 17,
    },
    {
      id: 3,
      name: "Sweet Pea",
      country: "England",
      price: 49,
    },
    {
      id: 4,
      name: "Mimosa Acacia ",
      country: "Australia",
      price: 37,
    },
    {
      id: 5,
      name: "Passion Flower",
      country: "South America",
      price: 19,
    },
  ],
  filter: "",
  setFilter: (value) => set({ filter: value }),
}));
