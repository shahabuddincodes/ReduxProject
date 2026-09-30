import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
// import Practise from './components/Practise'
import ResultCard from './components/ResultCard'

const App = () => {
  const info = {
    picurl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYEWrPetdN3FBz4FZLN5K7BWRsdREUrlirUE9SEFEZBLl230FksysY5U&s=10",
    title : 'photo'
  }
  
  
  return (
    <div className='min-h-screen text-black '>
      <SearchBar />
      <Tabs />
      <ResultGrid />
      {/* <Practise/> */}
      {/* <ResultCard pics={info } /> */}
    </div>
  )
}

export default App