import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

const MovieDetail = () => {
    const [formOpen, setFormOpen] = useState(false)
    console.log(formOpen);
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
                    <div>
                        <button onClick={() => setFormOpen(!formOpen)} className="booking-btn">Book A Ticket</button>
                        <a target="blank" href={movieDetail?.show?.url}><button className="watch-btn">Watch Now</button></a>
                    </div>
                </div>
                {
                    formOpen ? <form className={`${formOpen ? "booking-form-active" : "booking-form"}`} action="">
                        <input readOnly={true} defaultValue={movieDetail.show?.name} className="booking-input" type="text" name="" id="" />
                        <input className="booking-input" placeholder="Name" type="text" name="name" id="" />
                        <input className="booking-input" type="email" placeholder="Your Email" name="email" id="" />
                        <input className="booking-input" type="number" placeholder="Number Of Person" name="numberOfPerson" id="" />
                        <input placeholder="Your Phone" className="booking-input" type="text" name="phone" id="" />
                        <input className="booking-btn" type="submit" value={"Book Ticket"} />
                    </form> : ""
                }
            </div>
        </div>
    );
};

export default MovieDetail;