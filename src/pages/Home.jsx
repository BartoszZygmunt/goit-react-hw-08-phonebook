import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/selectors';

export const Home = () => {
  const isLogged = useSelector(selectLoggedIn);
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 10, pb: 8 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        {isLogged ? 'Hello my Friend!' : 'Dear Guest!'}
      </Typography>
      <Typography
        variant="h4"
        align="center"
        color="text.secondary"
        component="p"
      >
        {isLogged
          ? 'Click contacts menu to manage your phonebook.'
          : 'You are not logged in! Please sign in or register first!'}
      </Typography>
    </Container>
  );
};
