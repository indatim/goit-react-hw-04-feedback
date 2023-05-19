import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import { StatisticsList, StatisticListItem } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    {total ? (
      <StatisticsList>
        <StatisticListItem> Good: {good} </StatisticListItem>
        <StatisticListItem> Neutral: {neutral} </StatisticListItem>
        <StatisticListItem> Bad: {bad} </StatisticListItem>
        <StatisticListItem> Total: {total} </StatisticListItem>
        <StatisticListItem>
          Positive feedback: {positiveFeedbackPercentage}%
        </StatisticListItem>
      </StatisticsList>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
