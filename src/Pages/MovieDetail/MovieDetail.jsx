import { useLocation } from "react-router-dom";

const MovieDetail = () => {
    const location = useLocation()
    console.log(location.state);
    return (
        <div>
            <div className="detail-container">
                <div className="left-side-detail">

                </div>
                <div className="right-side-detail">

                </div>
            </div>
        </div>
    );
};

export default MovieDetail;