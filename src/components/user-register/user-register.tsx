"use client";

import { createUser } from "@/services/users";
import React, { FormEvent, useState } from "react";

function UserRegister() {
  const [name, setName] = useState<string>("");

  const [phone, setPhone] = useState<string>("");

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await createUser({
      name,
      phone,
    });
  }

  return (
    <main>
      <form action="" onSubmit={(e) => handleRegister(e)}>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  );
}

export default UserRegister;
