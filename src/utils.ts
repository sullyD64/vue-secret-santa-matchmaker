import { gang } from "./data"
import { Match } from "./types"

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getNamesFromIDs = (ids: [number | null, number | null]): string => {
  return ids
    .filter(id => id !== null)
    .map(id => capitalize(gang.filter(d => d.id === id)[0].name))
    .toString()
}

export const matchToString = (match: Match): string => {
  return match.from.name + "->" + match.to.name
}
