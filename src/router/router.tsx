import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import ClientLayout from "../layout/ClientLayout";
import Login from "../components/Authen/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import QuanLyNguoiDung from "../pages/admin/quan-ly-nguoi-dung/QuanLyNguoiDung";
import DashBoard from "../pages/admin/dash-board/DashBoard";
import Home from "../pages/client/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: (<ClientLayout />),
        children: [
            {
                path: "",
                element: (<Home />)
            }
        ]
    },
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
            // <ProtectedRoute>
            //     <AdminLayout />
            // </ProtectedRoute>

            <AdminLayout />
        ),
        children: [
            { path: "", element: (<DashBoard />) },
            { path: "users", element: (<QuanLyNguoiDung />) },
            { path: "courses", element: <h1>Courses</h1> },
            { path: "students", element: <h1>Students</h1> },
            { path: "roles", element: <h1>Roles</h1> },
            { path: "orders", element: <h1>Orders</h1> },
        ]
    },
    {
        path: "*",
        element: (<NotFound />)
    }
])

export default router;    