import React, {Fragment, useCallback, useState} from "react";
import styles from './works.module.scss';
import ReactMixitup from 'react-mixitup';
import { shuffle, range } from 'lodash';

export const Works= () => {
    const [keys, setKeys] = useState([1, 2, 3, 4]);
    const updateKeys = useCallback(() => {
        setKeys(updateKeys(range(Math.round(Math.random() * 15))));
    }, []);

    const renderCell = useCallback(({ key, ref, style }) => (
        <div key={key} ref={ref} style={{ ...style, background: 'red' }}>
            {key}
        </div>
    ), []);


    return(
        <div className={styles.works}>
            <span className={styles.title}></span>
            <Fragment>
                <button onClick={updateKeys}>Shuffle</button>
                <ReactMixitup renderCell={renderCell} keys={keys} />
            </Fragment>
        </div>
    )
}

