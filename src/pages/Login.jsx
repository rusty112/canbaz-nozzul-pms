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
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
            </div>

            <div className="w-full max-w-md z-10">
                <div className="text-center mb-10 relative">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl glass mb-6 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">⚓</span>
                    </div>
                    <h1 className="text-4xl font-black tracking-[0.2em] text-white mb-2 drop-shadow-lg">CANBAZ NOZZUL</h1>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
                        <p className="text-xs text-blue-200/70 uppercase tracking-[0.3em] font-medium">PMS System v3.0</p>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
                    </div>
                </div>

                <div className="glass rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                    {/* Glossy shine effect */}
                    <div className="absolute -top-[150%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-b from-white/5 to-transparent rotate-45 pointer-events-none" />

                    <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-blue-200/70 uppercase tracking-wider ml-1">Select Officer</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-3.5 text-blue-200/50 group-focus-within:text-primary transition-colors" size={18} />
                                <select
                                    value={selectedSpecId}
                                    onChange={(e) => { setSelectedSpecId(e.target.value); setError(""); }}
                                    className="w-full glass-input rounded-xl py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-primary/50"
                                >
                                    <option value="" className="bg-slate-900 text-gray-400">-- Select Identity --</option>
                                    {USERS.map(u => (
                                        <option key={u.id} value={u.id} className="bg-slate-900 text-white">{u.name} ({u.rank})</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-blue-200/70 uppercase tracking-wider ml-1">Security PIN</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-3.5 text-blue-200/50 group-focus-within:text-primary transition-colors" size={18} />
                                <input
                                    type="password"
                                    value={pin}
                                    onChange={(e) => { setPin(e.target.value); setError(""); }}
                                    placeholder="••••"
                                    className="w-full glass-input rounded-xl py-3.5 pl-12 pr-4 text-sm font-mono tracking-[0.5em] text-center text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-primary/50"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-400 text-xs text-center font-medium bg-red-500/10 py-2.5 rounded-lg border border-red-500/20 backdrop-blur-sm animate-in fade-in slide-in-from-top-1">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-primary text-black font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all transform active:scale-[0.98] mt-2 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                            ACCESS SYSTEM
                        </button>
                    </form>
                </div>

                {/* Roles Grid */}
                <div className="mt-8 grid grid-cols-2 gap-3 opacity-80">
                    {USERS.map(u => (
                        <div key={u.id} className="flex items-center gap-3 glass-card rounded-lg p-3 hover:bg-white/5 transition-colors cursor-help group">
                            <span className="text-lg group-hover:scale-110 transition-transform">{u.icon}</span>
                            <div className="overflow-hidden">
                                <div className="text-[10px] font-bold" style={{ color: u.color }}>{u.rank}</div>
                                <div className="text-[8px] text-blue-200/50 truncate group-hover:text-blue-200 transition-colors">{ROLES[u.id].lbl}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
