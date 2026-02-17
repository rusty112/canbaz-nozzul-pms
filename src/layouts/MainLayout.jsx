import Sidebar from '../components/Sidebar';
import { useApp } from '../context/AppContext';
import Login from '../pages/Login';
import { Menu } from 'lucide-react';

export default function MainLayout({ children }) {
    const { user } = useApp();

    if (!user) {
        return <Login />;
    }

    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden font-sans antialiased">
            <Sidebar />
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* Mobile Header (Hidden on desktop ideally, or just top bar) */}
                {/* We can actullay put a TopBar here if we want, or just let the pages have headers */}

                <div className="flex-1 overflow-auto relative custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}
