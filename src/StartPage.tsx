import { Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const StartPage = () => {
  return (
    <Container>
      <h1>Hello World</h1>
      <Link to="todos">
        <Button variant="contained">Go to todo list</Button>
      </Link>
    </Container>
  );
};
