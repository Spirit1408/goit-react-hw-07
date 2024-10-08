import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.contacts.items;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;

export const selectFilteredContacts = createSelector(
	[selectContacts, selectNameFilter],
	(contacts, filter) => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filter.toLowerCase()),
		);
	},
);
