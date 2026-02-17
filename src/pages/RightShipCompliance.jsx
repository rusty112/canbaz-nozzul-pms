import { useApp } from '../context/AppContext';
import { Check, ShieldCheck } from 'lucide-react';

export default function RightShipCompliance() {
    const { rightShipList } = useApp();

    // Group by category
    const categories = [...new Set(rightShipList.map(r => r.cat))];
    const complianceScore = 98;

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <header className="mb-8 bg-card border border-border rounded-xl p-6 flex items-center justify-between shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight mb-1">RightShip RISQ Compliance</h1>
                    <p className="text-muted-foreground text-sm">Automated checklist verification for vetting inspections.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right">
                        <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Score</div>
                        <div className="text-3xl font-black text-emerald-500">{complianceScore}%</div>
                    </div>
                    <ShieldCheck size={48} className="text-emerald-500 opacity-20" />
                </div>
            </header>

            <div className="space-y-8">
                {categories.map(cat => (
                    <div key={cat}>
                        <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-3 pl-1 border-l-2 border-primary">
                            {cat}
                        </h3>
                        <div className="bg-card border border-border rounded-lg overflow-hidden divide-y divide-border">
                            {rightShipList.filter(r => r.cat === cat).map((item, idx) => (
                                <div key={item.id} className="p-4 flex items-start gap-4 hover:bg-accent/30 transition-colors">
                                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium leading-normal">
                                            {item.t}
                                            {item.cr && (
                                                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                                                    CRITICAL
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 rounded bg-secondary text-[10px] font-mono text-muted-foreground">
                                        REF: {item.id.toUpperCase()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
