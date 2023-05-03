import ListUsers from "@/app/list-users/list-users";
import UserRegister from "@/components/userRegister/UserRegister";

export default function Home() {
  return (
    <main>
      <h1>Users</h1>
      <UserRegister />
      <ListUsers />
    </main>
  );
}
