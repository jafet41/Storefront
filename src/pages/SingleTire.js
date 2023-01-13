import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleTire() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [tire, setTire] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    function getTire() {
      try {
        const response = require('../medidas.json')

        console.log(response[id-1])
        if (response[id-1]) {
          const {
            marca: name,
            img: image,
            medida: info
          } = response[id-1]

          const newTire = {
            name,
            image,
            info
          }
          setTire(newTire)
        } else {
          setTire(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getTire()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!tire) {
    return <h2 className='section-title'>No hay llantas para mostrar {id}</h2>
  } else {
    const {
      name,
      image,
      info
    } = tire
    return (
      <section className='section tire-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title-tire'>{name}</h2>
        <div className='drink'>
          <img src={`/${image}`} alt={name}></img>
          <div className='drink-info'>
            <p>
              {console.log(image)}
              <span className='drink-data'>name : </span> {name}
            </p>
            <p>
              <span className='drink-data'>info : </span> {info}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
