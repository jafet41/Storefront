import React from 'react'
import TireList from '../components/TireList'
import SearchForm from '../components/SearchForm'
import VideoBanner from '../components/VideoBanner'
export default function Home() {
  return (
    <main>
      <VideoBanner /> 
      <SearchForm />
      <TireList />
    </main>
  )
}
