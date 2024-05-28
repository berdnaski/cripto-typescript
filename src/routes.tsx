import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Index";
import { Detail } from "./pages/Detail/Index";
import { NotFound } from "./pages/NotFound/Index";

const router = createBrowserRouter([
    {
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