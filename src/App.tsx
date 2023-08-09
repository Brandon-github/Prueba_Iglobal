import { Route, Routes } from "react-router-dom"
import HomeView from './views/HomeView'
import UserListView from "./views/UserListView"

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserListView />} />
      <Route path="/:name/:picture" element={<HomeView />} />
    </Routes>
  )
}

export default App
