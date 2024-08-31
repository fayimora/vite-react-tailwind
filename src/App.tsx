import React from "react";
import "./App.css";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <h5>Wallet</h5>
      <div className="flex items-center space-x-4">
        <a href="/#">Transactions</a>
        <a href="/#">Subscriptions</a>
        <a href="/#">Settings</a>
        <a href="/#">Help</a>
      </div>
      <div className="flex items-center space-x-1 space-x-1">
        <p>aliceeee.cns</p>
        <a href="/#">Logout</a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container max-w-full bg-blue-900">
      <Header />
    </div>
  );
}

export default App;
