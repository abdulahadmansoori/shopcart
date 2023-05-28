import React, { useState, createContext } from 'react';
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ isCheckOut, setIsCheckOut ] = useState(false);
    const [ isPlaceOrder, setIsPlaceOrder ] = useState(false);
    const [ isDelivery, setIsDelivery ] = useState(false);

    const CloseHandler = () => {
        setIsOpen(false);
    }
    return <SidebarContext.Provider value={{ isOpen, setIsOpen, CloseHandler, isCheckOut, setIsCheckOut, isPlaceOrder, setIsPlaceOrder, isDelivery, setIsDelivery }}>{children}</SidebarContext.Provider>
}
export default SidebarProvider