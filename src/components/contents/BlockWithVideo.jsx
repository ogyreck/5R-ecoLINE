import React from "react";
import "./BlockWithVideo.css";

class BlockWithVideo extends React.Component{
    onclick() {
        window.location.assign("./shop");
    }
    render() {
        return(
            <section className = "blockWithVideo">
                <div className = "sectionWithVideo">
                    <iframe className = "video" src="https://www.youtube.com/embed/gJAp5tWiN8Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className = "textAndButton">
                    <div className = "motivationText">Жить экологично - это легко, полезно и выгодно!</div>
                    <button className = "buttonToShop" onClick = {(e) => this.onclick(e)}>В магазин</button>
                </div>
            </section>
        );
    }
};

export default BlockWithVideo;