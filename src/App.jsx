import React from 'react'
import { useState } from 'react'

import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos'
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizados'



import './App.css'

function App() {


  return (
    <>
      <section>

        <Componente msg='Hola soy un componente desde props' />
        <hr />
        <Propiedades
          cadena='Esto es uan cadena de texto'
          numero={19}
          booleano={true}
          arreglo={[1, 2, 3]}
          objeto={{ nombre: 'Pablo', correo: 'pablutus@gmail.com' }}
          funcion={num => num * num}
          elementoReact={<i>Esto es un elemento React</i>}
          ComponenteReact={<Componente msg='Soy un componente pasado como Prop' />}

        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloVida />h
        <hr />
        <AjaxApis />
        <hr />
        <ContadorHooks titulo='Seguidores' />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks />
        <hr />
        <HooksPersonalizados />
      </section>




    </>
  )
}

export default App
