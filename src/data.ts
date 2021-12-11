import { Dude } from "./types"

export const gang: Dude[] = [
  { id: 1, active: true, name: "b", prev: [10, 2, 6] },
  { id: 2, active: false, name: "gebbro", prev: [3, 11, 8] },
  { id: 3, active: true, name: "milli", prev: [6, 12, 10] },
  { id: 4, active: true, name: "nick", prev: [8, 3, 9] },
  { id: 5, active: true, name: "pelle", prev: [null, null, 4] },
  { id: 6, active: true, name: "picci", prev: [4, 1, 5] },
  { id: 7, active: true, name: "sexy", prev: [11, null, null] },
  { id: 8, active: true, name: "stef", prev: [2, 4, 11] },
  { id: 9, active: true, name: "sully", prev: [12, 8, 2] },
  { id: 10, active: true, name: "teddy", prev: [null, 6, 1] },
  { id: 11, active: true, name: "zigno", prev: [9, 10, 3] },
  { id: 12, active: false, name: "rob", prev: [9, 1, null] }
]
