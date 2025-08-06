import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(contact.id))}
        aria-label={`Sil ${contact.name}`}
      >
        Sil
      </button>
    </li>
  );
}
