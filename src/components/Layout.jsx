import React from "react"

/**
 * useEffect : Asynchrone (après le rendu du composant)
 * useLayoutEffect : Synchrone (avant le rendu du composant)
 *
 */

export function Layout(){
    const [count, setCount] = React.useState(0)
    const button = React.useRef(null)

    const handleClick = React.useCallback(() => {
        setCount(c => c + 1)
    }, [])

    React.useLayoutEffect(()=>{
        button.current.style.color = (count % 2 === 0) ? 'green':'red'
    }, [count])

    return <div>
        <button ref={button} onClick={handleClick}>Incrémenter {count} </button>
    </div>


}
