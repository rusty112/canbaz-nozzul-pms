export const USERS = [
    { id: "master", name: "Master", rank: "Captain", pin: "1111", icon: "👨‍✈️", color: "#e5a100" },
    { id: "co", name: "Chief Officer", rank: "C/O", pin: "2222", icon: "⚓", color: "#0ea5e9" },
    { id: "2o", name: "2nd Officer", rank: "2/O", pin: "3333", icon: "🧭", color: "#8b5cf6" },
    { id: "ce", name: "Chief Engineer", rank: "C/E", pin: "4444", icon: "🔩", color: "#ef4444" },
    { id: "2e", name: "2nd Engineer", rank: "2/E", pin: "5555", icon: "⚙️", color: "#f97316" },
    { id: "3e", name: "3rd Engineer", rank: "3/E", pin: "6666", icon: "🔧", color: "#10b981" },
];

export const ROLES = {
    master: { eng: true, dek: true, rs: true, lbl: "Full Access" },
    co: { eng: false, dek: true, rs: false, dkOnly: ["chain", "tanks", "vents", "cargo", "windlass", "mwinch", "hcovers", "acclad", "otherdk"], lbl: "Deck, Cargo, Mooring" },
    "2o": { eng: false, dek: true, rs: false, dkOnly: ["lsa", "ffe", "nav"], lbl: "Navigation, FFE, LSA" },
    ce: { eng: true, dek: false, rs: true, lbl: "All Engine + RightShip" },
    "2e": { eng: true, dek: false, eOnly: ["me", "ae"], lbl: "M/E, Aux Engines" },
    "3e": { eng: true, dek: false, eOnly: ["aux", "elec"], lbl: "ER Aux, Electrical" },
};
