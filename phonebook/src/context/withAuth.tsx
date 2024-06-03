import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const withAuth = (WrappedComponent: React.FC) => {
    const ComponentWithAuth: React.FC = (props) => {
        const { isAuthenticated } = useAuth();
        const navigate = useNavigate();

        React.useEffect(() => {
            if (!isAuthenticated) {
                navigate("/login");
            }
        }, [isAuthenticated, navigate]);

        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };

    return ComponentWithAuth;
};

export default withAuth;
