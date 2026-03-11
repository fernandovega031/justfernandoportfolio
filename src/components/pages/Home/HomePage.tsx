import React from 'react';
import HeroSection from '@/components/sections/Hero/HeroSection';
import Footer from '@/components/sections/Footer/Footer';
import AboutSection from '@/components/sections/About/AboutMe';
import SelectedWorkSection from '@/components/sections/SelectedWork/SelectedWork';
import ExperienceSection from '@/components/sections/Experience/Experience';


const HomePage: React.FC = () => {
return (
<>
<HeroSection />
{/*<ProjectsPreview /> */}
<SelectedWorkSection />
<ExperienceSection />
<AboutSection />
<Footer />

</>
);
};


export default HomePage;