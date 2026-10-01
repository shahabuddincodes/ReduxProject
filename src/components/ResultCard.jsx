import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedtoast } from "../Redux/features/collectionSlice";

const ResultCard = ({ items }) => {

    const dispatch = useDispatch();

    function addToCollection(items) {
        dispatch(addCollection(items))
        dispatch(addedtoast())

    }

    return (
        <div className="group relative mt-5 w-full overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            {/* Media */}
            <div className="relative h-64 w-full overflow-hidden bg-gray-100">

                <a href={items.url} target="_blank" rel="noreferrer">

                    {/* Photo */}
                    {items.type === "photo" && (
                        <img
                            src={items.thumbnails}
                            alt={items.title || "Photo"}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}

                    {/* Video */}
                    {items.type === "Video" && (
                        <video
                            src={items.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover"
                        />
                    )}

                    {/* GIF */}
                    {items.type === "GIF" && (
                        <img
                            src={items.thumbnails}
                            alt={items.title || "GIF"}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}

                    {/* Type Badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase text-white backdrop-blur-sm">
                        {items.type}
                    </span>

                </a>

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                {/* Title */}
                <h2 className="absolute bottom-4 left-4 max-w-[60%] truncate rounded-lg bg-black/60 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    {items.title || "Untitled"}
                </h2>

                {/* Save Button */}
                <button
                    onClick={() => {
                        addToCollection(items)
                    }}
                    className={`absolute bottom-4 right-4 rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-lg transition-all active:scale-95 bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    save
                </button>

            </div>

        </div>
    );
};

export default ResultCard;