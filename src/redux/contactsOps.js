import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66e85443b17821a9d9dc4cb0.mockapi.io";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("/contacts");
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	},
);

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contact, thunkAPI) => {
		try {
			const response = await axios.post("/contacts", {
				name: contact.name,
				number: contact.number,
			});
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	},
);

export const deleteContact = createAsyncThunk(
	"contacts/deleteContact",
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	},
);
