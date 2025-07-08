import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Login from "../components/Authen/Login";


const router = createBrowserRouter([
    {path: "/", element: <h1>Welcome to the My Web</h1>},
    {path: "/login", element:<Login/>},
    {
        path: "/admin",
        element: <AdminLayout/>,
        children: [
            {path: "",element: <h1>Dashboard</h1>},
            {path: "users", element: <h1>Users</h1>},
            {path: "courses", element: <h1>Courses</h1>},
        ]
    },
])

export default router;    