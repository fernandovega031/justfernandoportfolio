import React, { createContext, useContext, useState, useEffect } from 'react';


type Theme = 'light' | 'dark';


type ThemeContextType = {
theme: Theme;
toggleTheme: () => void;
};


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [theme, setTheme] = useState<Theme>(() => {
    
const stored = localStorage.getItem('theme');
return (stored as Theme) || 'light';
});


useEffect(() => {
document.documentElement.setAttribute('data-theme', theme);
}, [theme]);


const toggleTheme = () => {
setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
};


return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};


export const useTheme = () => {
const ctx = useContext(ThemeContext);
if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
return ctx;
};