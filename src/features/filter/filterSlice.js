const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  selectedTags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    tagSelected: (state, action) => {
      state.selectedTags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      //   state.selectedTags.filter((tag) => tag !== action.payload);
      const indexToRemove = state.selectedTags.indexOf(action.payload); // find index

      if (indexToRemove !== -1) {
        state.selectedTags.splice(indexToRemove, 1); // remove that index using splice
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched } = filterSlice.actions;
