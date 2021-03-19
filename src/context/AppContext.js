import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      }
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}

const intialState = {
  budget: 20000,
  expenses: [
    { id: 12, name: 'Shopping', cost: 40},
    { id: 13, name: 'Holiday', cost: 400},
    { id: 14, name: 'Car service', cost: 50 }
  ],
}

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, intialState)
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch
      }}
    >{props.children}</AppContext.Provider>
  )
}