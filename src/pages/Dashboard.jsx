import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Activity, Anchor, Shield, AlertTriangle, CheckCircle, Ship, AlertOctagon } from 'lucide-react';
import clsx from 'clsx';
import { parse, isBefore } from 'date-fns';

export default function Dashboard() {
    const { user, role, engineTree, deckTree, ships, vid, complianceData } = useApp();

    const [engineStatus, setEngineStatus] = useState("STOPPED");
    const currentShip = ships.find(s => s.id === vid) || ships[0];

    // Calculate Stats
    const engineTasks = engineTree.reduce((acc, g) => acc + g.ch.length, 0);
    const deckTasks = deckTree.reduce((acc, g) => acc + g.ch.length, 0);

    // Calculate Overdue Items (Real Logic)
    let overdueCount = 0;
    let criticalItems = 0;

    if (complianceData) {
        Object.values(complianceData).forEach(data => {
            if (data && data.nextDue) {
                // Parse date "dd MMM yyyy"
                const dueDate = parse(data.nextDue, 'dd MMM yyyy', new Date());
                const now = new Date();

                // Check if overdue
                if (isBefore(dueDate, now)) {
                    overdueCount++;
                    criticalItems++;
                }
            }
        });
    }

    // Determine Status Colors
    const isOverdue = overdueCount > 0;
    const statusColor = isOverdue ? 'bg-red-500/10 border-red-500/50 text-red-500' : 'bg-emerald-500/10 border-emerald-500/50 text-emerald-500';
    const statusIcon = isOverdue ? <AlertOctagon size={32} /> : <CheckCircle size={32} />;
    const statusTitle = isOverdue ? 'Action Required' : 'All Systems Nominal';
    const statusDesc = isOverdue ? `${overdueCount} items require immediate attention.` : 'No overdue maintenance items pending.';

    return (
        <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-500">
            {/* Header */}
            <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight mb-2 flex items-center gap-3 text-white drop-shadow-md">
                        Dashboard
                        {isOverdue && <span className="text-xs bg-red-500/80 backdrop-blur-sm text-white px-2 py-0.5 rounded-full animate-pulse border border-red-400/50">ATTENTION</span>}
                    </h1>
                    <p className="text-blue-100/70">
                        Welcome back, <span className="text-primary font-bold">{user.rank}</span>.
                        Vessel status for <span className="text-white font-semibold">M/V {currentShip.n}</span>.
                        <span className="block text-xs mt-1 opacity-70">IMO: {currentShip.id === 'v1' ? '9521899' : '9112222'}</span>
                    </p>
                </div>
                <div className="text-right glass p-3 rounded-lg">
                    <div className="text-xs text-blue-200/60 uppercase font-bold tracking-wider mb-1">System Date</div>
                    <div className="text-xl font-mono text-primary font-bold">
                        {new Date().toLocaleDateString("en-GB", { day: '2-digit', month: 'short', year: 'numeric' })}
                    </div>
                </div>
            </header>

            {/* QUICK STATUS BANNER - New Design Request */}
            {/* QUICK STATUS BANNER - New Design Request */}
            <div className={`mb-8 p-6 rounded-xl border flex items-center justify-between shadow-lg transition-all backdrop-blur-md ${isOverdue ? 'bg-red-500/10 border-red-500/30 text-red-100' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-100'}`}>
                <div className="flex items-center gap-5">
                    <div className={clsx("p-4 rounded-full border shadow-inner", isOverdue ? "bg-red-500/20 border-red-500/30 text-red-500" : "bg-emerald-500/20 border-emerald-500/30 text-emerald-500")}>
                        {statusIcon}
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-white">{statusTitle}</h2>
                        <p className="font-medium opacity-80">{statusDesc}</p>
                    </div>
                </div>
                <div className="text-right hidden sm:block">
                    <div className="text-xs uppercase font-bold tracking-wider opacity-70 mb-1">Maintenance Status</div>
                    <div className="text-3xl font-black">{overdueCount} <span className="text-base font-normal opacity-70">Overdue</span></div>
                </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard
                    icon={<Activity size={24} />}
                    label="Engine Components"
                    value={engineTasks}
                    sub="Monitored Items"
                    color="text-blue-500"
                    trend="+2 this week"
                />
                <StatCard
                    icon={<Anchor size={24} />}
                    label="Deck Systems"
                    value={deckTasks}
                    sub="Maintenance Groups"
                    color="text-emerald-500"
                    trend="All verified"
                />
                <StatCard
                    icon={<Shield size={24} />}
                    label="RightShip Compliance"
                    value="98%"
                    sub="Very Good"
                    color="text-primary"
                    trend="Top Tier"
                />
            </div>

            {/* Bottom Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Responsibilities */}
                <div className="glass rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                        <span className="w-1 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                        Responsibilities
                    </h3>
                    <div className="space-y-4">
                        <p className="text-sm text-blue-100/70">
                            You are logged in with <strong style={{ color: user.color }}>{role.lbl}</strong> privileges.
                        </p>
                        <div className="bg-black/20 rounded-lg p-4 text-xs space-y-2 border border-white/5 text-blue-200/60">
                            <p>• Navigate using the sidebar to access department specific maintenance trees.</p>
                            <p>• Engine data simulates running hours and component status.</p>
                            <p>• Deck data follows GV-05-A standard checklists.</p>
                            {role.rs && <p>• RightShip section is available for compliance verification.</p>}
                        </div>
                    </div>
                </div>

                {/* Vessel Status Details */}
                <div className="glass rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                        <span className="w-1 h-6 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        Vessel Operational Status
                    </h3>
                    <div className="space-y-4">
                        {/* Interactive Main Engine Status */}
                        <div className="flex justify-between items-center p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                            <span className="text-sm font-medium text-blue-200/70">Main Engine Status</span>
                            <button
                                onClick={() => setEngineStatus(prev => prev === "STOPPED" ? "RUNNING" : "STOPPED")}
                                className={clsx("text-sm font-bold font-mono px-3 py-1 rounded transition-all outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-black focus:ring-white/20",
                                    engineStatus === "RUNNING"
                                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                        : "bg-red-500/20 text-red-500 border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.3)] animate-pulse"
                                )}
                            >
                                {engineStatus}
                            </button>
                        </div>

                        <StatusRow label="Next Port" value="Istanbul, TR" status="white" />
                        <StatusRow label="ETA" value="24 Feb 2026 14:00" status="white" />
                        <StatusRow label="PMS Certification" value="Valid until Dec 2026" status="good" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, sub, color, trend }) {
    return (
        <div className="glass-card rounded-xl p-6 flex flex-col items-center text-center hover:border-primary/50 transition-all group cursor-default relative overflow-hidden">
            <div className={`p-4 rounded-full bg-white/5 mb-4 ${color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                {icon}
            </div>
            <div className="text-3xl font-black mb-1 text-white">{value}</div>
            <div className="text-sm font-bold text-blue-100 mb-1">{label}</div>
            <div className="text-xs text-blue-200/50 uppercase tracking-wide mb-3">{sub}</div>

            <div className="w-full h-px bg-white/10 mb-3" />
            <div className="text-[10px] font-medium text-blue-200/60 flex items-center gap-1 group-hover:text-primary transition-colors">
                {trend}
            </div>
        </div>
    )
}

function StatusRow({ label, value, status }) {
    return (
        <div className="flex justify-between items-center p-3 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
            <span className="text-sm font-medium text-blue-200/70">{label}</span>
            <span className={clsx("text-sm font-bold font-mono",
                status === 'good' && "text-emerald-400 drop-shadow-sm",
                status === 'bad' && "text-red-400 drop-shadow-sm",
                status === 'white' && "text-white"
            )}>{value}</span>
        </div>
    )
}
