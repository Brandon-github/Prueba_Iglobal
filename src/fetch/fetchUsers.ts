import axios from 'axios'
import { User } from '../interfaces/User'

export const getUsers = async (count: number): Promise<User[]> => {
  const response = await axios.get(`https://randomuser.me/api/?results=${count}`)
  const data = response.data.results;
  return data
}

