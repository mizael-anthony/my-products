import React from "react"

export const UserContext = React.createContext(null)


export const Contexte = () => {
    const [user, setUser] = React.useState({ fullname: "koto" })

    const changeUser = React.useCallback((user) => {
        setUser({ ...user, ...user })
    }, [])

    const value = React.useMemo(() => {
        return {
            user: user,
            changeUser: changeUser
        }
    }, [changeUser, user])

    return (
        <UserContext.Provider value={value}>
            <Profil />
            <Card />
        </UserContext.Provider>

    )
}

const Profil = () => {
    const { user, changeUser } = React.useContext(UserContext)


    const handleChange = (e) => {
        const fieldName = e.target.name
        const value = e.target.value
        const newUser = {...user, [fieldName]: value}
        changeUser(newUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        changeUser({...user, fullname: "Le Jean"})
    }

    return (
        <div className="container">
            <form action="#" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullname">FullName : </label>
                    <input type="text" className="form-control" name="fullname" id="fullname" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    )
}


const Card = () => {
    const {user} = React.useContext(UserContext)
    return (
        <div className="container">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{user.fullname}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}
