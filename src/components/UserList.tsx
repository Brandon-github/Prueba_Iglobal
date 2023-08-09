import { User } from "../interfaces/User"
import UserCard from "./UserCard"

const UserList = ({users}: {users: User[]}) => {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {users.length !== 0 ? users.map(({ name, picture, email }) => (
              <UserCard name={name} picture={picture} key={email} />
            )) : <span className="text-custom-primary text-2xl font-extralight">No se encontraron usuarios...</span>}
    </div>
  )
}

export default UserList