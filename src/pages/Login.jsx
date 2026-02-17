import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { USERS, ROLES } from '../data/users';
import { Anchor, Lock, User } from 'lucide-react';

export default function Login() {
    const { login } = useApp();
    const [selectedSpecId, setSelectedSpecId] = useState("");
    const [pin, setPin] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (!selectedSpecId) {
            setError("Please select an officer");
            return;
        }
        const success = login(selectedSpecId, pin);
        if (!success) setError("Invalid PIN code");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#060b14] p-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-900 rounded-full blur-[150px]" />
            </div>

            <div className="w-full max-w-sm z-10">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl mb-6">
                        <span className="text-5xl">⚓</span>
                    </div>
                    <h1 className="text-3xl font-black tracking-[0.2em] text-primary mb-2">CANBAZ NOZZUL PMS</h1>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Planned Maintenance System v3.0</p>
                </div>

                <div className="bg-card/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Select Officer</label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 text-muted-foreground" size={16} />
                                <select
                                    value={selectedSpecId}
                                    onChange={(e) => { setSelectedSpecId(e.target.value); setError(""); }}
                                    className="w-full bg-black/40 border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                >
                                    <option value="">-- Function --</option>
                                    {USERS.map(u => (
                                        <option key={u.id} value={u.id}>{u.name} ({u.rank})</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Security PIN</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 text-muted-foreground" size={16} />
                                <input
                                    type="password"
                                    value={pin}
                                    onChange={(e) => { setPin(e.target.value); setError(""); }}
                                    placeholder="••••"
                                    className="w-full bg-black/40 border border-border rounded-lg py-2.5 pl-10 pr-4 text-sm font-mono tracking-[0.5em] text-center focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-500 text-xs text-center font-medium bg-red-500/10 py-2 rounded-md border border-red-500/20">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#060b14] transition-all transform active:scale-95"
                        >
                            ACCESS SYSTEM
                        </button>
                    </form>
                </div>

                {/* Roles Grid */}
                <div className="mt-8 grid grid-cols-2 gap-3 opacity-60">
                    {USERS.map(u => (
                        <div key={u.id} className="flex items-center gap-3 bg-card/30 rounded p-2 border border-white/5">
                            <span className="text-lg">{u.icon}</span>
                            <div className="overflow-hidden">
                                <div className="text-[10px] font-bold" style={{ color: u.color }}>{u.rank}</div>
                                <div className="text-[8px] text-muted-foreground truncate">{ROLES[u.id].lbl}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
