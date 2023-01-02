import React, {useState} from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import './slider.scss';

const Slider =  () =>{
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ]

    const prevSlide = () =>{
        //if currentslide is 0 first image then make it last image
        //if not then descrease by 1
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev -1);
    };
    const nextSlide = () =>{
        // if currentslide is 2 last image then make it first image
        //if not then increase by 1
        setCurrentSlide(currentSlide ===2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt=''/>
                <img src={data[1]} alt=''/>
                <img src={data[2]} alt=''/>
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon/>
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}

export default Slider;