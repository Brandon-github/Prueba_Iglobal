import { Route, Routes } from "react-router-dom"
import UserView from './views/UserView'
import UserListView from "./views/UserListView"
import Page404View from "./views/Page404View"

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserListView />} />
      <Route path="/:name/:picture" element={<UserView />} />
      <Route path="*" element={<Page404View />} />
    </Routes>
  )
}

export default App
