import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from './supabase';

export const CreateTodo = () => {
  const [text, setText] = useState('');

  const saveTodo = async () => {
    const { data, error } = await supabase.from('todos').insert([{ text: text, isChecked: false }]);
    console.log(error);
    console.log(data);
  };

  return (
    <Container>
      <Typography variant="h1">Create a todo</Typography>
      <Box marginBottom="20px">
        <Box marginBottom="6px">
          <TextField placeholder="Text" onChange={(e) => setText(e.target.value)} value={text} />
        </Box>
        <Button variant="contained" onClick={saveTodo}>
          Save todo
        </Button>
      </Box>

      <Link to="/todos">
        <Button variant="outlined">Back to overview</Button>
      </Link>
    </Container>
  );
};
