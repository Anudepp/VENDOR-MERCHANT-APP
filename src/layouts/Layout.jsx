// src/layouts/Layout.jsx

import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>Navbar</header>
      <main>
        {children}
      </main>
      <footer style={{ padding: "1rem", background: "#eee" }}>Footer</footer>
    </div>
  );
};

export default Layout;
