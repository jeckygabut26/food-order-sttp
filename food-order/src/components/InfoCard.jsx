import { Card, CardContent, Typography } from "@mui/material";

function InfoCard({ title, description, accent = "#1976d2" }) {
  return (
    <Card
      sx={{
        height: "100%",
        borderTop: `4px solid ${accent}`,
        boxShadow: "0 8px 24px rgba(25, 118, 210, 0.12)",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
