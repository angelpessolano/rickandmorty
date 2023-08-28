import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Pages/App/root";
import ErrorPage from "./Pages/App/error-page";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { StarredCharacterProvider } from './context';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

client

  .query({

    query: gql`
    
    query {
      characters(page: 1
        , filter: { name: "morty" }) {
        info {
          count
        }
        results {
          name
          status
        }
      }
      
    }
    

    `,

  })

  .then((result) => console.log(result));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
  },
  {path:"/test"}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
 
  <React.StrictMode>
    <StarredCharacterProvider>
    <ApolloProvider client={client}>
    <RouterProvider router={router} />
    </ApolloProvider>
    </StarredCharacterProvider>
  </React.StrictMode>
);
