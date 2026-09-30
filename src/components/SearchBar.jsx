import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../Redux/features/searchSlice'



const SearchBar = () => {
  
  const [text, settext] = useState("")
  
  const dispatch = useDispatch()
  
  const all = useSelector((state)=> state.searcha.query)




  const formhandler = (e) => {
    e.preventDefault()
    dispatch(setQuery(text))
    // settext("")
    console.log(all)
  }
  return (
    <div className="bg-gray-300 flex justify-center p-3 ">
      <form
        onSubmit={(e) => {
          formhandler(e)
        }}
        className="flex w-[50%]  items-center gap-2">
        <input
          onChange={(e) => {
            settext(e.target.value)
          }}
          value={text}
          required
          type="text" placeholder="Search..."
          className="flex-1 px-4 py-3 border border-gray-900 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        <button className="px-6 py-3 rounded-3xl active:scale-90  bg-blue-600 text-white  hover:bg-blue-700 transition" > Search </button>
      </form>
    </div>
  )
}

export default SearchBar