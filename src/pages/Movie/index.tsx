import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
    }
  }
`;

function Movie() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });

  if (loading) <h1>Fetching Movie...</h1>;
  if (error) <h1>Could not fetch :(</h1>;
  return <div>{data.movie.title}</div>;
}

export default Movie;
