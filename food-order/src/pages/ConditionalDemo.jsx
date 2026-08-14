import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";

function ConditionalDemo() {
  const [isLogin, setIsLogin] = useState(true);
  const [status, setStatus] = useState("success");

  const STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  };

  const renderIfElse = () => {
    if (isLogin) {
      return <Typography color="success.main">Selamat datang, user!</Typography>;
    }
    return <Typography color="text.secondary">Silakan login terlebih dahulu.</Typography>;
  };

  const renderSwitch = () => {
    switch (status) {
      case "success":
        return <Alert severity="success">Operasi berhasil.</Alert>;
      case "error":
        return <Alert severity="error">Operasi gagal.</Alert>;
      case "loading":
        return <Alert severity="info">Sedang diproses...</Alert>;
      default:
        return <Alert severity="warning">Status tidak diketahui.</Alert>;
    }
  };

  const renderEnum = () => {
    const map = {
      [STATUS.LOADING]: <Alert severity="info">Loading...</Alert>,
      [STATUS.SUCCESS]: <Alert severity="success">Berhasil</Alert>,
      [STATUS.ERROR]: <Alert severity="error">Terjadi kesalahan</Alert>,
    };

    return map[status] || <Alert severity="warning">Status tidak ada</Alert>;
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Conditional Rendering Demo
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">1. If / Else</Typography>
            {renderIfElse()}
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">2. Ternary</Typography>
            <Typography>
              {isLogin ? "Sudah login" : "Belum login"}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">3. Logical &&</Typography>
            {isLogin && <Typography>Anda sedang login.</Typography>}
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">4. Switch Case</Typography>
            {renderSwitch()}
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() =>
                setStatus((prev) =>
                  prev === "success" ? "error" : prev === "error" ? "loading" : "success"
                )
              }
            >
              Ubah Status
            </Button>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6">5. Conditional with Enums</Typography>
            {renderEnum()}
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Typography variant="h6">6. Higher-Order Component</Typography>
            <ProtectedPage />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

function withAuth(Component) {
  return function AuthComponent(props) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return <Alert severity="warning">Anda harus login dulu.</Alert>;
    }

    return <Component {...props} />;
  };
}

function DashboardContent() {
  return <Alert severity="success">Ini halaman dashboard yang terlindungi.</Alert>;
}

const ProtectedPage = withAuth(DashboardContent);

export default ConditionalDemo;
