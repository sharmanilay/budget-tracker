import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { MdModeEdit } from 'react-icons/md'
import { AiFillSave } from 'react-icons/ai'

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext)
  const [isEditable, setIsEditable] = useState(false)
  const [newBudget, setNewBudget] = useState(budget)

  const toggleEdit = () => {
    setIsEditable(!isEditable)
  }

  const handleBudgetChange = (evt) => {
    setNewBudget(evt.target.value)
  }

  const saveBudgetToContext = () => {
    dispatch({
      type: 'UPDATE_BUDGET',
      payload: newBudget
    })
    toggleEdit()
  }

  return (
    <div className='alert alert-secondary d-flex'>
      { isEditable
        ? (
          <React.Fragment>
            <div>Budget: ₹
              <input
                className="d-inline material-style-input"
                value={newBudget}
                onChange={handleBudgetChange}
              />
              <button onClick={saveBudgetToContext} className="btn btn-link align-self-center">
                <AiFillSave />
              </button>
            </div>
          </React.Fragment>
        )
        : (
          <React.Fragment>
            <div className="align-self-center">Budget: ₹{budget}</div>
            <button onClick={toggleEdit} className="btn btn-link align-self-center">
              <MdModeEdit />
            </button>
          </React.Fragment>
        )
      }
    </div>
  )
}

export default Budget