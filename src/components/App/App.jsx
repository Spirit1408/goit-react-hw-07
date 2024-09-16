import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
	const dispatch = useDispatch();
	const loading = useSelector(selectLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<div className={css.app}>
			<h1 className={css.title}>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			{loading && !error && <b>Loading...</b>}
			<ContactList />
		</div>
	);
}
