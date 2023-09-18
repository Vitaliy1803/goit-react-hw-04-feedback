import PropTypes from 'prop-types';
import { Container } from './Notification.styled';

const Notification = ({ massage }) => {
  return (
    <Container>
      <p>{massage}</p>
    </Container>
  );
};

Notification.propTypes = {
  massage: PropTypes.string.isRequired,
};

export default Notification;
