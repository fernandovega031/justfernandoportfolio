import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/organisms/Header/Header.tsx';
import HomePage from './components/pages/Home/HomePage.tsx';
import ProjectsPage from './components/pages/Projects/ProjectsPage.tsx';
import ContactPage from './components/pages/Contact/ContactPage.tsx';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext.tsx';

import ASLingoPage from './components/pages/ASLingo/ASLingoPage.tsx';
import EverestRedesign from './components/pages/EverestRedesign/EverestRedesign.tsx';
import MySpacePage from './components/pages/MySpace/MySpacePage.tsx';
import TruckBurgerPage from './components/pages/TruckBurger/TruckBurger.tsx';
import GalleryPage from './components/pages/Gallery/GalleryPage.tsx';




const App: React.FC = () => {
    const { theme } = useTheme();

return (
    
<BrowserRouter>
<Header />

<motion.div
    key={theme}
    layout
    animate={{ backgroundColor: theme === 'light' ? '#ffffff' : '#121212' }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    style={{minHeight: '100vh'}}
>
 <main>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/projects" element={<ProjectsPage />} />
  <Route path="/contact" element={<ContactPage />} />
   <Route path="/ASLingo" element={<ASLingoPage />} />
   <Route path="/TruckBurger" element={<TruckBurgerPage />} />
   <Route path="/MySpace" element={<MySpacePage />} />
   <Route path="/gallery" element={<GalleryPage />} />
   <Route path="/EverestRedesign" element={<EverestRedesign />} />
  </Routes>
 </main>
</motion.div>
</BrowserRouter>
);
};


export default App;