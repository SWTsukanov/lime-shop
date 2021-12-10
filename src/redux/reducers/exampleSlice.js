import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const exampleSlice = createSlice({
  name: 'exampleSlice',
  initialState,
  reducers: {
    exampleAction: (state) => {
      state.value = ''
    },
  },
})

export const { exampleAction } = exampleSlice.actions

export default exampleSlice.reducer
