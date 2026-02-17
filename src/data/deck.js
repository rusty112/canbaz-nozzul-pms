const T_TANK = [
    { j: "Check manhole cover, rubber, bolts & nuts", p: "Deck/CM", i: "6 mo" },
    { j: "Bulkhead inspection / maintenance", p: "Deck/CM", i: "6 mo" },
    { j: "Cleanliness inspection", p: "Deck/CM", i: "6 mo" },
    { j: "Ladder inspection / maintenance", p: "Deck/CM", i: "6 mo" },
    { j: "Coating and anodes inspection", p: "Deck/CM", i: "6 mo" },
    { j: "Sounding/gauge pipes inspection", p: "Deck/CM", i: "6 mo" },
    { j: "Ballast & stripping line suction, NRV check", p: "Deck/CM", i: "6 mo" },
    { j: "Condition and fracture check", p: "Deck/CM", i: "6 mo" },
    { j: "Visual, leakage/holes inspection", p: "Deck/CM", i: "6 mo" },
    { j: "Drain plugs & steel thickness (drydock)", p: "Deck/CM", i: "5 yr" },
];
const T_HOLD = [
    { j: "Check structural members for crack & deformation", p: "Deck/CM", i: "3 mo" },
    { j: "Check vent pipe, sounding pipe for damage", p: "Deck/CM", i: "3 mo" },
    { j: "Retighten nuts for manhole", p: "Deck/CM", i: "3 mo" },
    { j: "Check/re-grease cargo hold gas sampling equipment", p: "Deck/CM", i: "3 mo" },
    { j: "Check bilge non-return valve condition", p: "Deck/CM", i: "3 mo" },
    { j: "Check cargo hold bilge hydraulic valve operation", p: "Deck/CM", i: "3 mo" },
];
const T_HYDPU = [
    { j: "Clean lub oil return/line filters", p: "Eng/2E", i: "6 mo" },
    { j: "Inspect inside oil tank, clean if necessary", p: "Eng/2E", i: "1 yr" },
    { j: "Change oil, clean tank as per analysis", p: "Eng/2E", i: "As Req" },
    { j: "Overhaul Hydraulic Oil Pump 1", p: "Eng/2E", i: "As Req" },
    { j: "Overhaul Hydraulic Oil Pump 2", p: "Eng/2E", i: "As Req" },
    { j: "Overhaul Hydraulic Oil Pump 1 electric motor", p: "Eng/4E", i: "5 yr" },
    { j: "Overhaul Hydraulic Oil Pump 2 electric motor", p: "Eng/4E", i: "5 yr" },
    { j: "Inspect/clean counter balance valve", p: "Eng/2E", i: "5 yr" },
    { j: "Function test LO low level & high temp alarm", p: "Eng/2E", i: "6 mo" },
];
const T_WINDLASS = [
    { j: "Overhaul brake linkage for windlass", p: "Eng/2E", i: "1 yr" },
    { j: "Overhaul brake linkage for mooring winch (S)", p: "Eng/2E", i: "1 yr" },
    { j: "Overhaul brake linkage for mooring winch (P)", p: "Eng/2E", i: "1 yr" },
    { j: "Range out hawser, check hawser & drum (S)", p: "Deck/CM", i: "6 mo" },
    { j: "Range out hawser, check hawser & drum (P)", p: "Deck/CM", i: "6 mo" },
    { j: "Inspect components for signs of damage (S)", p: "Deck/CM", i: "1 mo" },
    { j: "Inspect components for signs of damage (P)", p: "Deck/CM", i: "1 mo" },
];
const T_MWINCH = [
    { j: "Overhaul brake linkage for mooring winch (S)", p: "Eng/2E", i: "1 yr" },
    { j: "Overhaul brake linkage for mooring winch (P)", p: "Eng/2E", i: "1 yr" },
    { j: "Range out hawser, check condition (S)", p: "Deck/CM", i: "6 mo" },
    { j: "Range out hawser, check condition (P)", p: "Deck/CM", i: "6 mo" },
];
const T_ACCLAD = [
    { j: "Renew wire rope", p: "Deck/CM", i: "5 yr" },
    { j: "Inspect/grease wire rope, sheaves, blocks", p: "Deck/CM", i: "3 mo" },
    { j: "Check/lubricate ladder jointing pins & turntable", p: "Deck/CM", i: "3 mo" },
    { j: "Check manual brake for hoisting winch", p: "Eng/2E", i: "6 mo" },
    { j: "Remove motor cover, inspect motor condition", p: "Eng/2E", i: "6 mo" },
    { j: "Check magnetic brake on electric motor", p: "Eng/2E", i: "1 yr" },
    { j: "Check gear condition for winch", p: "Eng/2E", i: "1 yr" },
    { j: "Change gear box oil", p: "Eng/2E", i: "1 yr" },
    { j: "Disassemble/inspect mechanical brake parts", p: "Eng/2E", i: "3 yr" },
    { j: "Overhaul winch driving electric motor", p: "Eng/2E", i: "3 yr" },
    { j: "Maximum operational load test (at survey)", p: "Eng/2E", i: "5 yr" },
    { j: "Check safety devices & condition", p: "Eng/2E", i: "3 mo" },
];

export const DECK_TREE = [
    {
        id: "chain", label: "Chain Lockers", icon: "⚓", resp: "C/O", ch: [
            {
                id: "dk-clS", label: "Chain Locker - Stbd", tasks: [
                    { j: "Inspect chain locker", p: "Deck/CM", i: "1 yr" }, { j: "Clean inside", p: "Deck/CM", i: "3 yr" }, { j: "Check ejecter system", p: "Deck/CM", i: "3 yr" }
                ]
            },
            {
                id: "dk-clP", label: "Chain Locker - Port", tasks: [
                    { j: "Inspect chain locker", p: "Deck/CM", i: "1 yr" }, { j: "Clean inside", p: "Deck/CM", i: "3 yr" }, { j: "Check ejecter system", p: "Deck/CM", i: "3 yr" }
                ]
            },
        ]
    },
    {
        id: "tanks", label: "Tanks - Deck/Hull", icon: "🛢️", resp: "C/O", ch: [
            { id: "dk-db1", label: "DB No.1 P&S", tasks: T_TANK }, { id: "dk-db2", label: "DB No.2 P&S", tasks: T_TANK },
            { id: "dk-db3", label: "DB No.3 P&S", tasks: T_TANK }, { id: "dk-db4", label: "DB No.4 P&S", tasks: T_TANK },
            { id: "dk-ts1", label: "TS No.1 P&S", tasks: T_TANK }, { id: "dk-ts2", label: "TS No.2 P&S", tasks: T_TANK },
            { id: "dk-ts3", label: "TS No.3 P&S", tasks: T_TANK }, { id: "dk-ts4", label: "TS No.4 P&S", tasks: T_TANK },
            { id: "dk-fpt", label: "Fore Peak Tank", tasks: T_TANK }, { id: "dk-apt", label: "Aft Peak Tank", tasks: T_TANK },
            { id: "dk-bow", label: "Bow Tank P&S", tasks: T_TANK }, { id: "dk-duct", label: "Duct Keel", tasks: T_TANK },
        ]
    },
    {
        id: "vents", label: "Air Vent Heads/Valves", icon: "💨", resp: "C/O", ch: [
            {
                id: "dk-vent", label: "All Air Vents", tasks: [
                    { j: "Visual inspection of all air vent heads", p: "Deck/CM", i: "1 mo" },
                    { j: "OH fore & aft peak tanks air vent valves", p: "Deck/CM", i: "6 mo" },
                    { j: "OH WBT No.1-4 air vent valves", p: "Deck/CM", i: "6 mo" },
                    { j: "OH bow tank air vent valves", p: "Deck/CM", i: "6 mo" },
                    { j: "OH freshwater tank air vent valves", p: "Deck/CM", i: "6 mo" },
                    { j: "OH all HFO tank air vent valves", p: "Deck/CM", i: "6 mo" },
                    { j: "OH all LO tank air vent valves", p: "Deck/CM", i: "6 mo" },
                    { j: "OH all DO tank air vent valves", p: "Deck/CM", i: "6 mo" },
                    { j: "OH all ventilators for deck & accommodation", p: "Deck/CM", i: "1 yr" },
                ]
            },
        ]
    },
    {
        id: "cargo", label: "Cargo Holds", icon: "📦", resp: "C/O", ch: [
            { id: "dk-h1", label: "Cargo Hold No.1", tasks: T_HOLD }, { id: "dk-h2", label: "Cargo Hold No.2", tasks: T_HOLD },
            { id: "dk-h3", label: "Cargo Hold No.3", tasks: T_HOLD }, { id: "dk-h4", label: "Cargo Hold No.4", tasks: T_HOLD },
        ]
    },
    {
        id: "hcovers", label: "Hatch Covers", icon: "📐", resp: "C/O", ch: [
            {
                id: "dk-hc", label: "Hatch Covers (All)", tasks: [
                    { j: "Check seals shape & elasticity for wear/damage", p: "Deck/CM", i: "1 mo" },
                    { j: "Lubricate pitching, rolling stoppers & stools", p: "Deck/CM", i: "1 mo" },
                    { j: "Lubricate glands of cylinders", p: "Deck/CM", i: "1 mo" },
                    { j: "Check hydraulic hoses, pipes & couplings", p: "Deck/CM", i: "1 mo" },
                    { j: "Check operation of drain valves", p: "Deck/CM", i: "3 mo" },
                    { j: "Lubricate wheel bearings", p: "Deck/CM", i: "3 mo" },
                    { j: "Check hydraulic cylinders", p: "Deck/CM", i: "3 mo" },
                    { j: "Lubricate pins & bearings of cylinders", p: "Deck/CM", i: "3 mo" },
                    { j: "Check pitching, rolling stopper & stools wear", p: "Deck/CM", i: "3 mo" },
                    { j: "Check pads for wear and damage", p: "Deck/CM", i: "3 mo" },
                    { j: "Lubricate & check operation of cleats", p: "Deck/CM", i: "3 mo" },
                    { j: "Check stowage position locking device", p: "Deck/CM", i: "3 mo" },
                    { j: "Lubricate hinge pins of stowage locking", p: "Deck/CM", i: "3 mo" },
                    { j: "Lubricate hatch cover hinge pins", p: "Deck/CM", i: "3 mo" },
                    { j: "Check condition & locking of HC guides", p: "Deck/CM", i: "6 mo" },
                    { j: "Check operation of wheels", p: "Deck/CM", i: "6 mo" },
                    { j: "Check HC & coaming steel structures", p: "Deck/CM", i: "6 mo" },
                    { j: "Check operation valves & shut-off valves", p: "Deck/CM", i: "6 mo" },
                    { j: "Hatch cover tightness test", p: "Deck/CM", i: "1 yr" },
                    { j: "Check mating surfaces for wear & damage", p: "Deck/CM", i: "1 yr" },
                    { j: "Renew hydraulic hoses", p: "Deck/CM", i: "5 yr" },
                ]
            },
        ]
    },
    {
        id: "windlass", label: "Windlass", icon: "⚙️", resp: "C/O", ch: [
            { id: "dk-wlF", label: "Windlass Fore", tasks: T_WINDLASS },
            { id: "dk-wlA", label: "Windlass Aft", tasks: T_WINDLASS },
        ]
    },
    {
        id: "mwinch", label: "Mooring Winch", icon: "🔗", resp: "C/O", ch: [
            { id: "dk-mwF", label: "Mooring Winch Fore", tasks: T_MWINCH },
            { id: "dk-mwA", label: "Mooring Winch Aft", tasks: T_MWINCH },
        ]
    },
    {
        id: "acclad", label: "Accommodation Ladder", icon: "🪜", resp: "C/O", ch: [
            { id: "dk-alS", label: "Accom. Ladder (S)", tasks: T_ACCLAD },
            { id: "dk-alP", label: "Accom. Ladder (P)", tasks: T_ACCLAD },
        ]
    },
    {
        id: "lsa", label: "LSA - Life Saving", icon: "🛟", resp: "2/O", ch: [
            {
                id: "dk-ffD", label: "Freefall Davit & Winch", tasks: [
                    { j: "Grease boat fall wire, sheave, moving parts", p: "Deck/CM", i: "3 mo" },
                    { j: "Renew boat fall wire", p: "Deck/CM", i: "5 yr" },
                    { j: "Renew winch gear oil", p: "Eng/4E", i: "1 yr" },
                    { j: "Check/drain winch gear box", p: "Eng/4E", i: "6 mo" },
                    { j: "Check winch gears condition", p: "Eng/4E", i: "1 yr" },
                    { j: "Overhaul davit electric motor", p: "Eng/4E", i: "5 yr" },
                ]
            },
            {
                id: "dk-rbD", label: "Rescue Boat Davit (S)", tasks: [
                    { j: "Grease boat fall wire, sheave, moving parts", p: "Deck/CM", i: "3 mo" },
                    { j: "Renew boat fall wire", p: "Deck/CM", i: "5 yr" },
                    { j: "Renew winch gear oil", p: "Eng/4E", i: "1 yr" },
                    { j: "Check/drain winch gear box", p: "Eng/4E", i: "6 mo" },
                    { j: "Check winch gears condition", p: "Eng/4E", i: "1 yr" },
                    { j: "Overhaul davit electric motor", p: "Eng/4E", i: "5 yr" },
                ]
            },
        ]
    },
    {
        id: "ffe", label: "FFE / Provision Crane", icon: "🔥", resp: "2/O", ch: [
            {
                id: "dk-pcr", label: "Provision Crane (P)", tasks: [
                    { j: "Renew hoisting wire rope", p: "Deck/CM", i: "5 yr" },
                    { j: "Renew luffing wire rope", p: "Deck/CM", i: "5 yr" },
                    { j: "Grease all points", p: "Deck/CM", i: "3 mo" },
                    { j: "Overhaul cargo block", p: "Deck/CM", i: "2 yr" },
                    { j: "OH magnetic brakes for hoisting winch", p: "Eng/4E", i: "2 yr" },
                    { j: "Overhaul driving electric motor", p: "Eng/4E", i: "5 yr" },
                    { j: "Function test safety devices (hoisting/limit)", p: "Eng/4E", i: "3 mo" },
                ]
            },
        ]
    },
    {
        id: "nav", label: "Navigation", icon: "🧭", resp: "2/O", ch: [
            { id: "nv-mc", label: "Magnetic Compass", iv: "12 mo", units: 1, desc: "Deviation check" },
            { id: "nv-gc", label: "Gyro Compass", iv: "6 mo", units: 1, desc: "Error determination" },
            { id: "nv-rx", label: "Radar X-Band", iv: "12 mo", units: 1, desc: "Annual APT" },
            { id: "nv-rs", label: "Radar S-Band", iv: "12 mo", units: 1, desc: "Annual APT" },
            { id: "nv-ecd", label: "ECDIS", iv: "12 mo", units: 1, desc: "APT, chart updates" },
            { id: "nv-ais", label: "AIS", iv: "12 mo", units: 1, desc: "Annual test MMSI" },
            { id: "nv-vdr", label: "VDR", iv: "12 mo", units: 1, desc: "APT approved service" },
            { id: "nv-bnw", label: "BNWAS", iv: "3 mo", units: 1, desc: "Quarterly test" },
        ]
    },
    {
        id: "otherdk", label: "Other Deck Equipment", icon: "🔩", resp: "C/O", ch: [
            {
                id: "dk-oth", label: "Misc Deck Items", tasks: [
                    { j: "Inspect scuppers for damage & corrosion", p: "Deck/CM", i: "1 mo" },
                    { j: "Inspect/repaint loadline marks", p: "Deck/CM", i: "1 mo" },
                    { j: "Inspect/repaint P&S FWD draught marks", p: "Deck/CM", i: "1 mo" },
                    { j: "Check WT doors rubber gaskets", p: "Deck/CM", i: "1 mo" },
                    { j: "Lubricate all WT doors dogs & hinges", p: "Deck/CM", i: "1 mo" },
                    { j: "OH aft fairleader rollers, de-scale, paint", p: "Deck/CM", i: "1 yr" },
                    { j: "Check anchor chain kenter shackle condition", p: "Deck/CM", i: "1 yr" },
                    { j: "Check swivel, anchor shackle & ring", p: "Deck/CM", i: "6 mo" },
                    { j: "Renew oil rudder carrier neck bearing", p: "Eng/2E", i: "3 mo" },
                    { j: "Check rudder trunk internal condition", p: "Eng/2E", i: "3 mo" },
                    { j: "Check rudder stock for corrosion", p: "Eng/2E", i: "3 mo" },
                    { j: "Check/clean funnel mist box & louvres", p: "Eng/2E", i: "3 mo" },
                    { j: "Grease de-watering system valve reach rods", p: "Deck/CM", i: "3 mo" },
                    { j: "Inspect/test isolating valves on fireline", p: "Deck/CM", i: "3 mo" },
                ]
            },
            { id: "dk-hpu1", label: "Hyd Pump Unit FWD (HC)", tasks: T_HYDPU },
            { id: "dk-hpu2", label: "Hyd Pump Unit FWD", tasks: T_HYDPU },
            { id: "dk-hpu3", label: "Hyd Pump Unit AFT", tasks: T_HYDPU },
        ]
    },
];
