"use client";

import { getUsers } from "@/services/users";
import { User } from "@/types/User";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

function ListUsers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    refetchOnWindowFocus: false,
    retry: 0,
  });

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
        {data?.map((item) => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </main>
  );
}

export default ListUsers;
