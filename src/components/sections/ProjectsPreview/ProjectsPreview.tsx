import React from 'react';
import styles from './ProjectsPreview.module.css';
import ProjectContainer from '../../atoms/ProjectContainer/ProjectContainer';
import TruckBurger from "../../../assets/TruckBurgerFP.png";
import MySpace from "../../../assets/MySpaceFP.png";
import ASLingo from "../../../assets/ASLingo.png";
import Gallery from "../../../assets/gallery.png";

const ProjectsPreview: React.FC = () => {
return (
<section className={styles.preview}>
<h2>Featured Projects</h2>
      <section className={styles.portfolio}>
        <ProjectContainer path="/ASLingo"  projectName={"ASLingo"} projectDescription={"ASLingo is a web application that helps users learn American Sign Language (ASL) through interactive lessons and quizzes."} src={ASLingo} alt={"ASLingo's Portfolio"}/>
        <ProjectContainer path="/Truck Burger" projectName={"Truck Burger"} projectDescription={"Truck Burger is a web application that helps users order food from their favorite restaurante with a interactive touch"} src={TruckBurger} alt={"Truck Burger's Portfolio"}/>
        <ProjectContainer path="/My Space" projectName={"My Space"} projectDescription={"My Space is a web application that helps people find their ideal accomodation"} src={MySpace} alt={"My Space's Portfolio"}/>
        <ProjectContainer path="/Gallery" projectName={"Gallery"} projectDescription={"If you would like to see my content just click on this"} src={Gallery} alt={"My Gallery"}/>
      </section>
</section>
);
};


export default ProjectsPreview;