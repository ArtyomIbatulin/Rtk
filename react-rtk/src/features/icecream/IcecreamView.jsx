import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {orderedIcecream,restockedIcecream } from './iceSlice'

export const IcecreamView = () => {
  const [value, setValue] = useState(1)

  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()

  return (
    <div>
    <h2>Number of ice creams - {numOfIcecreams}</h2>
    <button onClick={() => dispatch(orderedIcecream())}>Order ice creams</button>
    <input
    type = "number"
    value = {value}
    onChange = {(e) => setValue(parseInt(e.target.value))}
    />
    <button onClick={() => dispatch(restockedIcecream(value))}>Restock ice creams</button>
    </div>
  )
}

