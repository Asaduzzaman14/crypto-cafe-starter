import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    Link,
    useResolvedPath,
    useMatch,
} from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    // console.log(...props);

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link style={{ color: match ? '#1d7ec9' : 'black', textDecoration: match ? "underline" : "none" }} to={to} {...props}>
                {children}
            </Link>

        </div>
    );
}

export default CustomLink;