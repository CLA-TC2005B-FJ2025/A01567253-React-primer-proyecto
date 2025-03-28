import React from 'react'
import { Tarjeta } from './Tarjeta'

//impirtar las imagenes y asignarles un objeto
import MarioImage from './imagenes/Mario.png'
import LuigiImage from './imagenes/Luigi.png'
import PeachesImage from './imagenes/Peaches.png'
export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros</div>
        <Tarjeta nombre= "Mario" colorFavorito="Rojo" image={MarioImage}/>
        <Tarjeta nombre= "Luigi" colorFavorito="Green"image={LuigiImage}/>
        <Tarjeta nombre= "Peach" colorFavorito="Rosa"image={PeachesImage}/>
    </div>
  )
}
