import React from "react";
import ReactDOM from "react-dom/client";
import App from "./mySolution_app";
import "./theme.css";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const client = new QueryClient();

root.render(
  <React.StrictMode>
    <div className="yellow-border" />
    <div className="wrapper">
      <div className="container-outer">
        <div className="container">
          <QueryClientProvider client={client}>
            <App />
          </QueryClientProvider>
        </div>
      </div>
    </div>
  </React.StrictMode>
);
