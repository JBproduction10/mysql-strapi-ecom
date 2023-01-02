import React from 'react'; //{ useEffect }
import Card from '../Card/Card';
import './featuredProducts.scss';


const FeaturedProducts = ({type}) => {
  // const {data, loading, error} = useEffect(
  //   `/products?populate=*&[filters][type][$eq]=${type}`
  // );
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
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus, facere et? Ad illum non placeat,
          ut dolorum reiciendis saepe obcaecati sapiente tempora,
          aperiam porro debitis ratione quos veritatis autem ipsum.
        </p>
      </div>
      <div className='bottom'>
        {/* {error
          ? 'Something went wrong'
          : loading
          ? 'loading'
          : data?.map((item) => <Card item={item} key={item.id}/>)
        } */}
        {data?.map((item) => <Card item={item} key={item.id}/>)}
      </div>
    </div>
  )
}

export default FeaturedProducts