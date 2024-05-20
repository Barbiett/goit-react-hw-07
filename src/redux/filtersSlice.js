import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = slice.actions;

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectContacts],
  (selectNameFilter, selectContacts) => {
    const filteredContacts = selectContacts.filter((selectContact) =>
      selectContact.name
        .toLowerCase()
        .trim()
        .includes(selectNameFilter.toLowerCase().trim())
    );
    return filteredContacts;
  }
);

export default slice.reducer;
