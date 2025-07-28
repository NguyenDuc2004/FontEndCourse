import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Login from "../components/Authen/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";


const router = createBrowserRouter([
    { path: "/", element: <h1>Welcome to the My Web</h1> },
    {
        path: "/login",
        element: (
            <ProtectedRoute requireAuth={false}>
                <Login />
            </ProtectedRoute>
        )
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: "", element: <h1>Dashboard</h1> },
            { path: "users", element: <h1>Users</h1> },
            { path: "courses", element: <h1>Courses</h1> },
        ]
    },
    {
        path: "*",
        element: (<NotFound />)
    }
])

export default router;    