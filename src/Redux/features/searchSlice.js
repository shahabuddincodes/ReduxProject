import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice(
    {
        name: 'searchali',
        initialState:{
            query : '',
            activeTab :'Photos',
            results: [],
            loading : false,
            error: null,

        },
        reducers:
        {
            setQuery(state,action){
                state.query = action.payload
            },
            setActiveTabs(state,action){
                state.activeTab = action.payload
            },
            setResults(state,action){
                state.results = action.payload
                state.loading = false
            },
            setLoading(state,action){
                state.loading = true
                state.error = null
            },
            setError(state,action){
                state.error = action.payload
                state.loading = false
            },
        }
    }
)
export const {setError,setLoading,setResults,setActiveTabs,setQuery} = searchSlice.actions
export default searchSlice.reducer