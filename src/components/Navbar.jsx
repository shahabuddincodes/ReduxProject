import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-(--c1)'>
            <h2 className='text-4xl p-2 text-white font-bold' >Media</h2>

            <div className='flex items-center gap-2 p-3'>
                <Link to='/' className='p-4 bg-white text-black rounded-full font-bold  active:scale-96'>Search</Link>
                <Link to='/collection' className='p-4 bg-white text-black rounded-full font-bold  active:scale-96'>Collection</Link>
            </div>
        </div>
    )
}

export default Navbar