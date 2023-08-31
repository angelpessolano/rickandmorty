import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";
import { StarredCharacterProvider } from "./context";

import client from "./Services";
import router from "./Services/root";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StarredCharacterProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </StarredCharacterProvider>
  </React.StrictMode>
);
