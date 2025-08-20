import { create } from "zustand";
import { Plant } from "../types/Plant";
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
      country: "Frankreich",
      price: 29,
    },
    {
      id: 2,
      name: "Türken-Mohn",
      country: "Kaukasus",
      price: 17,
    },
    {
      id: 3,
      name: "Duftwicke",
      country: "England",
      price: 49,
    },
    {
      id: 4,
      name: "Mimosen-Akazie",
      country: "Australien",
      price: 37,
    },
    {
      id: 5,
      name: "Passionsblume",
      country: "Südamerika",
      price: 19,
    },
  ],
  filter: "",
  setFilter: (value) => set({ filter: value }),
}));
