
import { useContext } from 'react'
import UserContext from "../components/UserContext"

const AdminLayout = () => {
    const {admin}=useContext(UserContext);
    return (
        <div>
            <header>
                <h1>Admin Dashboard</h1>
            </header>

            <nav>
                <a href="/user">Home</a>
                <a href="/user/profile">Profile</a>
                <a href="/user/settings">Settings</a>
                <a href="/">Logout</a>
            </nav>


            <main>
                <h2>Welcome!! {admin.name} {admin.role}</h2>
                <p>This is your Admin dashboard.</p>

                <section>
                    <h3>Dashboard</h3>
                    <p>You can manage your account and view yours and others information here.</p>
                </section>
            </main>

            
            <footer>
                <p>My user webpage</p>
            </footer>
        </div>
    );
};

export default AdminLayout;