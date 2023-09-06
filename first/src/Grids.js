import Gridbtn from "./Gridbtn";
import './App.css';

function Grids(props) {
    const isNineMin = props.time === "9min";
    const isTwentyNine = props.time === "29min";
    const radiusClass = isNineMin ? "nine-min-radius" : (isTwentyNine ? "twenty-nine-min-radius" : "default-radius");
    const imgSrc = isNineMin ? "/blue.png" : (isTwentyNine ? "/yellow.png" : props.img);
    const colorClass = isNineMin ? "nine-min-color" : (isTwentyNine ? "twenty-nine-min-color" : "default-color");

    return (
        <div className="col-lg-4 col-md-4 col-sm-6 ">
            <div className={`card mb-4 shadow-sm ${colorClass}`}>
                <div className={`image-container ${radiusClass}`}>
                    <img src={imgSrc} alt="Image" style={{ width: '100%', height: 'auto' }} />
                    <p className="thumbnail-text">Thumbnail</p>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <Gridbtn />
                        <small className="text-muted">{props.time}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grids;
