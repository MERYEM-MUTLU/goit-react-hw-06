import React from "react";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactsList from "./components/ContactsList/ContactsList";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>İletişim Kitabı</h1>
      <ContactsForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
}
