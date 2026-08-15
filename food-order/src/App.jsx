import { useState } from "react";
import { AuthProvider } from "./provider/AuthProvider";
import { ThemeProvider } from "./provider/ThemeProvider";
import MainMenu from "./pages/MainMenu";
import Login from "./pages/login";
import Register from "./pages/register";
import FoodMenu from "./pages/FoodMenu";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onNavigate={setCurrentPage} />;
      case "register":
        return <Register onNavigate={setCurrentPage} />;
      case "menu":
        return <FoodMenu onNavigate={setCurrentPage} />;
      case "home":
      default:
        return <MainMenu onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <AuthProvider>{renderPage()}</AuthProvider>
    </ThemeProvider>
  );
}

export default App;
