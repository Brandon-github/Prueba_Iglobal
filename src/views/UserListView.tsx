import { useEffect, useState } from "react"
import Container from "../layouts/Container"
import { User } from "../interfaces/User"
import { getUsers } from "../fetch/fetchUsers"
import { Link } from "react-router-dom"
import UserList from "../components/UserList"



const UserListView = () => {

  const [users, setUsers] = useState<User[]>([])
  const [seachUsers, setSearchUsers] = useState<User[]>([])
  const [seach, setSearch] = useState<string>("")

  const loadUsers = async () => {
    const data = await getUsers(50)
    setUsers(data)
    setSearchUsers(data)
  }

  const handleSeachChange = (e: any): void => {
    const { name, value } = e.target

    if (name === "search") {
      setSearch(value)

      if (value !== "") {
        const filter = users.filter((user) => {
          let fullname = `${user.name.first} ${user.name.last}`
          if (fullname.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
            return user
          }
        })

        setSearchUsers(filter)
      } else {
        setSearchUsers(users)
      }
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <Container>
      <main className="w-full min-h-screen flex justify-center items-start px-8 py-8">
        <div className="w-[1000px] max-w-full mx-auto">
          <input
            type="text"
            className="w-full h-14 rounded-lg outline-none px-4 bg-custom-secondary text-custom-primary mb-10"
            name="search"
            placeholder="Que persona buscas?"
            onChange={(e) => handleSeachChange(e)}
            value={seach}
          />

          <UserList users={seachUsers} />
        </div>
      </main>
    </Container>
  )
}

export default UserListView