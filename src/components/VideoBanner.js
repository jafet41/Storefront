import React from 'react'
import kelly from "../vids/kelly.mp4"
//import { useGlobalContext } from '../context'

export default function VideoBanner() {
    return (
      <section className='section-video'>
        <video autoPlay muted loop id="myVideo">
            <source src={kelly} type="video/mp4" />
        </video>
      </section>
    )
  }