import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/Layout";
import ProtectedRouter from "./components/hoc/ProtectedRouter";
import LoginPage from "./components/pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "*",
          element: <Navigate to={"/"} />,
        },
        {
          element: <ProtectedRouter />,
          children: [
            {
              path: "/login",
              element: <LoginPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
