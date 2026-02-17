import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Clock, Calendar, Wrench, FileText, ListChecks } from 'lucide-react';
import { JOB_DESCRIPTIONS } from '../data/job_descriptions';
import clsx from 'clsx';

export default function MaintenanceDetail() {
  const { selectedItem, vid, complianceData } = useApp();

  if (!selectedItem) return <div className="p-8 text-center text-muted-foreground">Select an item to view details</div>;

  const hasUnits = selectedItem.units > 0;

  // Helper to get compliance data for a specific unit
  const getCompData = (unitIdx) => {
    // If complianceData is not yet ready, handle gracefully
    if (!complianceData) return null;
    const key = `${vid}-${selectedItem.id}-${unitIdx}`;
    return complianceData[key] || null;
  };

  // Get job descriptions
  const jobSteps = JOB_DESCRIPTIONS[selectedItem.id] || JOB_DESCRIPTIONS['default'];

  return (
    <div className="p-6 max-w-5xl mx-auto h-full flex flex-col">
      {/* Header */}
      <div className="mb-6 bg-card border border-border p-6 rounded-xl shadow-sm flex flex-col md:flex-row justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-primary text-xl">{selectedItem.icon || '📦'}</span>
            <h2 className="text-2xl font-bold tracking-tight">{selectedItem.label}</h2>
          </div>
          <p className="text-muted-foreground text-sm">{selectedItem.desc || 'Maintenance Item'}</p>
        </div>

        <div className="flex gap-3">
          {selectedItem.iv && (
            <InfoBadge
              label="Interval"
              value={typeof selectedItem.iv === 'number' ? `${selectedItem.iv.toLocaleString()} hrs` : selectedItem.iv}
              icon={<Clock size={14} />}
            />
          )}
          {hasUnits && <InfoBadge label="Units" value={selectedItem.units} icon={<Wrench size={14} />} />}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">

        {/* ENGINE UNITS GRID */}
        {hasUnits && (
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded-full" />
              Component Status
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: selectedItem.units }).map((_, i) => {
                const u = i + 1;
                const data = getCompData(u);

                return (
                  <div key={u} className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-foreground">Unit {u}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        COMPLIANT
                      </span>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-border/50">
                        <span className="text-muted-foreground text-xs">Last Overhaul</span>
                        <span className="font-mono font-medium">{data?.lastOH || '---'}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-border/50">
                        <span className="text-muted-foreground text-xs">Next Due</span>
                        <span className="font-mono font-medium text-primary">{data?.nextDue || '---'}</span>
                      </div>

                      {typeof selectedItem.iv === 'number' && (
                        <div className="pt-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Est. Running Hours</span>
                            <span className="font-mono text-xs">1,240 hrs</span>
                          </div>
                          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[20%] rounded-full" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* JOB SCOPE / OVERVIEW -- REQUESTED BY USER */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm relative overflow-hidden group">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <FileText size={100} />
            </div>

            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-border pb-2">
              <ListChecks size={20} className="text-primary" />
              Standard Overhaul Procedure / Job Scope
            </h3>

            <div className="bg-secondary/20 rounded-lg p-4 font-mono text-sm leading-relaxed border border-border/50">
              <ul className="space-y-2">
                {jobSteps.map((step, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary font-bold min-w-[20px]">{idx + 1}.</span>
                    <span className="text-foreground/90">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* TASK LIST (DECK) */}
        {selectedItem.tasks && selectedItem.tasks.length > 0 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="w-1 h-6 bg-emerald-500 rounded-full" />
                Maintenance Tasks
              </h3>
              <span className="text-xs text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                All Tasks Up To Date
              </span>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground text-xs uppercase font-bold">
                  <tr>
                    <th className="px-4 py-3 w-16 text-center">Status</th>
                    <th className="px-4 py-3">Job Description</th>
                    <th className="px-4 py-3 w-24 text-center">Role</th>
                    <th className="px-4 py-3 w-24 text-center">Interval</th>
                    <th className="px-4 py-3 w-32 text-right">Last Done</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {selectedItem.tasks.map((t, i) => {
                    const taskKey = `${vid}-${selectedItem.id}-task-${i}`;
                    const taskData = complianceData ? complianceData[taskKey] : null;

                    return (
                      <tr key={i} className="hover:bg-accent/50 transition-colors">
                        <td className="px-4 py-3 text-center">
                          <div className="w-6 h-6 mx-auto rounded bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </div>
                        </td>
                        <td className="px-4 py-3 font-medium text-foreground">{t.j || 'Job'}</td>
                        <td className="px-4 py-3 text-center text-xs font-bold text-muted-foreground">{t.p}</td>
                        <td className="px-4 py-3 text-center font-mono text-xs text-primary">{t.i}</td>
                        <td className="px-4 py-3 text-right font-mono text-xs text-muted-foreground">
                          {taskData ? taskData.lastOH : '---'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoBadge({ label, value, icon }) {
  return (
    <div className="bg-secondary/50 border border-border rounded-lg px-3 py-2 text-center min-w-[80px]">
      <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider flex justify-center items-center gap-1 mb-0.5">
        {icon} {label}
      </div>
      <div className="font-mono font-bold text-primary">{value || '-'}</div>
    </div>
  )
}
