import { useEffect, useState } from "react";
import { gql, useApolloClient } from "@apollo/client";

function Movies() {
  const [movies, setMovies] = useState([]);
  const client = useApolloClient();

  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              title
              id
            }
          }
        `,
      })
      .then((result) => setMovies(result.data.allMovies));
  }, [client]);

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </div>
  );
}

export default Movies;
