import { Link } from "react-router-dom";
import useMovies from "../../Utility/Hooks/useMovies";
import { IoIosTimer } from "react-icons/io";

const Home = () => {
    const { movies } = useMovies()
    return (
        <div className="parent-div">
            {movies?.map(item =>
                <div key={item.show.id} className="card">
                    <img className="movie-image" src={item.show?.image?.medium} alt="..." />
                    <div >
                       <div className="movie-title">
                       <h3 className="title">{item.show.name}</h3>
                        <p>Runtime : {item.show.runtime}</p>
                       </div>
                        <p className="genres"> {item.show.genres?.map((genre,index) => <p key={index} className="genre">{genre}</p>)}</p>
                        <Link state={item} to={'/movieDetail'} className=""><button className="detail-btn">View Detail</button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Home;