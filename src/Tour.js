import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [isReadmore, setIsReadmore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>{ isReadmore ? info : `${info.substring(0,200)}...` }
        <button onClick={() => setIsReadmore(!isReadmore)}>{isReadmore ? 'show less' : 'read more'}</button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
      </footer>

    </article>
  );
};

export default Tour;
