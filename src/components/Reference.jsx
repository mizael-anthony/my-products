import React from "react"

const Fied = React.forwardRef((props, ref) => {
    return (
        <div className="form-group">
            <input type="text" className="form-control" ref={ref} />
        </div>
    )
})


export const Reference = () => {
    let inputName = null
    let inputAge = React.useRef(null)
    let inputField = React.createRef()


    const handleClick = (e) => {
        console.log(inputName)
        console.log(inputName.value)
        console.log(inputAge)
        console.log(inputAge.current.value)
        console.log(inputField)
        console.log(inputField.current.value)
    }

    return(
        <div>
            <input ref={(r) => inputName = r} type="text" name="nomination" id="nomination" placeholder="Nom..." />
            <input ref={inputAge} type="text" name="age" id="age" placeholder="Age..." />
            <Fied ref={inputField}/>
            <button className="btn btn-secondary" onClick={handleClick}>Get</button>
        </div>
    )
}
