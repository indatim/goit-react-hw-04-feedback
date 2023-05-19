import { useState } from 'react';

import { Container } from './App.styled';

import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';

const options = ['good', 'bad', 'neutral'];

export default function App () {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);

  const countTotalFeedback = () => {
    return goodFeedback + badFeedback + neutralFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    let totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.round((goodFeedback / totalFeedback) * 100) : 0;
  };

  const handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;

    switch (feedback) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;

      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
  )
}
