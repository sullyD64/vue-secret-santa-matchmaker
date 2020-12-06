export interface Dude {
  id: number
  name: string
  prev: [number | null, number | null]
}

export interface Match {
  from: Dude
  to: Dude
}
