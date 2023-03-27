import { useSession } from "react-session";

function App() {
  const { session } = useSession();

  return <div>{session.email ? <Dashboard /> : <Login />}</div>;
}
export default App;
