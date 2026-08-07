import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="app-root">
      <Login
        onSubmit={(creds) => {
          console.log("Login submitted:", creds);
          alert(`Logged in as ${creds.username}`);
        }}
      />
    </div>
  );
}

export default App;