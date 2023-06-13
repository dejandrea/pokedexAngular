export type PokemonData = {
  id:number
  name:string
  sprites: {
    other:{
      dream_world:{
        front_default:string
      }
    }

  }
  types:{
    slot:string
    type:{
      name:string
      url:string
    }
  }[]
}
