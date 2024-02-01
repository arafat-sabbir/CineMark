import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";

const MovieDetail = () => {
    const [formOpen, setFormOpen] = useState(false)
    console.log(formOpen);
    const location = useLocation()
    const movieDetail = location.state;

    // Handle Book Ticket Form 
    const handleBookTicket =(e)=>{
        e.preventDefault()
        const form = e.target;
        setFormOpen(!formOpen)
        toast.success("Ticket Booked Successfully")
       const name = form.name.value;
       const movieTitle = movieDetail.show.name;
       const email =form.email.value;
       const phone = form.phone.value;
       const numberOfPerson = form.numberOfPerson.value
       const bookingDetail = {name,movieTitle,email,phone,numberOfPerson}
       const existingTickets = JSON.parse(localStorage.getItem("TicketInfo")) || [];

       // Add the new bookingDetail to the existing tickets
       const updatedTickets = [...existingTickets, bookingDetail];
       localStorage.setItem("TicketInfo", JSON.stringify(updatedTickets));

       console.log(bookingDetail);
    }
    return (
        <div>
            <Link to={'/'}> <p className="go-home-btn">{<FaHome />}Go Home</p></Link>
            <div className="detail-container">
                <div className="left-side-detail">
                    <img className="detail-image" src={movieDetail.show?.image?.original} alt="" />
                </div>
                <div className="right-side-detail">
                    <h1>{movieDetail.show?.name}</h1>
                    <p>{movieDetail?.show?.premiered?.slice(0, 4)}</p>
                    <p className="movie-summary">{movieDetail?.show?.summary?.slice(3, movieDetail.show?.summary.length - 4)}</p>
                    <div>
                        <button onClick={() => setFormOpen(!formOpen)} className="booking-btn">Book A Ticket</button>
                        <a target="blank" href={movieDetail?.show?.url}><button className="watch-btn">Watch Now</button></a>
                    </div>
                </div>
                {
                    formOpen ? <form onSubmit={handleBookTicket} className={`${formOpen ? "booking-form-active" : "booking-form"}`} action="">
                        <input readOnly={true} defaultValue={movieDetail.show?.name} className="booking-input" type="text" name="" id="" />
                        <input required className="booking-input" placeholder="Name" type="text" name="name" id="" />
                        <input required className="booking-input" type="email" placeholder="Your Email" name="email" id="" />
                        <input required className="booking-input" type="number" placeholder="Number Of Person" name="numberOfPerson" id="" />
                        <input required placeholder="Your Phone" className="booking-input" type="text" name="phone" id="" />
                        <input required className="booking-btn" type="submit" value={"Book Ticket"} />
                    </form> : ""
                }
            </div>
        </div>
    );
};

export default MovieDetail;