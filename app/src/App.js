import React from "react";
import Messenger from "./pages/Messenger";
import { useUser } from "./hooks";

function App() {
  const { user, loading, error } = useUser();

  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;

  return <Messenger user={user} />;
}

export default App;
