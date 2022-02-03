import React from "react";
import UserResults from "../components/users/UserResults";

function Home() {
  return (
    <>
      {/* SEARCH COMPONENT */}
      <h1 className="text-6xl">Welcome</h1>
      <UserResults />
    </>
  );
}

export default Home;
