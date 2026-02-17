import { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
    Ship, Anchor, Settings, Shield, ChevronRight, ChevronDown,
    LogOut, LayoutDashboard, User
} from 'lucide-react';
import clsx from 'clsx';

export default function Sidebar() {
    const {
        user, role, vid, setVid, ships,
        activePage, setActivePage,
        engineTree, deckTree,
        selectedItem, setSelectedItem, logout
    } = useApp();

    const [expandedEngine, setExpandedEngine] = useState(false);
    const [expandedDeck, setExpandedDeck] = useState(false);
    const [expandedGroups, setExpandedGroups] = useState({});

    if (!user) return null;

    const toggleGroup = (id) => {
        setExpandedGroups(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Filter logic
    const canSeeEngine = (groupId) => {
        if (user.id === "master" || user.id === "ce") return true;
        if (!role.eng) return false;
        return role.eOnly ? role.eOnly.includes(groupId) : true;
    };

    const canSeeDeck = (groupId) => {
        if (user.id === "master") return true;
        if (!role.dek) return false;
        return role.dkOnly ? role.dkOnly.includes(groupId) : true;
    };

    const visibleEngine = engineTree.filter(g => canSeeEngine(g.id));
    const visibleDeck = deckTree.filter(g => canSeeDeck(g.id));

    return (
        <aside className="w-64 glass border-r border-white/10 flex flex-col h-screen text-sm select-none relative z-50">
            {/* Header / User Info */}
            <div className="p-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shadow-lg border border-white/20"
                        style={{ backgroundColor: `${user.color}20`, borderColor: user.color }}
                    >
                        {user.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="font-bold truncate" style={{ color: user.color }}>{user.rank}</div>
                        <div className="text-xs text-blue-200/60 truncate">{role.lbl}</div>
                    </div>
                    <button onClick={logout} className="text-blue-200/50 hover:text-red-400 transition-colors">
                        <LogOut size={16} />
                    </button>
                </div>

                {/* Vessel Selector */}
                <div className="relative group">
                    <Ship size={14} className="absolute left-2.5 top-2.5 text-primary" />
                    <select
                        value={vid}
                        onChange={(e) => setVid(e.target.value)}
                        className="w-full bg-black/30 border border-white/10 rounded-md py-1.5 pl-8 pr-2 text-xs font-semibold text-blue-100 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all hover:bg-black/40"
                    >
                        {ships.map(s => <option key={s.id} value={s.id} className="bg-slate-900 text-white">{s.n}</option>)}
                    </select>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-2 custom-scrollbar">
                <NavItem
                    icon={<LayoutDashboard size={16} />}
                    label="Dashboard"
                    isActive={activePage === "dash"}
                    onClick={() => { setActivePage("dash"); setSelectedItem(null); }}
                />

                {/* ENGINE TREE */}
                {visibleEngine.length > 0 && (
                    <div className="mt-4">
                        <div
                            className={clsx(
                                "px-4 py-2 text-xs font-bold text-blue-200/50 flex items-center cursor-pointer hover:text-white transition-colors",
                                expandedEngine && "text-primary"
                            )}
                            onClick={() => setExpandedEngine(!expandedEngine)}
                        >
                            {expandedEngine ? <ChevronDown size={14} className="mr-2" /> : <ChevronRight size={14} className="mr-2" />}
                            ENGINE DEPARTMENT
                        </div>

                        {expandedEngine && (
                            <div className="pl-2">
                                {visibleEngine.map(group => (
                                    <div key={group.id} className="mb-1">
                                        <div
                                            className="px-3 py-1.5 flex items-center text-xs text-blue-200/60 hover:text-white cursor-pointer transition-colors"
                                            onClick={() => toggleGroup(group.id)}
                                        >
                                            {expandedGroups[group.id] ? <ChevronDown size={12} className="mr-2 opacity-70" /> : <ChevronRight size={12} className="mr-2 opacity-70" />}
                                            <span className="mr-2 opacity-70">{group.icon}</span>
                                            {group.label}
                                        </div>

                                        {expandedGroups[group.id] && (
                                            <div className="pl-8 border-l border-white/10 ml-5 space-y-0.5">
                                                {group.ch.map(item => (
                                                    <div
                                                        key={item.id}
                                                        onClick={() => { setSelectedItem(item); setActivePage("detail"); }}
                                                        className={clsx(
                                                            "px-2 py-1.5 rounded-sm cursor-pointer text-xs transition-colors truncate",
                                                            (selectedItem?.id === item.id && activePage === "detail")
                                                                ? "bg-primary/20 text-primary font-medium border border-primary/20"
                                                                : "text-blue-200/50 hover:bg-white/5 hover:text-white"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* DECK TREE */}
                {visibleDeck.length > 0 && (
                    <div className="mt-2">
                        <div
                            className={clsx(
                                "px-4 py-2 text-xs font-bold text-blue-200/50 flex items-center cursor-pointer hover:text-white transition-colors",
                                expandedDeck && "text-primary"
                            )}
                            onClick={() => setExpandedDeck(!expandedDeck)}
                        >
                            {expandedDeck ? <ChevronDown size={14} className="mr-2" /> : <ChevronRight size={14} className="mr-2" />}
                            DECK DEPARTMENT
                        </div>

                        {expandedDeck && (
                            <div className="pl-2">
                                {visibleDeck.map(group => (
                                    <div key={group.id} className="mb-1">
                                        <div
                                            className="px-3 py-1.5 flex items-center text-xs text-blue-200/60 hover:text-white cursor-pointer transition-colors"
                                            onClick={() => toggleGroup(group.id)}
                                        >
                                            {expandedGroups[group.id] ? <ChevronDown size={12} className="mr-2 opacity-70" /> : <ChevronRight size={12} className="mr-2 opacity-70" />}
                                            <span className="mr-2 opacity-70">{group.icon}</span>
                                            {group.label}
                                        </div>

                                        {expandedGroups[group.id] && (
                                            <div className="pl-8 border-l border-white/10 ml-5 space-y-0.5">
                                                {group.ch.map(item => (
                                                    <div
                                                        key={item.id}
                                                        onClick={() => { setSelectedItem(item); setActivePage("detail"); }}
                                                        className={clsx(
                                                            "px-2 py-1.5 rounded-sm cursor-pointer text-xs transition-colors truncate",
                                                            (selectedItem?.id === item.id && activePage === "detail")
                                                                ? "bg-primary/20 text-primary font-medium border border-primary/20"
                                                                : "text-blue-200/50 hover:bg-white/5 hover:text-white"
                                                        )}
                                                    >
                                                        {item.label}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* RightShip */}
                {(user.id === "master" || user.id === "ce") && (
                    <NavItem
                        icon={<Shield size={16} />}
                        label="RightShip"
                        isActive={activePage === "rs"}
                        onClick={() => { setActivePage("rs"); setSelectedItem(null); }}
                        className="mt-4"
                    />
                )}

            </div>

            {/* Footer */}
            <div className="p-3 text-[10px] text-blue-200/40 border-t border-white/5 text-center bg-black/20 backdrop-blur-sm">
                CANBAZ NOZZUL PMS v3.0 <br />
                IMO 9521899
            </div>
        </aside>
    );
}

function NavItem({ icon, label, isActive, onClick, className }) {
    return (
        <div
            onClick={onClick}
            className={clsx(
                "mx-2 px-3 py-2 rounded-md flex items-center gap-3 cursor-pointer transition-all",
                isActive
                    ? "bg-primary text-black font-bold shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                    : "text-blue-200/60 hover:bg-white/10 hover:text-white",
                className
            )}
        >
            {icon}
            <span>{label}</span>
        </div>
    );
}
