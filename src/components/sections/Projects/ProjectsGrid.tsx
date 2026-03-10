import React from 'react';
import styles from './ProjectsGrid.module.css';


const ProjectsGrid: React.FC = () => {
return (
<section className={styles.grid}>
<h2 className={styles.title}>Projects</h2>
<div className={styles.container}>
<article className={styles.card}>Project A</article>
<article className={styles.card}>Project B</article>
<article className={styles.card}>Project C</article>
</div>
</section>
);
};


export default ProjectsGrid;