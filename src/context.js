import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

function refineString(string){
  let pattern0=/\d{3}\/\d{2}\/\d{2}/g
  let pattern1=/\d{3}-\d{2}-\d{2}/g
  let pattern2=/\d{3}\s\d{2}\s\d{2}/g

  if (pattern0.test(string)) return string
  
  if (pattern1.test(string)){
    let result = string.replace(/-/g, "/");
    return result
  }
  if (pattern2.test(string)){
    let result = string.replace(/\s/g, "/");
    return result
  }
  return string
}

//const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('175/70/13')
  const [tires, setTires] = useState([])

  const fetchDrinks = useCallback( async () => {
    setLoading(true)
    try {
      const json= require('./medidas.json');
      const filtrado=json.filter((llanta)=> {
        let tmp= refineString(searchTerm)
        return llanta.medida===tmp;
      })
      if (filtrado) {
        const newTires=filtrado.map((item)=>{
          return {
            id:item.id,
            brand:item.marca,
            image:item.img,
            size:item.medida
          }
        })
        setTires(newTires)
      } else {
        setTires([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])


  
  useEffect(() => {
    fetchDrinks()
  }, [searchTerm,fetchDrinks])
  return (
    <AppContext.Provider  value={{ loading, tires, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
