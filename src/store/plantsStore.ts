import { create } from "zustand";
import { Plant } from "../types/Plant";
import { persist } from "zustand/middleware";
import { getPlants } from "../sdk/api";
import { plants } from "../data/plants";
interface PlantState {
  plants: Plant[];
  filter: string;
  isDeleted?: boolean;
  setFilter: (value: string) => void;
  removePlant?: (id: number) => void;
  fetchPlants?: () => Promise<void>;
}

export const usePlantsStore = create<PlantState>()(
  persist(
    (set, get) => ({
      plants: [],
      filter: "",
      setFilter: (value) => set({ filter: value }),
      fetchPlants: async () => {
        const data = await getPlants();

        set({ plants: data });
      },
      removePlant: (id) => {
        set((state) => ({
          plants: state.plants.filter((plant) => plant.id !== id),
        }));
      },
    }),
    { name: "plants-storage" }
  )
);
