import React from "react";
import './list.scss';
import Card from "../Card/Card";

const List = () =>{
    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: 'Long Sleeve Graphic T-shirt',
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: 'Long Sleeve Graphic T-shirt',
          isNew: true,
          oldPrice: 29,
          price: 18,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: 'Long Sleeve Graphic T-shirt',
          isNew: true,
          oldPrice: 99,
          price: 77,
        },
    
      ]
    return (
        <div className="list">
            {data?.map((item) => <Card item={item} key={item.id} />)}
            {/* <Card/> */}
        </div>
    )
};

export default List;