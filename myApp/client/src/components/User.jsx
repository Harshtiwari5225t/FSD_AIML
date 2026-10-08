
import { useContext } from 'react'
import UserContext from "../components/UserContext"
const UserLayout = () => {
    const {user}=useContext(UserContext);
  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Welcome {user.name} {user.role}</h2>
    </div>
  )
}
export default UserLayout