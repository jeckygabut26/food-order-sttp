import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ConditionalDemo from "./pages/ConditionalDemo";

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/conditional">
              Conditional
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/conditional" element={<ConditionalDemo />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
