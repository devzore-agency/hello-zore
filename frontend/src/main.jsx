import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "./index.css";

import AuthContextProvider from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </HelmetProvider>
);