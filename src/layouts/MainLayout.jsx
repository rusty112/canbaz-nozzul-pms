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
        <div className="flex h-screen text-foreground overflow-hidden font-sans antialiased relative">
            {/* Overlay for readability if needed, or just let gradient shine */}
            <Sidebar />
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
                <div className="flex-1 overflow-auto relative custom-scrollbar">
                    {children}
                </div>
            </main>
        </div>
    );
}
