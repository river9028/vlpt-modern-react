import React from "react";
import User from "./User";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const user = {
    id: 1,
    username: "velopert",
  };
  return (
    <ErrorBoundary>
      <User /* user={user} */ />
    </ErrorBoundary>
  );
}

export default App;
