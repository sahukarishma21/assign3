import React from 'react';
import styles from './hero.module.css';

export default function Hero () {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
      <img src='https://images.pexels.com/photos/12736878/pexels-photo-12736878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'height='150px' width='150px' alt="Hero Image" />
      </div>
      <div className={styles.heroData}>
        <h1>Be there</h1>
        <p>Deliver brilliant message in the moments that truely define the brand</p>
        <button>see how</button>
      </div>
    </section>
  );
}