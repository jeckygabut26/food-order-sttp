import React from "react";

function ConditionalExample() {
  const isLogin = true;
  const status = "success";

  const STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>1. If / Else</h2>
      {(() => {
        if (isLogin) {
          return <p>Selamat datang, user!</p>;
        } else {
          return <p>Silakan login terlebih dahulu.</p>;
        }
      })()}

      <h2>2. Ternary Operation</h2>
      <p>{isLogin ? "Sudah login" : "Belum login"}</p>

      <h2>3. Inline IF dengan Logical &&</h2>
      {isLogin && <p>Anda sedang login.</p>}

      <h2>4. Switch Case</h2>
      {(() => {
        switch (status) {
          case "success":
            return <p>Operasi berhasil.</p>;
          case "error":
            return <p>Operasi gagal.</p>;
          case "loading":
            return <p>Sedang diproses...</p>;
          default:
            return <p>Status tidak diketahui.</p>;
        }
      })()}

      <h2>5. Conditional Rendering dengan Enums</h2>
      {(() => {
        const renderStatus = {
          [STATUS.LOADING]: <p>Sedang loading...</p>,
          [STATUS.SUCCESS]: <p>Berhasil</p>,
          [STATUS.ERROR]: <p>Terjadi kesalahan</p>,
        };

        return renderStatus[status] || <p>Status tidak ada</p>;
      })()}

      <h2>6. Higher-Order Components</h2>
      <ProtectedDashboard />
    </div>
  );
}

function withAuth(Component) {
  return function WrappedComponent(props) {
    const isAuthenticated = true;

    if (!isAuthenticated) {
      return <p>Anda harus login dulu.</p>;
    }

    return <Component {...props} />;
  };
}

function Dashboard() {
  return <p>Ini halaman dashboard.</p>;
}

const ProtectedDashboard = withAuth(Dashboard);

export default ConditionalExample;
