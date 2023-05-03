"use client";

import { getUsers } from "@/services/users";
import { User } from "@/types/User";
import React, { useEffect, useState } from "react";

function ListUsers() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then((response) => {
        setData(response);
      })
      .then((_data) => {
        setError(null);
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
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default ListUsers;
