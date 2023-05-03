"use client";

import { getUsers } from "@/services/users";
import { User } from "@/types/User";
import React, { useEffect, useState } from "react";

function ListUsers() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then((response) => {
        setData(response);
      })
      .then((_data) => {
        setError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <main>
        {" "}
        <p> Carregando... </p>
      </main>
    );

  if (error)
    return (
      <main>
        {" "}
        <p> Erro na requisição </p>
      </main>
    );

  return (
    <main>
      <ul>
        {data.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </main>
  );
}

export default ListUsers;
