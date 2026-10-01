import React from "react";
import { useDispatch } from "react-redux";
import {
    removeCollection,
    removetoast
} from "../Redux/features/collectionSlice";

const Collectioncard = ({ item }) => {

    const dispatch = useDispatch();

    const removefromCol = (item) => {
        dispatch(removeCollection(item.id));
        dispatch(removetoast());
    };

    return (
        <div className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Media */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">

                <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.src || item.thumbnails}
                    className="block h-full w-full"
                >

                    {/* Photo */}
                    {item.type === "photo" && (
                        <img
                            src={item.thumbnails}
                            alt={item.title || "Photo"}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}

                    {/* Video */}
                    {item.type === "Video" && (
                        <video
                            src={item.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}

                    {/* GIF */}
                    {item.type === "GIF" && (
                        <img
                            src={item.thumbnails}
                            alt={item.title || "GIF"}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )}

                    {/* Dark bottom gradient */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Type Badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        {item.type}
                    </span>

                </a>

                {/* Remove Button */}
                <button
                    onClick={() => removefromCol(item)}
                    className="absolute right-3 top-3 rounded-lg bg-red-500/90 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-red-600 group-hover:opacity-100"
                >
                    Remove
                </button>

            </div>

            {/* Information */}
            <div className="flex items-center justify-between gap-3 p-4">

                <div className="min-w-0 flex-1">

                    <h2
                        className="truncate text-sm font-semibold text-gray-800"
                        title={item.title}
                    >
                        {item.title || "Untitled"}
                    </h2>

                    <p className="mt-1 text-xs text-gray-400">
                        Saved to collection
                    </p>

                </div>

                {/* Open */}
                <a
                    href={item.src || item.thumbnails}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:text-gray-900"
                >
                    Open
                </a>

            </div>

        </div>
    );
};

export default Collectioncard;