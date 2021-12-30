export default interface Pizza {
  id: number
  imageUrl: string
  name: string
  description: string
  types: Array<number>
  sizes: Array<number>
  price: number
  category: string
  popularity: number
  hit: boolean
}

export interface ChosenPizza {
  id: number
  imageUrl: string
  name: string
  type: string
  size: number
  price: number
}
