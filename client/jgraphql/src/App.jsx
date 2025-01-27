import './App.css';
import { useQuery, gql } from '@apollo/client';

// gql converts info from strings to syntax notation
const GET_USERS = gql`
  query GetUsers {
    getusers {
      id
      name
      email
    }
  }
`;

function App() {
  const { data, error, loading } = useQuery(GET_USERS);

  if (loading) return <p>Data Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Users</h1>
      <div>
        {data.getusers.map((user) => (
          <div key={user.id}>
            <p>NAME: {user.name}</p>
            <p>EMAIL: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
