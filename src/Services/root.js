
import { createBrowserRouter } from "react-router-dom";

import Root from "../Pages/App/root";
import ErrorPage  from "../Pages/App/error-page"

import DataCharacter from "../components/CharacterDetail";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [{ path: "/character/:id", element: <DataCharacter /> }],
      },
      
    ]);
    
    


    export default router