const AppLayout = ({ title, children, actions }) => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 45%, #eff6ff 100%)",
      fontFamily: "Arial, sans-serif",
      color: "#0f172a",
      padding: "32px 20px",
      boxSizing: "border-box",
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
          padding: "18px 22px",
          borderRadius: "18px",
          background: "rgba(255, 255, 255, 0.7)",
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.12)",
          backdropFilter: "blur(8px)",
        }}>
          <h1 style={{
            margin: 0,
            fontSize: "1.8rem",
            color: "#1d4ed8",
          }}>
            {title}
          </h1>

          {actions && (
            <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
              {actions}
            </div>
          )}
        </header>

        <main style={{
          background: "rgba(255,255,255,0.5)",
          borderRadius: "20px",
          padding: "24px",
          boxShadow: "0 12px 35px rgba(59, 130, 246, 0.1)",
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
