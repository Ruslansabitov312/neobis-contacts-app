import { createSlice } from "@reduxjs/toolkit"
import { fetchData } from "../service/api"

const initialState = {
  allContacts: localStorage.getItem("contacts")
    ? JSON.parse(localStorage.getItem("contacts") || "{}")
    : [],
}
// fetchData().then((data) => console.log(data))

export const contactsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getContacts: (state, action) => {
      state.allContacts = action.payload
      localStorage.setItem("contacts", JSON.stringify(state.allContacts))
    },
    editContact: (state, action) => {
      state.allContacts.forEach((item) => {
        if (item.id === action.payload.id) item = action.payload
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { getContacts, editContact } = contactsSlice.actions

export default contactsSlice.reducer
