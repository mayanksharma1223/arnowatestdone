import valueContext from "./valueContext"
import { useState } from "react"

const ValueState = (props) => {
  const host = "https://arnowatest.herokuapp.com"
  const valuesInitial = []
  const [values, setValues] = useState(valuesInitial)

  const getValues = async () => {
    const response = await fetch(`${host}/api/values/fetchallvalues`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json()
    setValues(json)
  }

  const addValue = async (india,oman,us,growth,loss) => {
    const response = await fetch(`${host}/api/values/addvalue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token")
      },
      body: JSON.stringify({india,oman,us,growth,loss})
    })
    const value=await response.json()
    setValues(values.concat(value))

  }
  const deleteValue =async (id) => {
    const response = await fetch(`${host}/api/values/deletevalue/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
    })
    const json = response.json();
    console.log(json)
    const newValues = values.filter((value) => { return value._id !== id })
    setValues(newValues)
  }
  return (
    <valueContext.Provider value={{ values, addValue, deleteValue, getValues }}>
      {props.children}
    </valueContext.Provider>
  )
}


export default ValueState;