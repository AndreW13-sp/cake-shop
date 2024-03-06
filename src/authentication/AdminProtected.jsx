import { Navigate } from "react-router-dom";

import useAuth from "../store/auth";

// eslint-disable-next-line react/prop-types
function AdminAuth({ children }) {
   const { user } = useAuth((state) => ({ user: state.user }));

   if (!user || (user?.role === "authenticated" && user?.user_metadata?.role !== "ADMIN")) {
      return <Navigate to="/admin/login" />;
   }

   return children;
}

export default AdminAuth;
