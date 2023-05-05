import "./Banner.css";

function Banner({ head, text, img }) {
  return (
    <div className="banner">
      <div className="text-section">
        <h1>{head}</h1>
        <p>{text}</p>
      </div>

      <div className="image-section">
        <img id="image" src={img}></img>

      </div>
    </div>
  );
}

export default Banner;