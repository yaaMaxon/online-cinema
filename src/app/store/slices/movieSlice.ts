import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        value: []
    },
    reducers: {
        // toggleTheme: (state) => {
        //     state.value = []
        // }
    }
});

// export const {toggleTheme} = movieSlice.actions
export default movieSlice.reducer