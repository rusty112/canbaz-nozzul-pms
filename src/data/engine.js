export const ENGINE_TREE = [
    {
        id: "me", label: "Main Engine", icon: "🔩", resp: "2/E", ch: [
            { id: "me-cylHeads", label: "Cylinder Heads", iv: 32000, units: 6, desc: "Hydro test, valve seat grinding, CW passage, crack detection" },
            { id: "me-pistons", label: "Pistons & Rings", iv: 16000, units: 6, desc: "Piston withdrawal, crown inspect, ring groove, ring renewal" },
            { id: "me-mainBrg", label: "Main Bearings", iv: 20000, units: 10, desc: "Clearance, shell condition, oil way check" },
            { id: "me-cylLiners", label: "Cylinder Liners", iv: 32000, units: 6, desc: "Liner gauging top/mid/bottom, honing, max wear" },
            { id: "me-turbo", label: "Turbocharger(s)", iv: 16000, units: 2, desc: "T/C OH rotor, bearing, nozzle ring, balancing" },
            { id: "me-exhV", label: "Exhaust Valves", iv: 16000, units: 6, desc: "Spindle/seat grinding, stem seal, hydraulic actuator" },
            { id: "me-fInj", label: "Fuel Injectors", iv: 8000, units: 6, desc: "Nozzle tip, opening pressure, spray pattern" },
            { id: "me-fPmp", label: "Fuel Inj. Pumps", iv: 16000, units: 6, desc: "Plunger/barrel, delivery valve, timing" },
            { id: "me-saV", label: "Starting Air Valves", iv: 8000, units: 6, desc: "Disc/seat, spring check, leakage test" },
            { id: "me-thrBrg", label: "Thrust Bearing", iv: 20000, units: 1, desc: "Thrust pad, clearance measurement" },
            { id: "me-cam", label: "Camshaft & Drive", iv: 32000, units: 1, desc: "Cam bearing, profile, chain/gear tension" },
            { id: "me-gov", label: "Governor", iv: 16000, units: 1, desc: "Actuator, speed setting, oil change" },
            { id: "me-tvd", label: "Torsional Vibr. Damper", iv: 32000, units: 1, desc: "TVD silicon oil, inspect per maker" },
            { id: "me-cdef", label: "Crankshaft Deflection", iv: "6 mo", units: 6, desc: "Deflection all cranks, report Class" },
            { id: "me-lo", label: "LO System", iv: 2000, units: 1, desc: "LO cooler, auto filter, sampling" },
            { id: "me-cw", label: "CW System", iv: 4000, units: 1, desc: "HT/LT cooler, thermostat, treatment" },
            { id: "me-fo", label: "FO System", iv: 2000, units: 1, desc: "FO heater, viscotherm, filter" },
            { id: "me-scv", label: "Scavenge Air", iv: 4000, units: 1, desc: "Scav cooler, scav space inspection" },
            { id: "me-exg", label: "Exhaust Gas System", iv: 8000, units: 1, desc: "Manifold, compensator, insulation" },
        ]
    },
    {
        id: "ae", label: "Auxiliary Engines", icon: "⚡", resp: "2/E", ch: [
            { id: "ae-1", label: "A/E No.1 Generator", iv: 8000, units: 1, desc: "Major OH" },
            { id: "ae-2", label: "A/E No.2 Generator", iv: 8000, units: 1, desc: "Major OH" },
            { id: "ae-3", label: "A/E No.3 Generator", iv: 8000, units: 1, desc: "Major OH" },
        ]
    },
    {
        id: "comp", label: "Compressors & Air Systems", icon: "🔧", resp: "4/E", ch: [
            { id: "comp-ac1", label: "Main Air Compressor No.1", iv: 2000, units: 1, desc: "Valve OH, piston rings, intercooler, safety valve" },
            { id: "comp-ac2", label: "Main Air Compressor No.2", iv: 2000, units: 1, desc: "Valve OH, piston rings, intercooler, safety valve" },
            { id: "comp-ec", label: "Emergency Air Compressor", iv: "1 mo", units: 1, desc: "Monthly test run, valve check, auto-start test" },
            { id: "comp-ab1", label: "Air Bottle No.1 (Main)", iv: "12 mo", units: 1, desc: "Internal inspection, safety valve test, drain" },
            { id: "comp-ab2", label: "Air Bottle No.2 (Main)", iv: "12 mo", units: 1, desc: "Internal inspection, safety valve test, drain" },
            { id: "comp-ab3", label: "Air Bottle (Emergency)", iv: "12 mo", units: 1, desc: "Internal inspection, safety valve, moisture drain" },
            { id: "comp-ad", label: "Air Dryer Unit", iv: "6 mo", units: 1, desc: "Desiccant renewal, filter change, drain check" },
        ]
    },
    {
        id: "pur", label: "Purifiers & Separators", icon: "🛢️", resp: "4/E", ch: [
            { id: "pur-fo1", label: "FO Purifier No.1 (HFO)", iv: 2000, units: 1, desc: "Disc stack, bowl OH, seal ring, heater inspect" },
            { id: "pur-fo2", label: "FO Purifier No.2 (HFO)", iv: 2000, units: 1, desc: "Disc stack, bowl OH, seal ring, heater inspect" },
            { id: "pur-lo1", label: "LO Purifier (M/E)", iv: 2000, units: 1, desc: "Disc stack, bowl, seal ring, vertical shaft" },
            { id: "pur-lo2", label: "LO Purifier (A/E)", iv: 2000, units: 1, desc: "Disc stack, bowl, seal ring, bearing check" },
            { id: "pur-do", label: "DO Purifier", iv: 2000, units: 1, desc: "Purifier OH, disc cleaning, seal renewal" },
            { id: "pur-stf", label: "Sludge Tank & FO Settling", iv: "3 mo", units: 1, desc: "Tank cleaning, drain, heating coil inspect" },
        ]
    },
    {
        id: "fos", label: "Fuel Oil System", icon: "⛽", resp: "4/E", ch: [
            { id: "fos-stk", label: "FO Storage Tanks", iv: "6 mo", units: 2, desc: "Sounding, heating coil, vent check" },
            { id: "fos-set", label: "FO Settling Tank", iv: "3 mo", units: 1, desc: "Drain, heating coil, thermometer" },
            { id: "fos-srv", label: "FO Service Tank", iv: "3 mo", units: 1, desc: "Drain, heating, level alarm test" },
            { id: "fos-htr1", label: "FO Heater No.1", iv: "3 mo", units: 1, desc: "Steam trap, coil inspect, thermostat" },
            { id: "fos-htr2", label: "FO Heater No.2", iv: "3 mo", units: 1, desc: "Steam trap, coil inspect, thermostat" },
            { id: "fos-visc", label: "Viscotherm (Viscosity Ctrl)", iv: "6 mo", units: 1, desc: "Sensor calibration, valve, controller check" },
            { id: "fos-flm", label: "FO Flow Meter", iv: "12 mo", units: 1, desc: "Calibration check, pulse sensor" },
            { id: "fos-bkr", label: "FO Supply/Booster Pumps", iv: "6 mo", units: 2, desc: "Mechanical seal, bearing, pressure" },
        ]
    },
    {
        id: "los", label: "Lube Oil System", icon: "🛢️", resp: "3/E", ch: [
            { id: "los-smp", label: "LO Sump Tank (M/E)", iv: "6 mo", units: 1, desc: "Level check, sampling, temperature" },
            { id: "los-sep", label: "LO Auto Filter", iv: 2000, units: 1, desc: "Auto-filter candles, backflush, differential pressure" },
            { id: "los-clr", label: "LO Cooler", iv: "6 mo", units: 1, desc: "Tube cleaning, zinc anodes, pressure test" },
            { id: "los-pmp", label: "LO Pump (M/E)", iv: "6 mo", units: 1, desc: "Bearing, gear, relief valve test" },
            { id: "los-aelo", label: "A/E LO System", iv: "6 mo", units: 3, desc: "Sampling, filter, top-up, analysis" },
        ]
    },
    {
        id: "aux", label: "ER Auxiliaries", icon: "🔧", resp: "3/E", ch: [
            { id: "ax-blr", label: "Auxiliary Boiler", iv: 2500, units: 1, desc: "Tube, safety valve, burner" },
            { id: "ax-ege", label: "Exhaust Gas Economizer", iv: "3 mo", units: 1, desc: "Soot blow, tube condition" },
            { id: "ax-ows", label: "OWS 15ppm", iv: 1500, units: 1, desc: "Filter, sensor cal, OCM test" },
            { id: "ax-stg", label: "Steering Gear", iv: "3 mo", units: 1, desc: "Hydraulic, oil, relief valve. SOLAS V/26" },
            { id: "ax-bp1", label: "Ballast Pump No.1", iv: "6 mo", units: 1, desc: "Bearing, impeller, seal" },
            { id: "ax-bp2", label: "Ballast Pump No.2", iv: "6 mo", units: 1, desc: "Bearing, impeller, seal" },
            { id: "ax-gsp", label: "GS/Fire Pump", iv: "6 mo", units: 1, desc: "Bearing, impeller" },
            { id: "ax-stp", label: "Sewage Treatment", iv: "3 mo", units: 1, desc: "Biological, aeration" },
            { id: "ax-fwg", label: "Fresh Water Generator", iv: "3 mo", units: 1, desc: "Evaporator, ejector, salinity" },
            { id: "ax-inc", label: "Incinerator", iv: "3 mo", units: 1, desc: "Refractory, burner. MEPC.244(66)" },
            { id: "ax-eg", label: "Emergency Generator", iv: "1 mo", units: 1, desc: "Auto-start, load test, battery" },
            { id: "ax-sts", label: "Stern Tube Seal", iv: "6 mo", units: 1, desc: "LO level, leak check" },
            { id: "ax-bwt", label: "BWTS", iv: "6 mo", units: 1, desc: "UV/electrochlorination per maker" },
        ]
    },
    {
        id: "dm", label: "Deck Machinery", icon: "⚓", resp: "2/E", ch: [
            { id: "dm-wdls", label: "Windlass (Anchor)", iv: "6 mo", units: 1, desc: "Brake lining, motor, hydraulic, chain stopper" },
            { id: "dm-moor", label: "Mooring Winch (Fwd/Aft)", iv: "6 mo", units: 2, desc: "Brake, motor, drum, wire/rope inspect" },
            { id: "dm-crn", label: "Deck Crane", iv: "12 mo", units: 1, desc: "Wire, limit switches, SWL test, hydraulic" },
            { id: "dm-hc", label: "Hatch Cover Hydraulics", iv: "6 mo", units: 1, desc: "Cylinder seal, pump, cleating" },
        ]
    },
    {
        id: "ref", label: "Refrigeration & HVAC", icon: "❄️", resp: "4/E", ch: [
            { id: "ref-comp", label: "Ref. Compressor", iv: "3 mo", units: 1, desc: "Valve plate, oil level, gas charge, sight glass" },
            { id: "ref-cond", label: "Ref. Condenser", iv: "6 mo", units: 1, desc: "Tube cleaning, SW flow, zinc anodes" },
            { id: "ref-evap", label: "Ref. Evaporator (Provision)", iv: "3 mo", units: 1, desc: "Defrost, fan motor, temp calibration" },
            { id: "ref-ac", label: "AC Plant (Accommodation)", iv: "6 mo", units: 1, desc: "Compressor, condenser, AHU filter" },
        ]
    },
    {
        id: "elec", label: "Electrical", icon: "⚡", resp: "3/E", ch: [
            { id: "el-msb", label: "Main Switchboard", iv: "6 mo", units: 1, desc: "Megger, breakers, relay" },
            { id: "el-esb", label: "Emergency Switchboard", iv: "6 mo", units: 1, desc: "Insulation test" },
            { id: "el-bat", label: "Battery Systems", iv: "1 mo", units: 1, desc: "Voltage, electrolyte" },
            { id: "el-nl", label: "Nav Lights", iv: "1 mo", units: 1, desc: "Monthly, auto changeover" },
            { id: "el-efm", label: "Earth Fault Monitor", iv: "3 mo", units: 1, desc: "Alarm test, IR logging" },
        ]
    },
];
