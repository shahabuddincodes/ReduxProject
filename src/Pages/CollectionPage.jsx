import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Collectioncard from "../components/Collectioncard";
import { clearCollection, clearedtoast, cleartoast } from "../Redux/features/collectionSlice";

const CollectionPage = () => {
    const dispatch = useDispatch()
    const exists = useSelector((state)=> state.collection.items)
    
    function clear(){
        if(exists.length>0 ){
             dispatch(clearCollection())
             dispatch(cleartoast())

        }
        else{
            dispatch(clearedtoast())
            
        }
        
        
    }
    const collection = useSelector(
        (state) => state.collection.items
    );

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <div className="sticky m-2  top-0 z-20 flex h-[10vh] items-center justify-between border-b border-gray-400 bg-white px-5 shadow-sm backdrop-blur-md md:px-8">

                {/* Left */}
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
                        My Collections
                    </h1>

                    <p className="mt-0.5 text-xs text-gray-500 md:text-sm">
                        Your saved media
                    </p>
                </div>

                {/* Right */}
                <button
                    onClick={()=>{
                        clear()
                    }}
                    className="rounded-xl bg-red-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-600 hover:shadow-md active:scale-95 md:px-5 md:py-2.5 md:text-sm"
                >
                    Clear Collection
                </button>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:p-8">

                {collection.map((item, idx) => (
                    <Collectioncard
                        key={idx}
                        item={item}
                    />
                ))}

            </div>

        </div>
    );
};

export default CollectionPage;