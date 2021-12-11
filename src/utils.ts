import { gang } from "./data"
import { DudeIDRef, Match } from "./types"

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getNamesFromIDs = (ids: DudeIDRef[]): string => {
  return ids
    .filter(id => id !== null)
    .map(id => capitalize(gang.filter(d => d.active).filter(d => d.id === id)[0].name))
    .join(", ")
    .toString()
}

export const isActiveDude = (id: DudeIDRef): boolean => {
  return gang.find(d => d.id === id)?.active || false
}

export const matchToString = (match: Match): string => {
  return match.from.name + "->" + match.to.name
}
