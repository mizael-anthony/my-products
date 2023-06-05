import React from "react";
import { useIncrement } from "../hooks/useIncrement"

export function useAutoIncrement(initial = 0, step = 1){
    const [count, increment] = useIncrement(initial, step)

    React.useEffect(()=> {
        const timer = setInterval(() => {
            increment()
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    })

    return count


}
