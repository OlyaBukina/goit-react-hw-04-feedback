import { nanoid } from 'nanoid';
import { Container, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {Object.keys(options).map(option => {
        return (
          <Button
            key={nanoid()}
            type="button"
            onClick={onLeaveFeedback}
            color={option}
          >
            {option}
          </Button>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};
