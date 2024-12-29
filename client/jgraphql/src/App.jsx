import './App.css'
import { useQuery, useMutation, gql } from '@apollo/client'

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email

function App() {
  const { } = useQuery()
  return <>
    <h1>Users</h1>
    <div></div>
  </>;
}

export default App
