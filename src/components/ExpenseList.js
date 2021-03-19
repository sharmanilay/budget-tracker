/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/AppContext"
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
  const { expenses } =  useContext(AppContext)
  const [searchedResults, setSearchedResults] = useState(expenses)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const newResults = expenses.filter(item => item.name.includes(search))
    if (newResults !== searchedResults) {
      setSearchedResults(newResults)
    }
  }, [search])

  const handleInputChange = (evt) => {
    setSearch(evt.target.value)
  }

  return (
    <React.Fragment>
      <input value={search} onChange={handleInputChange} />
      <ul className='list-group'>
        {searchedResults.map((expense) => (
          <ExpenseItem key={`expense-item-${expense.id}`} id={expense.id} name={expense.name} cost={expense.cost} />
        ))}
      </ul>
    </React.Fragment>
  )
}

export default ExpenseList