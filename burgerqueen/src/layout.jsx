import { Link, Outlet } from "react-router-dom";

export function Layout (){
    return (
        <main>
            <nav>
                <Link to="/">Login</Link> | {" "}                
                <Link to="/waitersView">Waiters</Link> | {" "}
                <Link to="/chefView">Chef</Link> | {" "}
                <Link to="/adminView">Admin</Link> | {" "}
            </nav>
            <section>
                <Outlet />
            </section>
        </main>
    );
}