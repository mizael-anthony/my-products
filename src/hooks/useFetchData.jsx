import React from "react";
import { API } from "../apis/API"

export function useFetchData(url){
    const [state, setState] = React.useState({
        loading: true,
        items: []
    })
    React.useEffect(() => {
        API.fetchData(url)
        .then(response => {
            if(response.ok){
                return response.json()
            }
            else{
                throw new Error(response.status)
            }
        })
        .then(data => {
            setState({...state, items: data, loading: false})
        })
        .catch(error => {
            setState({...state, loading: false})
            console.log(error)
        })
    })

    return [state.loading, state.items]
}
