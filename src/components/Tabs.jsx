import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../Redux/features/searchSlice";

const Tabs = () => {
    const tabs = ["Photos", "Videos", "GIF"];

    const dispatch = useDispatch()

    const activetab = useSelector((state) => state.searcha.activeTab)

    return (
        <div className="flex justify-center mt-6">
            <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl border border-gray-200 shadow-sm">
                {tabs.map((tab, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTabs(tab))

                        }}
                        className={`
                            px-6 py-2.5
                            rounded-lg
                            text-sm font-medium
                            transition-all duration-200
                            ${activetab === tab
                                ? "bg-gray-900 text-indigo-600 shadow-sm"
                                : "text-gray-500 hover:text-gray-900 hover:bg-white/70"
                            }
                        `}>
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;