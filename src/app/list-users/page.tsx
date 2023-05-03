import ListUsers from "@/app/list-users/list-users";
import UserRegister from "@/components/user-register/user-register";
import Link from "next/link";

export default function Users() {
  return (
    <main>
      <Link href={"/"}>Voltar</Link>
      <h1>Users</h1>
      <UserRegister />
      <ListUsers />
    </main>
  );
}
