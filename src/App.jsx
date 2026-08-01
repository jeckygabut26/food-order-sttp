import { useState } from "react";
import AppButton from "./components/AppButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* MENGGUNAKAN CUSTOM COMPONENT */}
      <AppButton onClick={() => setCount((count) => count + 1)}>
        Tambah 1
      </AppButton>
      <AppButton onClick={() => setCount((count) => count + 2)}>
        Tambah 2
      </AppButton>

      {/* HASIL */}
      <div>Hasil: {count}</div>
    </div>
  );
}

export default App;