import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Logout from '../components/LogoutButton';
import { RootState } from '../reduxStore';

const Home = () => {
  const { authenticatedUser, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  return (
    <Container>
      <div className="mt-5">
        {isAuthenticated && (
          <div>
            <p>{authenticatedUser?.username}</p>
            <p>{authenticatedUser?.email}</p>
            <p>{authenticatedUser?.fullName}</p>
            <Logout />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Home;
