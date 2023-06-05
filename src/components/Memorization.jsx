import React from "react"

export const Memorization = () => {
    return <div>
        <FonctionMemorization/>
        <ComponentMemorization/>
    </div>
}

function FonctionMemorization(){
    const [infos, setInfo] = React.useState({
        username: "",
        usernumber: 0
    })

    const handleInfoChange = (e) => {
        const fieldname = e.target.name
        const value = e.target.value
        setInfo({...infos, [fieldname]: value})
    }

    const power = React.useMemo(() => {
        // console.log('power')
        return infos.usernumber ** 2
    }, [infos.usernumber])


    return (
        <div className="container">
            <div className="form-group">
                <label htmlFor="username">UserName : </label>
                <input className="form-control" type="text" name="username" value={infos.username} onChange={handleInfoChange} />
            </div>
            <div className="form-group">
                <label htmlFor="usernumber">UserNumber : </label>
                <input className="form-control" type="number" name="usernumber" value={infos.usernumber} onChange={handleInfoChange}/>
            </div>
            <p><strong>Encoded : </strong>{power}</p>
            <p>{JSON.stringify(infos)}</p>
        </div>
    )
}


const Bouton = React.memo(({onClick}) => {
    console.log('render')
    return <button className="btn btn-danger" onClick={onClick}>Mon bouton</button>

})

const ComponentMemorization = () => {
    const [count, setCount] = React.useState(0)

    const handleClick = React.useCallback(() => {
        console.log("Component clicked !")
    }, [])

    return (
        <div>
            <Bouton onClick={handleClick}/>
            <button className="btn btn-success" onClick={() => setCount(c => c + 1)}>Incrémenter {count}</button>
        </div>
    )
}
