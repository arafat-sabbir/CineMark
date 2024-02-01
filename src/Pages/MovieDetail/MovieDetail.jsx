import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const MovieDetail = () => {
    const location = useLocation()
    const movieDetail = location.state;
    return (
        <div>
            <Link to={'/'}> <p className="go-home-btn">{<FaHome />}Go Home</p></Link>
            <div className="detail-container">
                <div className="left-side-detail">
                    <img className="detail-image" src={movieDetail.show?.image?.original} alt="" />
                </div>
                <div className="right-side-detail">
                    <h1>{movieDetail.show.name}</h1>
                    <p>{movieDetail?.show?.premiered?.slice(0, 4)}</p>
                    <p className="movie-summary">{movieDetail?.show?.summary?.slice(3, movieDetail.show.summary.length - 4)}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;