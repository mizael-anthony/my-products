import React from "react"

function init(initialValue) {
    return {count: initialValue}
}

function reducer(state, action){
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + (action.payload || 1)}
        case 'DECREMENT':
            if(state.count <= 0){
                // Si l'état reste la même il ne render pas les composants (enfants)
                return state
            }
            return {count: state.count - 1}
        case 'RESET':
            return init(0)
        default:
            throw new Error("L'action " + action.type + "est invalide !")
    }

}


export const Reducer = () => {
    const [count, dispatch] = React.useReducer(reducer, 0, init)

    return <div className="container">
        <p><strong>Compteur :</strong> {count.count}</p>
        <button className="btn btn-primary" onClick={() => dispatch({type : 'INCREMENT', payload : 10})}>Incrementer</button>
        <button className="btn btn-danger" onClick={() => dispatch({type : 'DECREMENT'})}>Décrementer</button>
        <button className="btn btn-success" onClick={() => dispatch({type : 'RESET' })}>Réinitialiser</button>
        <Child/>
    </div>

}

function Child(){
    console.log('render')
    return <div>
        <h1>Child</h1>
    </div>
}
