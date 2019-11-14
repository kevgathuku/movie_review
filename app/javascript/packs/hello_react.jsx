// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import Rating from 'react-rating';
import StarOn from 'images/star-on.png';
import StarOff from 'images/star-off.png';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Rating
      initialRating={1}
      emptySymbol={<img src={StarOff} className="icon" />}
      placeholderSymbol={<img src={StarOff} className="icon" />}
      fullSymbol={<img src={StarOn} className="icon" />}
    />,
    document.getElementById('reviews-root')
  );
});
