// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Rating from 'react-rating';
import StarOn from 'images/star-on.png';
import StarOff from 'images/star-off.png';

const Review = ({ review }) => (
  <div>
    <Rating
      readonly
      initialRating={review.rating}
      emptySymbol={<img src={StarOff} className="icon" />}
      placeholderSymbol={<img src={StarOff} className="icon" />}
      fullSymbol={<img src={StarOn} className="icon" />}
    />
    <p>{review.comment}</p>
  </div>
);

function ReviewInput() {
  const [rating, setRating] = useState(0);

  return (
    <Rating
      emptySymbol={<img src={StarOff} className="icon" />}
      fullSymbol={<img src={StarOn} className="icon" />}
      onClick={value => {
        setRating(value);
      }}
      initialRating={rating}
    />
  );
}

const Reviews = ({ reviews }) => (
  <div className="reviews">
    {reviews.map(review => (
      <Review review={review} key={review.id} />
    ))}
  </div>
);

document.addEventListener('turbolinks:load', () => {
  console.log('Turbolinks Load');
  const node = document.getElementById('reviews_root');
  const ratingNode = document.getElementById('review_rating');

  if (node) {
    console.log('node available');
    const reviews = JSON.parse(node.dataset.reviews);
    console.log('Done! reviews.length', reviews.length);
    ReactDOM.render(<Reviews reviews={reviews} />, node);
  }

  if (ratingNode) {
    ReactDOM.render(<ReviewInput />, ratingNode);
  }
});
