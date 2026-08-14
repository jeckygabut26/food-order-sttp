import { Box, Container, Typography, Paper } from "@mui/material";

function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper sx={{ p: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            About This App
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Aplikasi ini dibuat untuk belajar React dengan MUI, routing, dan conditional rendering.
            Struktur komponen dibuat sederhana dan mudah dikembangkan sesuai kebutuhan.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default AboutPage;
