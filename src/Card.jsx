import moviePic from "./assets/movie.jpg";

function Card() {
  return (
    <div className="card">
      <img src={moviePic} alt="movie-pic" />
      <div>
        <h2>Movie Profile</h2>
        <p>Watch your moive at your own home</p>
      </div>
    </div>
  );
}
export default Card;
