import React from 'react';
import {Box} from '../styles/box';
import {Svg} from '../styles/svg';

export const NotificationIcon = () => {
   return (
      <Svg
         width="28"
         height="24"
         viewBox="0 0 28 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         css={{
            cursor: 'pointer',
         }}
      >
         <Svg.Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0005 22C13.1005 22 14.0005 21.1 14.0005 20H10.0005C10.0005 21.1 10.8905 22 12.0005 22ZM18.0005 16V11C18.0005 7.93 16.3605 5.36 13.5005 4.68V4C13.5005 3.17 12.8305 2.5 12.0005 2.5C11.1705 2.5 10.5005 3.17 10.5005 4V4.68C7.63054 5.36 6.00054 7.92 6.00054 11V16L4.71054 17.29C4.08054 17.92 4.52054 19 5.41054 19H18.5805C19.4705 19 19.9205 17.92 19.2905 17.29L18.0005 16Z"
            css={{
               fill: '$accents6',
            }}
         />
         <Svg.Rect
            css={{
               fill: '$red600',
            }}
            x="13"
            width="15"
            height="16"
            rx="7.5"
         />
         <Svg.Path
            d="M18.0408 12V11.0483L20.5657 8.57315C20.8072 8.32931 21.0084 8.11269 21.1694 7.9233C21.3304 7.7339 21.4511 7.55043 21.5316 7.37287C21.6121 7.19531 21.6523 7.00592 21.6523 6.80469C21.6523 6.57505 21.6003 6.37855 21.4961 6.2152C21.3919 6.04948 21.2487 5.92164 21.0664 5.83168C20.8841 5.74171 20.677 5.69673 20.445 5.69673C20.2058 5.69673 19.9963 5.74645 19.8164 5.84588C19.6365 5.94294 19.4968 6.08144 19.3974 6.26136C19.3003 6.44129 19.2518 6.65554 19.2518 6.90412H17.9982C17.9982 6.44247 18.1036 6.04119 18.3143 5.70028C18.525 5.35937 18.815 5.09541 19.1843 4.90838C19.556 4.72135 19.9821 4.62784 20.4627 4.62784C20.9504 4.62784 21.3789 4.71899 21.7482 4.90128C22.1175 5.08357 22.404 5.33333 22.6076 5.65057C22.8136 5.9678 22.9165 6.33002 22.9165 6.73722C22.9165 7.00947 22.8645 7.27699 22.7603 7.53977C22.6561 7.80256 22.4727 8.09375 22.2099 8.41335C21.9495 8.73295 21.5837 9.12003 21.1126 9.57457L19.859 10.8494V10.8991H23.0266V12H18.0408Z"
            fill="white"
         />
      </Svg>
   );
};
