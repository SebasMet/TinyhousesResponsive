import "./Banner.css";

function Banner({ head, text, img }) {
  return (
    <div className="banner">    
        <div className="text-section">
            <p>{text}</p>
        </div>

        <div className="img-section">
            {img}

        </div>

  
    </div>
  );
}

export default Banner;