import React from 'react';
import css from 'components/Statistics/Statistics.module.css'
import PropTypes from 'prop-types';

export default function Statistics ({ good, neutral, bad, total, positivePercentage }) {
    return ( 
    <ul className={css.statisticValueList}>
       <li className={css.statisticValue}>Good: {good}</li>
       <li className={css.statisticValue}>Neutral: {neutral} </li>
       <li className={css.statisticValue}>Bad: {bad}</li>
       <li className={css.statisticValue}>Total: {total}</li>
       <li className={css.statisticValue}>Positive feedback: {positivePercentage}%</li>
    </ul>
    );
};


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}