import React from 'react'
import {fetchGif, fetchPhotos, fetchVideos} from '../api/api'

const Practise = () => {
    async function getvideo() {
        const data = await fetchVideos('dogs')
        console.log(data)
        
    }
    async function getphotos() {
        const data = await fetchPhotos('dogs')
        console.log(data)
        
    }

    async function getgifs() {
        const data = await fetchGif('cats')
        console.log(data)
    }
  return (
    <div>
        <button onClick={getphotos} className='bg-amber-400  m-2'>get photos</button>
        <button onClick={getvideo} className='bg-amber-400  m-2'>get videos</button>
        <button onClick={getgifs} className='bg-amber-400  m-2'>get GIFs</button>
    </div>
  )
}

export default Practise