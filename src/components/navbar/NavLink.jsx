import { NavLink as NavLinkReactRouter } from "react-router-dom";


export const NavLink = ({ to, children, ...props }) => {
    return (
        <NavLinkReactRouter 
            {...props}
            className={({isActive}) => isActive ? "options is-active" : "options"} 
            to={to}
        >
            {children}
        </NavLinkReactRouter>
    )
}