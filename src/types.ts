export type DudeIDRef = number | null

export interface Dude {
  id: number
  name: string
  active: boolean
  prev: DudeIDRef[]
}

export interface Match {
  from: Dude
  to: Dude
}
