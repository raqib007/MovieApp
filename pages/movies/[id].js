import { useRouter } from "next/router";
import { getMovieById } from "../../action";

const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const movie = props.movie;

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
        <p>{movie.genre}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </div>
      <p className="desc-size">{movie.longDesc}</p>
      <style jsx>{`
        .desc-size {
          font-size: 21px;
        }
      `}</style>
    </div>
  );
};

Movie.getInitialProps = async (context) => {
  const { id } = context.query;
  const movie = await getMovieById(id);
  return { movie };
};

export default Movie;
