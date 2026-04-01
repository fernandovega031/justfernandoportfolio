import React from 'react';
import styles from "./EverestRedesign.module.css";

import Goals from '@/components/sections/EverestRedesign/Goals';
import keyLearning from '@/components/sections/EverestRedesign/keyLearning';
import MarvelousSection from '@/components/sections/EverestRedesign/marvelous';
import GapSlide from '@/components/sections/EverestRedesign/GapSlide';
import KeyDecisionSection from '@/components/sections/EverestRedesign/KeyDecisions';
import TargetUserSection from '@/components/sections/EverestRedesign/TargetUser';
import DevicesShowcaseSection from '@/components/sections/EverestRedesign/DevicesShowcase';
import ThumbnailSection from '@/components/sections/EverestRedesign/Thumbnail';
import FinalResultSection from '@/components/sections/EverestRedesign/FinalResult';
import EmotionalIntentSection from '@/components/sections/EverestRedesign/EmotionalIntent';
import BeforeAfterSection from '@/components/sections/EverestRedesign/BeforeAfter';

const slides: React.FC[] = [
ThumbnailSection,
Goals,
GapSlide,
TargetUserSection,
BeforeAfterSection,
MarvelousSection,
KeyDecisionSection,
EmotionalIntentSection,
DevicesShowcaseSection,
FinalResultSection,
keyLearning

]


const ASLingoPage: React.FC = () => {



return (
    <section className={styles.eversetRedesign}>
{slides.map((SlideComponent, index) => (
  <SlideComponent key={index} />
))}

    </section>
);
};


export default ASLingoPage;