import React from "react";
import Messenger from "./pages/Messenger";

import { useUser } from "./hooks";

function App() {
  const { user, error, loading } = useUser();

  if (loading) return <h1>Loading...</h1>;
  if (error || !user) return <h1>Error</h1>;

  return <Messenger user={user} />;
}

export default App;
