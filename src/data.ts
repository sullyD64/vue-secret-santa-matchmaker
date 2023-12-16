import { Dude } from "./types"

export const gang: Dude[] = [
  { id: 1, active: false, name: "b", prev: [10, 2, 6, 9, 12] },
  { id: 2, active: false, name: "gebbro", prev: [3, 11, 8, null, null] },
  { id: 3, active: true, name: "milli", prev: [6, 12, 10, 4, 9] },
  { id: 4, active: true, name: "nick", prev: [8, 3, 9, 5, 11] },
  { id: 5, active: true, name: "pelle", prev: [null, null, 4, 1, 8] },
  { id: 6, active: true, name: "picci", prev: [4, 1, 5, 11, 10] },
  { id: 7, active: true, name: "sexy", prev: [11, null, null, 8, 5] },
  { id: 8, active: false, name: "stef", prev: [2, 4, 11, null, 7] },
  { id: 9, active: true, name: "sully", prev: [12, 7, 2, 10, 1] },
  { id: 10, active: false, name: "teddy", prev: [null, 6, 1, 3, 6] },
  { id: 11, active: false, name: "zigno", prev: [9, 10, 3, 6, 3] },
  { id: 12, active: false, name: "rob", prev: [9, 1, null, null, null] },
  { id: 12, active: false, name: "palma", prev: [null, null, null, null, 4] }
]
