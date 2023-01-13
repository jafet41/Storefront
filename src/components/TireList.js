import React from 'react'
import Tire from './Tire'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function TireList() {
  const { tires, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (tires.length < 1) {
    return (
      <h2 className='section-title-none'>
        No hay llantas que coincidan con tu busqueda.
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Llantas</h2>
      <div className='tires-center'>
        {tires.map((item) => {
          return <Tire key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
