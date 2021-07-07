import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//==========================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//=============================================

// const data = {
//   id: 'id-1',
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308
//   }
// };

// const data = profile1;

//const user1 = user; // компонент

// {
//   "name": "Jacques Gluke",
//   "tag": "jgluke",
//   "location": "Ocho Rios, Jamaica",
//   "avatar": "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
//   "stats": {
//     "followers": 5603,
//     "views": 4827,
//     "likes": 1308
//   }
// }
// const profile = (<div className="profile">
//   <div className="description">
//     <img
//       src={data.avatar}
//       alt={data.name}
//       width="360"
//       className="avatar"
//     />
//     <p className="name">{data.name}</p>
//     <p className="tag">@{data.tag}</p>
//     <p className="location">{data.location}</p>
//   </div>

//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//       <span className="quantity">{data.stats.followers}</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//       <span className="quantity">{data.stats.views}</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//       <span className="quantity">{data.stats.likes}</span>
//     </li>
//   </ul>
// </div>);

// {/* <Profile
//   name={user.name}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// /> */}
// const elem1 = React.createElement('spam', {children: 'Hello'});

// const elem2 = React.createElement('spam', {children: 'word'});

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children:  'Hello word',
// });

//const jsxElement = <div>Hello word</div>
// const elem1 = <span>Hello</span>;
// const elem2 = <span>word</span>;
// const element = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(element);
