import React, { useEffect } from "react"
// import { useIncrement } from "../hooks/useIncrement"
import { useToggle } from "../hooks/useToggle"
import { useAutoIncrement } from "../hooks/useAutoIncrement"
// import { API } from "../apis/API"
import { useFetchData } from "../hooks/useFetchData"

export const Hooks = () => {

    const [countVisible, toggle] = useToggle()

    return (
        <div>
            Afficher Compteur<input type="checkbox" checked={countVisible} onChange={toggle} />
            <TodoList/>
            <UserTable/>
            <Counter/>
        </div>
    )

}


const Counter = () => {
    // const [count, increment] = useIncrement(0, 2)
    const count = useAutoIncrement(0, 2)

    console.log("render")

    useEffect(() => {
        document.title = "Compteur " + count
    }, [count])

    return (
        <div>
            {/* <button className="btn btn-danger" onClick={increment}>Incrémenter {count}</button> */}
            <button className="btn btn-danger" >Incrémenter {count}</button>
        </div>
    )
}

const UserTable = () => {
    const [loading, users] = useFetchData(`https://jsonplaceholder.typicode.com/users`)

    if (loading) {
        return (
            <div className="d-flex align-items-center text-success">
                <strong>Chargement...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>Koto</td>
                    <td>koto@gmail.com</td>
                    <td>0341200025</td>
                </tr> */}
                {users.map(u =>
                    <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.phone}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )

}


const TodoList = () => {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        // Code proposé
        // API.fetchData(`https://jsonplaceholder.typicode.com/todos`)
        // .then(response => {
        //     if(response.ok){
        //         return response.json()
        //     }
        //     else{
        //         throw new Error("Error" + response.status)
        //     }
        // })
        // .then(data => {
        //     setTodos(data)
        // })
        // .catch(error =>{
        //     console.log(error)
        // } )
        (async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
            const data = await response.json()

            if (response.ok) {
                setTodos(data)
            }
            else {
                console.error(data)
            }
            setLoading(false)

        })()


    }, [])

    if (loading) {
        return (
            <div className="d-flex align-items-center text-danger">
                <strong>Chargement...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        )
    }


    return (
        <ul>
            {todos.map(t => <li key={t.title}>{t.title}</li>)}
        </ul>
    )
}

