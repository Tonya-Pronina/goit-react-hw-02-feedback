import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css'
import PropTypes from 'prop-types';

export default function FeedbackOptions ({options, onFeedback}) {
    return ( 
        <ul className={css.optionsList}>
            {options.map(option => (
                <li key={option}>
                    <button className={css.optionBtn} type='button' onClick= {()=> onFeedback(option)}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
     );
};

FeedbackOptions.propTypes={
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired).isRequired,
    onFeedback: PropTypes.func.isRequired
}