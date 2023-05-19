import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackContainer, FeedbackButton } from './FeedbackOption.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackContainer>
    {options.map(option => (
      <FeedbackButton
        type="button"
        data-feedback={option}
        onClick={onLeaveFeedback}
        key={option}
      >
        {option}
      </FeedbackButton>
    ))}
  </FeedbackContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
