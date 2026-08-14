import { Box, Container, Grid, Typography } from "@mui/material";
import InfoCard from "../components/InfoCard";

function HomePage() {
  const cards = [
    {
      title: "Responsive",
      description: "Layout yang beradaptasi otomatis di desktop, tablet, dan mobile.",
      accent: "#1976d2",
    },
    {
      title: "Reusable Component",
      description: "Komponen dibuat modular agar mudah dipakai kembali di beberapa halaman.",
      accent: "#4caf50",
    },
    {
      title: "Conditional Rendering",
      description: "Menampilkan UI berdasarkan kondisi tertentu, misalnya login atau status.",
      accent: "#ff9800",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          React Project Setup
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Simple and modern project with MUI, routing, and conditional rendering.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.title}>
            <InfoCard
              title={card.title}
              description={card.description}
              accent={card.accent}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
