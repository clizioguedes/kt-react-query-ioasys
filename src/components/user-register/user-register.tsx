"use client";

import { createUser } from "@/services/users";
import { User } from "@/types/User";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { FormEvent, useState } from "react";

function UserRegister() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const queryClient = useQueryClient();

  const [name, setName] = useState<string>("");

  const [phone, setPhone] = useState<string>("");

  const { mutate } = useMutation({
    mutationFn: async () => {
      await delay(5000);
      await createUser({ name, phone });
    },
    onMutate: async () => {
      const newUser = { name, phone };

      await queryClient.cancelQueries(["users"]);

      queryClient.setQueryData(["users"], (old) => {
        return [...(old as User[]), newUser];
      });

      return { newUser };
    },
    onSuccess: async () => {
      alert("Cadastro Realizado com sucesso");
    },
  });

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // await api.post("/user", { site: true, name, phone });

    mutate();
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
