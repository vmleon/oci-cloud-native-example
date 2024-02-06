import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Box, Typography, Button } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import useStore from "./store.js";

const GET_BOOK_BY_ID = gql`
  query bookDetails($id: ID) {
    bookById(id: $id) {
      id
      name
      pageCount
      author {
        id
        firstName
        lastName
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_BOOK_BY_ID, {
    variables: { id: "book-1" },
  });

  const count = useStore((state) => state.count);
  const increaseCount = useStore((state) => state.increaseCount);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ height: "100vh" }}>
          <Typography variant="h3">Cloud Native App</Typography>
          <Typography>Count: {count}</Typography>
          <Button variant="contained" onClick={increaseCount}>
            Hello world
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
