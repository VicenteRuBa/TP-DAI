import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuDado = ({ children }) => {
    const [menu, setMenu] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [averageHealthScore, setAverageHealthScore] = useState(0);

    const añadirPlato = (dish) => {
        if (menu.length < 4) {
            setMenu([...menu, dish]);
        }
    };

    const eliminarPlato = (id) => {
        setMenu(menu.filter(dish => dish.id !== id));
    };

    return (
        <MenuContext.Provider value={{ menu, añadirPlato, eliminarPlato, totalPrice, averageHealthScore }}>
            {children}
        </MenuContext.Provider>
    );
};
