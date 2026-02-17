export const JOB_DESCRIPTIONS = {
    // MAIN ENGINE
    "me-cylHeads": [
        "Disconnect all pipe connections (FW, LO, FO, Air).",
        "Loosen cylinder head nuts using hydraulic jacks.",
        "Lift cylinder head and place on wooden stand.",
        "Remove exhaust valve, fuel injector, starting air valve, and safety valve.",
        "Clean combustion chamber face and cooling water spaces.",
        "Inspect cooling water outlet/inlet for corrosion/erosion.",
        "Grind exhaust valve seat if necessary (or send for machining).",
        "Pressure test cylinder head cooling spaces (usually 7 bar).",
        "Renew all O-rings and gaskets (CW, Air start, Exhaust).",
        "Box up in reverse order and tighten nuts to specified hydraulic pressure."
    ],
    "me-pistons": [
        "Open crankcase doors, remove bottom end bearing cap.",
        "Clean carbon ridge from top of cylinder liner.",
        "Secure lifting tool to piston crown.",
        "Withdraw piston assembly carefully.",
        "Clean piston crown, ring grooves, and cooling spaces.",
        "Inspect crown for burning marks or cracks (NDT if required).",
        "Measure ring groove vertical clearance (wear).",
        "Replace piston rings, check butt clearances.",
        "Check gudgeon pin and coating condition.",
        "Lubricate liner and piston, re-install, and torque con-rod bolts."
    ],
    "me-mainBrg": [
        "Open crankcase and ensure turning gear is engaged.",
        "Mount hydraulic jacks for main bearing cap.",
        "Loosen and remove main bearing cap.",
        "Remove upper shell and inspect for scratches/wiping.",
        "Turn crank to roll out lower shell (if required).",
        "Measure bridge gauge clearance or feeler gauge clearance.",
        "Inspect crankshaft journal for scoring.",
        "Apply clean LO and re-assemble bearing.",
        "Tighten to specified pressure and check crankshaft deflection."
    ],
    "me-cylLiners": [
        "Remove cylinder head and piston.",
        "Clean liner surface and ports.",
        "Calibrate liner at Top, Middle, and Bottom positions (P-S and F-A).",
        "Calculate ovality and wear rate.",
        "Hone liner surface to restore cross-hatch pattern if glazed.",
        "Check lubricator quill points for blockage.",
        "Inspect lower O-ring sealing area for leakage."
    ],
    "me-turbo": [
        "Remove intake filter and silencer.",
        "Dismantle turbine and compressor casings.",
        "Remove rotor assembly carefully.",
        "Clean turbine blades (blast cleaning) and compressor wheel.",
        "Inspect nozzle ring/blades for damage.",
        "Renew bearings and gas sealing bushes.",
        "Check rotor balance if vibration was noted.",
        "Re-assemble ensuring correct clearances (K-value, M-value)."
    ],
    "me-exhV": [
        "Dismantle exhaust valve from cylinder head.",
        "Clean spindle and valve seat housing.",
        "Inspect seating surfaces for pitting/blow-by.",
        "Grind valve spindle and seat to correct angle.",
        "Check stem wear and bushing clearance.",
        "Renew air spring piston seals/hydraulics.",
        "Pressure test exhaust chest cooling water.",
        "Lap valve to seat for final check."
    ],
    "me-fInj": [
        "Remove injector from cylinder head.",
        "Dismantle nozzle nut and remove needle.",
        "Clean all parts in ultrasonic cleaner.",
        "Inspect needle guide for wear and seat for pitting.",
        "Lapping of nozzle needle if required.",
        "Re-assemble and test opening pressure.",
        "Check spray pattern (atomization) and drip tightness."
    ],
    "me-fPmp": [
        "Isolate fuel supply and remove high pressure pipe.",
        "Lift fuel pump plunger and barrel.",
        "Inspect plunger for scoring or seizure marks.",
        "Check barrel internals.",
        "Inspect control rack movement (smoothness).",
        "Check delivery valve condition.",
        "Renew O-rings and puncture valve seals.",
        "Adjust timing if lead was changed."
    ],
    "me-saV": [
        "Dismantle valve from cylinder head.",
        "Clean valve spindle and body.",
        "Check valve moves freely in guide.",
        "Inspect valve seat for leakage indications.",
        "Check return spring tension.",
        "Lubricate stem with high-temp grease (Molykote).",
        "Test for leakage before installation."
    ],
    "me-lo": [
        "Isolate LO Cooler.",
        "Remove cover plates.",
        "Use rodding to clean tubes or circulate chemical cleaner.",
        "Pressure test to check for tube leaks.",
        "Plug leaking tubes if necessary (max 10%).",
        "Clean auto-filter candles/discs.",
        "Send LO sample for shore analysis."
    ],
    "me-cw": [
        "Isolate HT/LT Coolers.",
        "Open cooler covers.",
        "Clean plates/tubes with high pressure washer.",
        "Soak plates in descaling solution if scaled.",
        "Check zinc anodes and renew if consumed >50%.",
        "Inspect thermostat wax elements.",
        "Check coolant inhibitor levels."
    ],

    // AUX ENGINES
    "ae-1": ["Perform Major Overhaul as per manufacturer running hours (e.g. 12,000h).", "Renew main & con-rod bearings.", "Withdraw pistons and renew rings.", "Overhaul cylinder heads & valves.", "Inspect camshaft & followers.", "Polish crankshaft pins if needed.", "Renew all gaskets & dampeners."],
    "ae-2": ["Perform Major Overhaul as per manufacturer running hours (e.g. 12,000h).", "Renew main & con-rod bearings.", "Withdraw pistons and renew rings.", "Overhaul cylinder heads & valves.", "Inspect camshaft & followers.", "Polish crankshaft pins if needed.", "Renew all gaskets & dampeners."],
    "ae-3": ["Perform Major Overhaul as per manufacturer running hours (e.g. 12,000h).", "Renew main & con-rod bearings.", "Withdraw pistons and renew rings.", "Overhaul cylinder heads & valves.", "Inspect camshaft & followers.", "Polish crankshaft pins if needed.", "Renew all gaskets & dampeners."],

    // AUXILIARY MACHINERY
    "ax-blr": [
        "Cool down boiler and vent.",
        "Open water side and fire side doors.",
        "Mechanically clean smoke tubes (brushing).",
        "Wash water side and check for scale/pitting.",
        "Overhaul safety valves and setting pressure.",
        "Clean burner unit, nozzle, and electrodes.",
        "Check water level gauge glasses and sensors.",
        "Inspect refractory material condition."
    ],
    "ax-ows": [
        "Flush unit with fresh water.",
        "Open separator cover and clean plates/coalescer.",
        "Check 15ppm sensor calibration.",
        "Test 3-way valve operation.",
        "Check bilge pump stator/rotor condition.",
        "Verify auto-stop function with standard sample."
    ],
    "ax-c1": [
        "Remove cylinder heads and valves.",
        "Clean valves and checking plates/springs.",
        "Withdraw pistons and check rings.",
        "Measure cylinder liner wear.",
        "Clean intercoolers and aftercooler.",
        "Check oil level and crankcase.",
        "Function test safety valves."
    ],
    "ax-c2": [
        "Remove cylinder heads and valves.",
        "Clean valves and checking plates/springs.",
        "Withdraw pistons and check rings.",
        "Measure cylinder liner wear.",
        "Clean intercoolers and aftercooler.",
        "Check oil level and crankcase.",
        "Function test safety valves."
    ],
    "ax-plo": [
        "Stop purifier and lock bowl.",
        "Dismantle bowl assembly.",
        "Clean disc stack chemically (soaking).",
        "Renew all O-rings and seal rings (Main Seal).",
        "Inspect vertical shaft gear and bearings.",
        "Check friction pads/clutch.",
        "Test run and check amperage/vibration."
    ],
    "ax-pfo": [
        "Stop purifier and lock bowl.",
        "Dismantle bowl assembly.",
        "Clean disc stack chemically (soaking).",
        "Renew all O-rings and seal rings (Main Seal).",
        "Inspect vertical shaft gear and bearings.",
        "Check friction pads/clutch.",
        "Test run and check amperage/vibration."
    ],
    "ax-bwt": [
        "Isolate unit and drain.",
        "Open filter unit and clean filter element.",
        "Check UV lamps or Electrodes condition.",
        "Clean quartz sleeves/sensors.",
        "Test CIP (Cleaning In Place) sequence.",
        "Calibrate flow meters and sensors if due.",
        "Check various valves operation."
    ],

    // DEFAULT
    "default": [
        "Isolate equipment electrical and mechanical power.",
        "Perform visual inspection of exterior.",
        "Check for leaks, vibration, or abnormal noise.",
        "Verify gauge readings vs local parameters.",
        "Lubricate moving parts as per greasing chart.",
        "Clean surrounding area.",
        "Return to service and monitor performance."
    ]
};
