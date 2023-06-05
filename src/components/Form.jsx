import React from "react"
import Field from "./Field"

function Form() {

    const [person, setPerson] = React.useState({
        fullName: 'Koto',
        age: 34,
        description: 'lorem ipsum',
        job: ['dev', 'designer'],
        isClient: false
    })

    const [human, setHuman] = React.useState({
        firstName: 'Jean',
        lastName: 'Doe',
        newsLetter: false
    })

    const change = (value) => {
        setPerson({ ...person, fullName: value })
    }

    const select = (value) => {
        setPerson({ ...person, job: Array.from(value).map(j => j.value) })
    }

    const check = (value) => {
        setPerson({ ...person, isClient: value })
    }

    const handleChange = (e) => {
        const fieldName = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        setHuman({ ...human, [fieldName]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = JSON.stringify(human)
        console.log(data)
    }




    return (
        <div className="container">
            <div>
                <label htmlFor="fullName">FullName : </label>
                <input type="text" name="fullName" id="fullName" value={person.fullName} onChange={(e) => change(e.target.value)} />
                <p>{person.fullName}</p>
            </div>

            <div>
                <label htmlFor="description">Description : </label>
                <textarea name="description" id="description" cols="30" rows="10" value={person.description} onChange={() => { }} />
            </div>


            <div>
                <label htmlFor="job">Job : </label>
                <select name="job" id="job" value={person.job} onChange={(e) => select(e.target.selectedOptions)} multiple={true}>
                    <option value="dev">Dev</option>
                    <option value="admin">Admin</option>
                    <option value="designer">Designer</option>
                </select>
                <p>{JSON.stringify(person.job)}</p>
            </div>


            <div>
                <label htmlFor="isClient">Client?</label>
                <input type="checkbox" name="isClient" id="isClient" checked={person.isClient} onChange={(e) => check(e.target.checked)} />
                <p>{person.isClient.toString()}</p>
            </div>

            <form action="" className="container" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Formulaire d'inscription</legend>
                    <Field type="text" name="firstName" id="firstName" value={human.firstName} onChange={(e) => handleChange(e)}>Nom : </Field>
                    <Field type="text" name="lastName" id="lastName" defaultValue={human.lastName} onChange={(e) => handleChange(e)}>Prénoms : </Field>

                    <div className="form-group">
                        <label htmlFor="newsLetter">newsLetter</label>
                        <input className="form-check-label" type="checkbox" name="newsLetter" id="newsLetter" checked={human.newsLetter} onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-success" type="submit">Envoyer</button>
                    </div>
                </fieldset>
            </form>

            {JSON.stringify(human)}



        </div>
    )
}

export default Form
