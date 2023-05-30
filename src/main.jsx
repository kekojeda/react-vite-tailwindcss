import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App";
import { Layout } from "./Components/Layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Layout>
    <App />
  </Layout>
);
