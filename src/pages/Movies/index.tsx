import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
  }
`;

function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  if (loading) return <h1>loading...</h1>;
  if (error) return <h1>Could not fetch :(</h1>;

  return (
    <div>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}

export default Movies;
