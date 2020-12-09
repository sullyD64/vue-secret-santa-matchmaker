import { Dude } from "./types"

export const gang: Dude[] = [
  { id: 1, name: "b", prev: [10, 2] },
  { id: 2, name: "gebbro", prev: [3, 11] },
  { id: 3, name: "milli", prev: [6, null] },
  { id: 4, name: "nick", prev: [8, 3] },
  { id: 5, name: "pelle", prev: [null, null] },
  { id: 6, name: "picci", prev: [4, 1] },
  // { id: 7, name: "sexy", prev: [11, null] },
  { id: 8, name: "stef", prev: [2, 4] },
  // { id: 9, name: "sully", prev: [7, 8] },
  { id: 9, name: "sully", prev: [null, 8] },
  { id: 10, name: "teddy", prev: [null, 6] },
  { id: 11, name: "zigno", prev: [9, 10] }
]
