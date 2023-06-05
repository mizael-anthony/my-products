import React from 'react'
import Field from './Field'

const Boiler = () => {
  const [temperature, setTemperature] = React.useState({ celsius: 0, fahrenheit: 0 })
  const [message, setMessage] = React.useState({ type: '', label: '' })

  const handleChange = (e) => {
    const temperatureName = e.target.name
    const temperatureValue = e.target.value
    setTemperature({
      ...temperature,
      celsius: temperatureName === 'celsius' ? temperatureValue : toCelsius(temperatureValue),
      fahrenheit: temperatureName === 'fahrenheit' ? temperatureValue : toFahrenheit(temperatureValue)
    })



  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (temperature.celsius >= 100) {
      setMessage({ ...message, type: 'alert alert-success', label: 'bout' })
    }
    else {
      setMessage({ ...message, type: 'alert alert-danger', label: 'ne bout pas' })
    }

  }

  const toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9
  }

  const toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32
  }

  return (
    <div className='container'>
      <form action="" onSubmit={handleSubmit}>
        <Field type="number" name="celsius" id="celsius" value={temperature.celsius} onChange={(e) => handleChange(e)}>Temperature C°</Field>
        <Field type="number" name="fahrenheit" id="fahrenheit" value={temperature.fahrenheit} onChange={(e) => handleChange(e)}>Temperature F°</Field>
        <button type="submit" className="btn btn-primary">Check</button>
      </form>
      {
        message.type &&
        <div className={message.type}>
          <strong>L'eau </strong> {message.label}
        </div>
      }
    </div>
  )
}

export default Boiler
