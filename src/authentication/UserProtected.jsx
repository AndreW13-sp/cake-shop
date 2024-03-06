import { Navigate } from "react-router-dom";

import useAuth from "../store/auth";

// eslint-disable-next-line react/prop-types
function UserProtected({ children }) {
	const user = useAuth((state) => state.user);
	console.log(user);

	if (!user || user?.role !== "authenticated") {
		return <Navigate to="/login" />;
	}

	return children;
}

export default UserProtected;
