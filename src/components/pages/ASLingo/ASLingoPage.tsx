import React from 'react';



import SlideSection from '@/components/sections/ASLingo/slide';

import FromBegginerSection from '@/components/sections/ASLingo/fromBegginer';

import ProjectOverviewSection from '@/components/sections/ASLingo/projectOverview';

import GoalSolutionSection from '@/components/sections/ASLingo/goalSolution';

import PersonaSection from '@/components/sections/ASLingo/persona';

import EmpathyMapSection from '@/components/sections/ASLingo/empathyMap';

import UserFlowSection from '@/components/sections/ASLingo/userFlow';

import CompetitiveAuditSection from '@/components/sections/ASLingo/competitiveAudit';

import VisualDesignSection from '@/components/sections/ASLingo/visualDesign';

import WireframeSection from '@/components/sections/ASLingo/wireframe';


import TypographySection from '@/components/sections/ASLingo/typography';

import ColorSection from '@/components/sections/ASLingo/color';


import OutcomesSection from '@/components/sections/ASLingo/outcomes';

import MockupsSection from '@/components/sections/ASLingo/mockups';

import LessonSection from '@/components/sections/ASLingo/lesson';




const slides: React.FC[] = [
  SlideSection,
  FromBegginerSection,
  ProjectOverviewSection,
  GoalSolutionSection,
  PersonaSection,
  EmpathyMapSection,
  UserFlowSection,
  CompetitiveAuditSection,
  WireframeSection,
  VisualDesignSection,
  ColorSection,
  TypographySection,
  OutcomesSection,
  MockupsSection,
  LessonSection
]


const ASLingoPage: React.FC = () => {



return (
    <>
{slides.map((SlideComponent, index) => (
  <SlideComponent key={index} />
))}
    </>
);
};


export default ASLingoPage;