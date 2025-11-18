import { plants } from "../data/plants";
import { Plant } from "../types/Plant";

export async function getPlants(): Promise<Plant[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(plants), 500);
  });
}
