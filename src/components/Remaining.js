import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext)

  const remaining = budget - expenses.reduce((total, item) => {
    return total += item.cost
  }, 0)

  return (
    <div className="alert alert-success">
      <span>Remaining: ₹{remaining}</span>
    </div>
  )
}

export default Remaining
