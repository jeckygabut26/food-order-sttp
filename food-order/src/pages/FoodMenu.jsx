import { useMemo, useState } from "react";
import AppLayout from "../components/AppLayout";
import { useAuth } from "../components/hooks/useAuth";
import { categories, getFilteredFoods, sortOptions } from "./foodMenuData";

const FoodMenu = ({ onNavigate }) => {
  const { isAuthenticated, logout, user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [sortBy, setSortBy] = useState("nama");

  const navItems = isAuthenticated
    ? [
        { label: "Home", page: "home" },
        { label: "Menu", page: "menu" },
        { label: `Profil (${user?.username || "User"})`, page: "profile" },
        { label: "Logout", page: "logout" },
      ]
    : [
        { label: "Home", page: "home" },
        { label: "Menu", page: "menu" },
        { label: "Login", page: "login" },
        { label: "Register", page: "register" },
      ];

  const handleNavAction = (page) => {
    if (page === "logout") {
      logout();
      onNavigate("home");
      return;
    }

    onNavigate(page);
  };

  const filteredFoods = useMemo(
    () =>
      getFilteredFoods({
        searchTerm,
        category: selectedCategory,
        sortBy,
      }),
    [searchTerm, selectedCategory, sortBy]
  );

  return (
    <AppLayout
      title="Menu Makanan"
      actions={navItems.map(({ label, page }) => (
        <button
          key={label}
          type="button"
          onClick={() => handleNavAction(page)}
          style={{
            border: "none",
            background: page === "menu" || page === "logout" ? "#2563eb" : "#e0e7ff",
            color: page === "menu" || page === "logout" ? "white" : "#1e3a8a",
            padding: "10px 14px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "700",
          }}
        >
          {label}
        </button>
      ))}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <p style={{ margin: 0, color: "#f97316", fontWeight: "bold", letterSpacing: "2px" }}>
          MENU MAKANAN
        </p>
        <h1 style={{ margin: "12px 0 8px", color: "#0f172a", fontSize: "36px" }}>
          Pilihan Makanan Favorit
        </h1>
        <p style={{ margin: 0, color: "#475569" }}>
          Rasa enak, harga terjangkau, dan siap diantar cepat.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginBottom: "26px",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          padding: "16px",
        }}
      >
        <div style={{ flex: "1 1 240px", minWidth: "220px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: "#334155", fontWeight: 700 }}>
            Search food
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Cari makanan atau minuman"
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div style={{ flex: "1 1 180px", minWidth: "160px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: "#334155", fontWeight: 700 }}>
            Semua kategori
          </label>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              background: "white",
              boxSizing: "border-box",
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div style={{ flex: "1 1 180px", minWidth: "160px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: "#334155", fontWeight: 700 }}>
            Short by
          </label>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              background: "white",
              boxSizing: "border-box",
            }}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
        <p style={{ margin: 0, color: "#475569", fontWeight: 600 }}>
          Menampilkan {filteredFoods.length} item
        </p>
      </div>

      {filteredFoods.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "32px 20px",
            background: "#fff",
            borderRadius: "16px",
            border: "1px dashed #cbd5e1",
            color: "#475569",
          }}
        >
          Tidak ada menu yang sesuai dengan pencarian Anda.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredFoods.map((food) => (
            <div
              key={food.id}
              style={{
                background: "white",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  background: food.color,
                  height: "120px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "40px",
                }}
              >
                {food.category === "Minuman" ? "🥤" : "🍽️"}
              </div>

              <div style={{ padding: "18px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3 style={{ margin: 0, color: "#0f172a", fontSize: "22px" }}>
                    {food.name}
                  </h3>
                  <span style={{ color: "#f97316", fontWeight: "bold" }}>
                    Rp {food.price.toLocaleString("id-ID")}
                  </span>
                </div>

                <p style={{ margin: "0 0 10px", color: "#64748b", fontSize: "12px", fontWeight: 700 }}>
                  {food.category}
                </p>

                <p style={{ margin: "0 0 16px", color: "#475569", lineHeight: 1.6 }}>
                  {food.desc}
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "none",
                    background: "#2563eb",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AppLayout>
  );
};

export default FoodMenu;
