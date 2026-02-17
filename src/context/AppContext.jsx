import { createContext, useContext, useState, useEffect } from 'react';
import { SHIPS } from '../data/ships';
import { USERS, ROLES } from '../data/users';
import { ENGINE_TREE } from '../data/engine';
import { DECK_TREE } from '../data/deck';
import { RIGHTSHIP_CHECKLIST } from '../data/rightship';
import { generateComplianceData } from '../utils/compliance';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [vid, setVid] = useState("v1"); // Default vessel: ORCUN C
    const [activePage, setActivePage] = useState("login"); // login, dash, detail, rs
    const [selectedItem, setSelectedItem] = useState(null); // For detail view

    // Compliance Data State (Persisted in memory per session)
    const [complianceData, setComplianceData] = useState({});

    // Initialize Compliance Data on Mount
    // Initialize Compliance Data on Mount
    useEffect(() => {
        const initialData = {};

        const processTree = (tree) => {
            tree.forEach(group => {
                if (group.ch) {
                    group.ch.forEach(item => {
                        // Handle Components with Units (Engine)
                        if (item.units) {
                            for (let i = 1; i <= item.units; i++) {
                                SHIPS.forEach(ship => {
                                    const key = `${ship.id}-${item.id}-${i}`;
                                    initialData[key] = generateComplianceData(item.id, item.iv, i);
                                });
                            }
                        }

                        // Handle Items with Tasks (Deck)
                        if (item.tasks) {
                            item.tasks.forEach((task, tIdx) => {
                                SHIPS.forEach(ship => {
                                    const key = `${ship.id}-${item.id}-task-${tIdx}`;
                                    initialData[key] = generateComplianceData(item.id, task.i, 0);
                                });
                            });
                        }
                    });
                }
            });
        };

        processTree(ENGINE_TREE);
        processTree(DECK_TREE);

        setComplianceData(initialData);
    }, []);

    const login = (id, pin) => {
        const u = USERS.find(u => u.id === id && u.pin === pin);
        if (u) {
            setUser(u);
            setActivePage("dash");
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        setActivePage("login");
        setSelectedItem(null);
    };

    const getRole = () => user ? ROLES[user.id] : null;

    const value = {
        user,
        vid,
        setVid,
        activePage,
        setActivePage,
        selectedItem,
        setSelectedItem,
        login,
        logout,
        role: getRole(),
        complianceData,
        ships: SHIPS,
        engineTree: ENGINE_TREE,
        deckTree: DECK_TREE,
        rightShipList: RIGHTSHIP_CHECKLIST,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
