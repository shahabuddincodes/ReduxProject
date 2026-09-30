import { useDispatch, useSelector } from 'react-redux'
import { fetchGif, fetchPhotos, fetchVideos } from '../api/api'
import { setQuery, setLoading, setResults, setError } from '../Redux/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const { query, activeTab, results, loading, error } = useSelector((store) => store.searcha)
    const dispatch = useDispatch();

    useEffect(() => {
        async function getData() {
            try {
                let data = []
                dispatch(setLoading())
                if (!query.trim()) {
                    return
                }
                if (activeTab == 'Photos') {
                    data = await fetchPhotos(query)

                    data = data.map((ittems) => ({
                        id: ittems.id,
                        type: 'photo',
                        title: ittems.short_description,
                        thumbnails: ittems.urls.small,
                        src: ittems.urls.full,
                        url: ittems.links.html
                    }))
                }
                if (activeTab == 'Videos') {
                    data = await fetchVideos(query)
                    data = data.map((ittems) => ({
                        id: ittems.id,
                        type: 'Video',
                        title: ittems.user.name || 'VIDEO',
                        thumbnails: ittems.image,
                        src: ittems.video_files[0].link,
                        url: ittems.url
                    }))
                }
                if (activeTab == 'GIF') {
                    data = await fetchGif(query)
                    data = data.map((items) => ({
                        id: items.id,
                        type: 'GIF',
                        title: items.title,
                        thumbnails: items.images.preview_gif.url,
                        url: items.url
                    }))
                }
                dispatch(setResults(data))

            } catch (err) {
                dispatch(setError(err))
            }

        }
        getData()
    }, [query, activeTab])

if(error) return <h1>Error Occurd!!!</h1>
if(loading) return <h1>Loading.........!!!!!</h1>

    return (
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {results.map((itm,idx)=>{
                return <div key={idx}>
                    
                    <ResultCard items={itm}/>

                    
                </div>
            })}

            {/* <ResultCard/> */}
        </div>
    )
}



export default ResultGrid