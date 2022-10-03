import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './supabase';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from('todos').select();
      if (error) {
        console.error(error, data);
        return;
      }
      setTodos(data);
    };

    getData();
  }, []);

  console.log({ todos });

  return (
    <Container>
      <Typography variant="h1">Todo List</Typography>
      <Link to="/create">
        <Button variant="contained">Create a todo</Button>
      </Link>
      <Box paddingTop="12px">
        {todos.map((todo) => (
          <Box key={todo.id}>{todo.text}</Box>
        ))}
      </Box>
    </Container>
  );
};
