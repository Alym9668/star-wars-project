import React from 'react';
import ChooseSide from '../../components/HomePage/ChooseSide';

import styles from './HomePage.module.css'
const HomePage = () => {
    return (
        <>
          <h1 className={styles.header__text}>HomePage</h1>  
          <ChooseSide/>
        </>
    );
};

export default HomePage;