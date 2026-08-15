import { AuthProvider } from "./provider/AuthProvider";
import FoodMenu from "./pages/FoodMenu";

function App() {
  return (
    <AuthProvider>
      <FoodMenu />
    </AuthProvider>
  );
}

export default App;
