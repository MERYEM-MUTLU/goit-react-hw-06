import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aynı isimde kayıt var mı kontrolü (case insensitive)
    if (contacts.find((c) => c.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} zaten rehberde kayıtlı!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      phone,
    };

    dispatch(addContact(newContact));
    setName("");
    setPhone("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        İsim
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={css.input}
          placeholder="İsim girin"
        />
      </label>
      <label className={css.label}>
        Telefon
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={css.input}
          placeholder="Telefon numarası"
          pattern="[\d\s+-]+" // Basit pattern: rakam, boşluk, +, -
          title="Geçerli bir telefon numarası girin"
        />
      </label>
      <button type="submit" className={css.button}>
        Ekle
      </button>
    </form>
  );
}
