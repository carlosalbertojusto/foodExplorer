import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { NewMeal } from '../pages/New'
import { Edit } from '../pages/Edit'
import { Details } from '../pages/Details'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/newMeal" element={<NewMeal/>} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  )
}