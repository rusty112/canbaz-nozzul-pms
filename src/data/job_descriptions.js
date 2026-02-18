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

    // COMPRESSORS & AIR SYSTEMS
    "comp-ac1": [
        "Remove cylinder head covers and inspect suction/discharge valves.",
        "Clean valve plates, check springs for fatigue cracks.",
        "Withdraw pistons, inspect rings and measure liner wear.",
        "Clean intercooler tubes, pressure test for leaks.",
        "Check aftercooler and moisture trap operation.",
        "Test safety valve lift pressure against maker's specification.",
        "Check crankcase oil level and condition, renew if discolored.",
        "Run compressor and record load/unload pressures and amperage."
    ],
    "comp-ac2": [
        "Remove cylinder head covers and inspect suction/discharge valves.",
        "Clean valve plates, check springs for fatigue cracks.",
        "Withdraw pistons, inspect rings and measure liner wear.",
        "Clean intercooler tubes, pressure test for leaks.",
        "Check aftercooler and moisture trap operation.",
        "Test safety valve lift pressure against maker's specification.",
        "Check crankcase oil level and condition, renew if discolored.",
        "Run compressor and record load/unload pressures and amperage."
    ],
    "comp-ec": [
        "Test auto-start function by simulating low air pressure.",
        "Check valve condition (suction/discharge).",
        "Verify motor insulation resistance (Megger test).",
        "Check belt tension (if belt-driven).",
        "Drain moisture from air bottle.",
        "Record start/stop pressures and compare with set values."
    ],
    "comp-ab1": [
        "Drain air bottle completely and open drain valve.",
        "Open manhole cover for internal inspection.",
        "Check for corrosion, pitting, or scale deposits.",
        "Measure shell thickness at suspect areas (UTM).",
        "Test safety valve on bench and record lift pressure.",
        "Renew gaskets on manhole cover.",
        "Refill and test for leaks at working pressure."
    ],
    "comp-ab2": [
        "Drain air bottle completely and open drain valve.",
        "Open manhole cover for internal inspection.",
        "Check for corrosion, pitting, or scale deposits.",
        "Measure shell thickness at suspect areas (UTM).",
        "Test safety valve on bench and record lift pressure.",
        "Renew gaskets on manhole cover.",
        "Refill and test for leaks at working pressure."
    ],
    "comp-ab3": [
        "Drain emergency air bottle and isolate.",
        "Open inspection cover for internal check.",
        "Inspect for moisture accumulation and corrosion.",
        "Test safety valve and pressure gauge accuracy.",
        "Renew gaskets and close up.",
        "Refill to working pressure and check for leaks."
    ],
    "comp-ad": [
        "Isolate air supply and depressurize unit.",
        "Open desiccant chamber and inspect desiccant beads.",
        "Replace desiccant if saturated or discolored.",
        "Clean or replace pre-filter and after-filter elements.",
        "Check automatic drain valve operation.",
        "Reassemble and verify dew point is within specification."
    ],

    // PURIFIERS & SEPARATORS
    "pur-fo1": [
        "Stop purifier and engage bowl lock.",
        "Dismantle bowl cover and remove disc stack.",
        "Soak disc stack in chemical cleaning solution (4-6 hours).",
        "Inspect bowl body interior for sludge build-up.",
        "Renew all O-rings: main seal, paring disc, sliding bowl bottom.",
        "Check vertical shaft bearing play and gear condition.",
        "Inspect friction pads/clutch lining, replace if worn > 50%.",
        "Check FO heater coil and thermostat before purifier.",
        "Reassemble bowl and test run, check amperage and vibration.",
        "Verify gravity disc size is correct for fuel density."
    ],
    "pur-fo2": [
        "Stop purifier and engage bowl lock.",
        "Dismantle bowl cover and remove disc stack.",
        "Soak disc stack in chemical cleaning solution (4-6 hours).",
        "Inspect bowl body interior for sludge build-up.",
        "Renew all O-rings: main seal, paring disc, sliding bowl bottom.",
        "Check vertical shaft bearing play and gear condition.",
        "Inspect friction pads/clutch lining, replace if worn > 50%.",
        "Check FO heater coil and thermostat before purifier.",
        "Reassemble bowl and test run, check amperage and vibration.",
        "Verify gravity disc size is correct for fuel density."
    ],
    "pur-lo1": [
        "Stop purifier and lock bowl.",
        "Dismantle bowl assembly.",
        "Clean disc stack chemically (soaking).",
        "Renew all O-rings and seal rings (Main Seal).",
        "Inspect vertical shaft gear and bearings.",
        "Check friction pads/clutch.",
        "Inspect LO supply temperature and flow rate.",
        "Test run and check amperage/vibration."
    ],
    "pur-lo2": [
        "Stop purifier and lock bowl.",
        "Dismantle bowl assembly and remove disc stack.",
        "Clean disc stack in approved chemical solution.",
        "Renew all O-rings and sealing rings.",
        "Check bearing play on vertical and horizontal shafts.",
        "Inspect motor coupling and alignment.",
        "Reassemble and test run, verify clean oil output."
    ],
    "pur-do": [
        "Stop purifier and isolate DO supply.",
        "Dismantle bowl and remove disc stack.",
        "Clean discs and bowl interior.",
        "Renew O-rings and inspect seal rings.",
        "Check gravity disc and operating water supply.",
        "Reassemble and test run, check separation efficiency."
    ],
    "pur-stf": [
        "Isolate sludge tank heating.",
        "Open manhole cover and enter (confined space procedure).",
        "Remove accumulated sludge by pump or manual scoop.",
        "High pressure wash tank interior walls.",
        "Inspect heating coil for leaks — pressure test.",
        "Check tank vent and overflow pipe.",
        "Close up, refill heating coil, resume operation."
    ],

    // FUEL OIL SYSTEM
    "fos-stk": [
        "Sound all FO storage tanks and record levels.",
        "Check tank vent pipes and flame screens for blockage.",
        "Inspect heating coils — check steam trap drain.",
        "Verify tank level alarms and high-level cut-off.",
        "Check quick-closing valve operation from remote station.",
        "Inspect tank top for cracks or corrosion.",
        "Record bunker quantities and compare with sounding table."
    ],
    "fos-set": [
        "Drain water and sediment from settling tank bottom.",
        "Verify heating coil maintaining correct temperature (>70°C for HFO).",
        "Check thermometer calibration against portable unit.",
        "Inspect overflow pipe and vent.",
        "Test high-level alarm and auto-transfer valve.",
        "Clean suction strainer at tank outlet."
    ],
    "fos-srv": [
        "Drain water bottom from service tank.",
        "Check heating coil temperature (outlet temp per fuel spec).",
        "Test level indicator accuracy against sounding.",
        "Verify low-level alarm function — test alarm.",
        "Check quick-closing valve from fire station.",
        "Clean suction strainer basket."
    ],
    "fos-htr1": [
        "Isolate steam and FO side of heater.",
        "Open heater and inspect tube bundle for fouling.",
        "Clean tubes with approved solvent or mechanical brush.",
        "Check steam trap operation (condensate return).",
        "Inspect thermostat sensor and controller calibration.",
        "Check safety valve and pressure gauge.",
        "Reassemble with new gaskets and pressure test both sides."
    ],
    "fos-htr2": [
        "Isolate steam and FO side of heater.",
        "Open heater and inspect tube bundle for fouling.",
        "Clean tubes with approved solvent or mechanical brush.",
        "Check steam trap operation (condensate return).",
        "Inspect thermostat sensor and controller calibration.",
        "Check safety valve and pressure gauge.",
        "Reassemble with new gaskets and pressure test both sides."
    ],
    "fos-visc": [
        "Isolate viscotherm unit from FO line.",
        "Clean viscosity sensor element.",
        "Calibrate viscosity reading against lab sample.",
        "Check steam bypass valve and control valve operation.",
        "Verify controller setpoint matches engine maker recommendation.",
        "Test alarm function for high/low viscosity."
    ],
    "fos-flm": [
        "Record current flow meter reading and compare with log.",
        "Clean strainer before flow meter.",
        "Check pulse sensor output (compare with manual measurement).",
        "Verify totalizer is counting correctly.",
        "Inspect meter body for leaks.",
        "Calibrate if deviation exceeds 1% (shore calibration certificate)."
    ],
    "fos-bkr": [
        "Check mechanical seal for leaks — trace marks around shaft.",
        "Measure bearing temperature during operation.",
        "Check suction and discharge pressure gauges.",
        "Inspect coupling alignment and flexible element.",
        "Verify relief valve operation (back to tank).",
        "Grease motor bearings if applicable.",
        "Record pump amperage and compare with rated value."
    ],

    // LUBE OIL SYSTEM
    "los-smp": [
        "Check sump tank LO level by sight glass and sounding.",
        "Take LO sample for onboard test (viscosity, water, TBN).",
        "Record LO temperature at tank outlet.",
        "Check tank breathing pipe and flame screen.",
        "Verify level alarm function.",
        "Compare consumption rate with previous period."
    ],
    "los-sep": [
        "Stop auto-filter and isolate LO supply.",
        "Remove filter candles/elements and soak in solvent.",
        "Clean filter housing interior.",
        "Check differential pressure switch calibration.",
        "Inspect backflush mechanism operation.",
        "Reassemble with cleaned/new elements.",
        "Run filter and verify differential pressure within range."
    ],
    "los-clr": [
        "Isolate LO and cooling water sides of cooler.",
        "Open cooler covers (water side).",
        "Clean tubes with rod or high-pressure washer.",
        "Inspect zinc anodes, renew if consumed > 50%.",
        "Pressure test to check for tube leaks (shell side).",
        "Plug leaking tubes if found (max 10% of total).",
        "Reassemble with new gaskets and return to service."
    ],
    "los-pmp": [
        "Check LO pump discharge pressure against rated value.",
        "Listen for abnormal noise or cavitation.",
        "Check gear teeth condition (if gear pump) during OH.",
        "Inspect relief valve setting and operation.",
        "Check shaft seal for leaks.",
        "Verify motor amperage is within rated range."
    ],
    "los-aelo": [
        "Take LO samples from each A/E for analysis.",
        "Check LO levels via dipstick and compare with log.",
        "Clean LO filters and inspect bypass indicator.",
        "Top up LO as needed with approved grade.",
        "Record LO consumption per engine for trend analysis.",
        "Compare analysis results with limit values (Fe, Cu, Al, water, viscosity)."
    ],

    // ER AUXILIARIES
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
    "ax-bwt": [
        "Isolate unit and drain.",
        "Open filter unit and clean filter element.",
        "Check UV lamps or Electrodes condition.",
        "Clean quartz sleeves/sensors.",
        "Test CIP (Cleaning In Place) sequence.",
        "Calibrate flow meters and sensors if due.",
        "Check various valves operation."
    ],

    // DECK MACHINERY
    "dm-wdls": [
        "Inspect anchor windlass brake lining for wear — replace if < 3mm.",
        "Check hydraulic oil level and condition in HPU.",
        "Operate windlass and check for abnormal noise or vibration.",
        "Inspect chain stopper and guillotine bar condition.",
        "Grease all accessible bearings and gears.",
        "Test emergency release operation.",
        "Check motor insulation resistance (Megger).",
        "Verify chain locker drainage is clear."
    ],
    "dm-moor": [
        "Inspect brake lining thickness and adjust brake band tension.",
        "Check drum for wire rope/rope groove wear.",
        "Inspect mooring wire/rope for broken strands or damage.",
        "Test hydraulic motor and check for leaks.",
        "Grease bearings and gear train.",
        "Verify emergency stop function.",
        "Check fairleads and roller condition."
    ],
    "dm-crn": [
        "Inspect wire rope for broken wires per ISO 4309 criteria.",
        "Check limit switches (hoist, luff, slew) operation.",
        "Inspect sheaves for groove wear and bearing play.",
        "Test overload protection system.",
        "Check hydraulic system for leaks, oil level, filters.",
        "Grease slew ring and all pivot points.",
        "Verify SWL test certificate is current.",
        "Inspect electrical cables and pendant controls."
    ],
    "dm-hc": [
        "Inspect hydraulic cylinder seals for leaks.",
        "Check HPU oil level, filter, and pressure settings.",
        "Operate hatch covers and check travel speed and alignment.",
        "Inspect rubber packing (weather tightness) — hose test.",
        "Check cleating devices and locking pins.",
        "Grease all hinge pins and roller guides.",
        "Inspect drain channels for blockage."
    ],

    // REFRIGERATION & HVAC
    "ref-comp": [
        "Check compressor oil level and condition via sight glass.",
        "Inspect suction and discharge valve plates for damage.",
        "Record suction/discharge pressures and superheat.",
        "Check for refrigerant leak using electronic detector.",
        "Inspect shaft seal for oil traces.",
        "Clean or replace suction filter/drier.",
        "Record motor amperage and compare with rated value."
    ],
    "ref-cond": [
        "Isolate condenser sea water side.",
        "Open end covers and clean tubes with nylon brushes.",
        "Inspect zinc anodes and renew if consumed > 50%.",
        "Pressure test to check for tube leaks.",
        "Check SW flow rate — clean sea chest strainer if low.",
        "Inspect condenser relief valve.",
        "Reassemble with new gaskets."
    ],
    "ref-evap": [
        "Check defrost timer and heater element operation.",
        "Clean evaporator coil fins (compressed air/water).",
        "Inspect fan motor bearings and blade condition.",
        "Verify room temperature calibration against reference thermometer.",
        "Check expansion valve operation and superheat setting.",
        "Inspect door gaskets/seals for cold room.",
        "Clear drain line for condensate."
    ],
    "ref-ac": [
        "Check AC compressor operation — suction/discharge pressure.",
        "Clean condenser coils or tubes.",
        "Inspect and clean AHU filter elements — replace if clogged.",
        "Check fan motor bearings and belt tension.",
        "Verify thermostat calibration in accommodation spaces.",
        "Check refrigerant charge level via sight glass.",
        "Inspect condensate drain pans and lines for blockage.",
        "Clean or replace cabin fan coil filters."
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
