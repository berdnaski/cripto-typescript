import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Index";
import { Detail } from "./pages/Detail/Index";
import { NotFound } from "./pages/NotFound/Index";
import { Layout } from "./components/Layout/Index";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/:cripto",
                element: <Detail />
            },

            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])

export { router }