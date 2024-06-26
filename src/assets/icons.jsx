/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

/* https://www.iconfinder.com/search?q=rose&family=iconoir
1. select the icon you want to use
2. copy SVG to clipboard
3. export const *YourIcon* = ({ color, size }) => (*PASTE SVG HERE*)
you may have to change the color and/or size in your code to {color} and/or {size}
which will match the CSS styling where its being called
*/

import React from "react";

export const TrashcanDelete = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    display="block"
    enableBackground="new 0 0 24 24"
  >
    <path
      fill="none"
      stroke={color ?? "currentColor"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 2.5v-2h4v2M1 2.5h14M9.533 13.5l.25-9M6.217 4.5l.25 9M2.661 4.5l.889 11h8.9l.888-11"
    ></path>
  </svg>
);

export const EditPencil = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-hidden="false"
    aria-labelledby="ltclid25_title "
  >
    <title id="ltclid25_title">Edit</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 14V11.7071L9.5 4.20708L11.7929 6.49998L4.29289 14H2ZM12.5 5.79287L13.7929 4.49998L11.5 2.20708L10.2071 3.49998L12.5 5.79287ZM11.1464 1.14642L1.14645 11.1464L1 11.5V14.5L1.5 15H4.5L4.85355 14.8535L14.8536 4.85353V4.14642L11.8536 1.14642H11.1464Z"
      fill={color ?? "currentColor"}
    ></path>
  </svg>
);

export const DateIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    enableBackground="new 0 0 500 500"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 500 500"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      clipRule="evenodd"
      d="M31.949,431.711c0,20.078,16.264,36.34,36.34,36.34h363.421  c20.078,0,36.34-16.262,36.34-36.34V113.718c0-20.079-16.262-36.343-36.34-36.343h-36.345V54.662  c0-12.536-10.176-22.713-22.711-22.713c-12.537,0-22.717,10.177-22.717,22.713v22.713h-36.34V54.662  c0-12.536-10.179-22.713-22.715-22.713s-22.712,10.177-22.712,22.713v22.713H231.83V54.662c0-12.536-10.177-22.713-22.713-22.713  c-12.539,0-22.716,10.177-22.716,22.713v22.713h-36.34V54.662c0-12.536-10.177-22.713-22.715-22.713  c-12.536,0-22.713,10.177-22.713,22.713v22.713H68.29c-20.077,0-36.34,16.264-36.34,36.343V431.711z M97.367,122.802h7.266v31.799  c0,12.538,10.177,22.715,22.713,22.715c12.539,0,22.715-10.177,22.715-22.715v-31.799h36.34v31.799  c0,12.538,10.177,22.715,22.716,22.715c12.536,0,22.713-10.177,22.713-22.715v-31.799h36.342v31.799  c0,12.538,10.176,22.715,22.712,22.715s22.715-10.177,22.715-22.715v-31.799h36.34v31.799c0,12.538,10.18,22.715,22.717,22.715  c12.535,0,22.711-10.177,22.711-22.715v-31.799h7.268c11.084,0,19.99,8.909,19.99,19.991v96.302c0,11.082-8.906,19.991-19.99,19.991  H97.367c-11.086,0-19.991-8.909-19.991-19.991v-96.302C77.375,131.711,86.28,122.802,97.367,122.802z"
      fill={color ?? "currentColor"}
      fillRule="evenodd"
    />
  </svg>
);

export const AddIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    id="Layer_1"
    enableBackground="new 0 0 32 32"
    version="1.1"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z" />
  </svg>
);

export const ArrowIcon = ({ color, size, right }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    viewBox="0 0 48 48"
    style={{ transform: right && "rotate(180deg)" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h48v48h-48z" fill="none" />
    <path d="M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z" />
  </svg>
);

export const ChecklistIcon = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color ?? "currentColor"}
    data-name="Layer 1"
    id="Layer_1"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title />
    <path d="M75,57.5h95a10,10,0,0,0,0-20H75a10,10,0,0,0,0,20Zm-35-20H30a10,10,0,0,0,0,20H40a10,10,0,0,0,0-20Zm35,70h75a10,10,0,0,0,0-20H75a10,10,0,0,0,0,20Zm-35-20H30a10,10,0,0,0,0,20H40a10,10,0,0,0,0-20Zm130,55H75a10,10,0,0,0,0,20h95a10,10,0,0,0,0-20Zm-130,0H30a10,10,0,0,0,0,20H40a10,10,0,0,0,0-20Z" />
  </svg>
);

export const CheckmarkCircle = ({ color, size }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs></defs>
    <title />
    <g data-name="Layer 28" id="Layer_28">
      <path
        fill={color ?? "currentColor"}
        d="M16,31A15,15,0,1,1,31,16,15,15,0,0,1,16,31ZM16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Z"
      />
      <path
        className="cls-1"
        d="M13.67,22a1,1,0,0,1-.73-.32l-4.67-5a1,1,0,0,1,1.46-1.36l3.94,4.21,8.6-9.21a1,1,0,1,1,1.46,1.36l-9.33,10A1,1,0,0,1,13.67,22Z"
      />
    </g>
  </svg>
);

export const ChatIcon = ({ size }) => (
  <svg 
    fill="none" 
    height={size} 
    strokeWidth="1.5" 
    viewBox="0 0 24 24" 
    width={size} 
    xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M8 10L12 10L16 10" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M8 14L10 14L12 14" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
)

export const NewsIcon = ({ color, size }) => (
    <svg 
      height={size} 
      version="1.1" 
      viewBox="0 0 60 60" 
      width={size} 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <title/>
        <desc/>
        <defs/>
    <g 
      fill={color}  
      fillRule={color ?? "currentColor"}  
      id="People" 
      stroke="currentColor" 
      strokeWidth="1"
    >
    <g 
      fill="#003459" 
      id="Icon-1"
    >
      <path 
        d="M5,14 C4.448,14 4,14.448 4,15 L4,49 C4,49.552 4.448,50 5,50 C5.552,50 6,49.552 6,49 L6,15 C6,14.448 5.552,14 5,14 L5,14 Z M22,22 C22,23.103 22.897,24 24,24 C25.103,24 26,23.103 26,22 C26,20.897 25.103,20 24,20 C22.897,20 22,20.897 22,22 L22,22 Z M18,31 C18,31.552 18.448,32 19,32 L25,32 C25.265,32 25.52,31.895 25.707,31.707 L32,25.414 L34.293,27.707 C34.684,28.098 35.316,28.098 35.707,27.707 L40,23.414 L44.293,27.707 C44.684,28.098 45.316,28.098 45.707,27.707 C46.098,27.316 46.098,26.684 45.707,26.293 L40.707,21.293 C40.316,20.902 39.684,20.902 39.293,21.293 L35,25.586 L32.707,23.293 C32.316,22.902 31.684,22.902 31.293,23.293 L24.586,30 L20,30 L20,18 L48,18 L48,30 L31,30 C30.448,30 30,30.448 30,31 C30,31.552 30.448,32 31,32 L49,32 C49.552,32 50,31.552 50,31 L50,17 C50,16.448 49.552,16 49,16 L19,16 C18.448,16 18,16.448 18,17 L18,31 Z M47,48 L37,48 C36.448,48 36,48.448 36,49 C36,49.552 36.448,50 37,50 L47,50 C47.552,50 48,49.552 48,49 C48,48.448 47.552,48 47,48 L47,48 Z M19,50 L29,50 C29.552,50 30,49.552 30,49 C30,48.448 29.552,48 29,48 L19,48 C18.448,48 18,48.448 18,49 C18,49.552 18.448,50 19,50 L19,50 Z M47,42 L37,42 C36.448,42 36,42.448 36,43 C36,43.552 36.448,44 37,44 L47,44 C47.552,44 48,43.552 48,43 C48,42.448 47.552,42 47,42 L47,42 Z M19,44 L31,44 C31.552,44 32,43.552 32,43 C32,42.448 31.552,42 31,42 L19,42 C18.448,42 18,42.448 18,43 C18,43.552 18.448,44 19,44 L19,44 Z M50,37 C50,36.448 49.552,36 49,36 L37,36 C36.448,36 36,36.448 36,37 C36,37.552 36.448,38 37,38 L49,38 C49.552,38 50,37.552 50,37 L50,37 Z M49,12 C49.552,12 50,11.552 50,11 C50,10.448 49.552,10 49,10 L45,10 C44.448,10 44,10.448 44,11 C44,11.552 44.448,12 45,12 L49,12 Z M19,12 L35,12 C35.552,12 36,11.552 36,11 C36,10.448 35.552,10 35,10 L19,10 C18.448,10 18,10.448 18,11 C18,11.552 18.448,12 19,12 L19,12 Z M19,38 L29,38 C29.552,38 30,37.552 30,37 C30,36.448 29.552,36 29,36 L19,36 C18.448,36 18,36.448 18,37 C18,37.552 18.448,38 19,38 L19,38 Z M60,5 L60,51 C60,56.551 56.551,60 51,60 L9,60 C3.449,60 0,56.551 0,51 L0,13 C0,10.243 2.243,8 5,8 C5.552,8 6,8.448 6,9 C6,9.552 5.552,10 5,10 C3.346,10 2,11.346 2,13 L2,51 C2,55.449 4.551,58 9,58 L51,58 C55.449,58 58,55.449 58,51 L58,5 C58,3.346 56.654,2 55,2 L13,2 C11.402,2 10,3.402 10,5 L10,53 C10,53.552 9.552,54 9,54 C8.448,54 8,53.552 8,53 L8,5 C8,2.29 10.29,0 13,0 L55,0 C57.757,0 60,2.243 60,5 L60,5 Z" id="newspaper"
      />
    </g>
    </g>
    </svg>
)

export const TuneFreq = ({ color, size }) => (
  <svg 
    height={size}
    id="svg5" 
    version="1.1" 
    viewBox="0 0 32 32" 
    width={size} 
    xmlns="http://www.w3.org/2000/svg" 
  >
    <defs id="defs2" />
    <g id="layer1" transform="translate(-60,-148)">
      <path 
        d="m 76,155.38477 c -2.643319,0 -4.806644,2.16527 -4.806641,4.80859 4e-6,2.30044 1.639219,4.2374 3.806641,4.70117 V 177 a 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 v -12.10547 c 2.167422,-0.46377 3.806637,-2.40073 3.806641,-4.70117 3e-6,-2.64332 -2.163322,-4.80859 -4.806641,-4.80859 z m 0,2 c 1.56244,0 2.806643,1.24615 2.806641,2.80859 C 78.806639,161.7558 77.562437,163 76,163 c -1.562437,0 -2.806639,-1.2442 -2.806641,-2.80664 -2e-6,-1.56244 1.244201,-2.80859 2.806641,-2.80859 z" 
        id="path19112" 
        style={{
          color: "#000000",
          fill: "#00c89f",
          fillOpacity: 1,
          fillRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4.1
        }}
      />
      <path 
        d="m 69.636719,153.82812 c -3.50634,3.50634 -3.506338,9.22218 0,12.72852 a 1.000005,1.000005 0 0 0 1.414062,0 1.000005,1.000005 0 0 0 0,-1.41406 c -2.742036,-2.74204 -2.742038,-7.15836 0,-9.90039 a 1.000005,1.000005 0 0 0 0,-1.41407 1.000005,1.000005 0 0 0 -1.414062,0 z m 11.3125,0 a 1.000005,1.000005 0 0 0 0,1.41407 c 2.742037,2.74203 2.742038,7.15835 0,9.90039 a 1.000005,1.000005 0 0 0 0,1.41406 1.000005,1.000005 0 0 0 1.414062,0 c 3.50634,-3.50634 3.506339,-9.22218 0,-12.72852 a 1.000005,1.000005 0 0 0 -1.414062,0 z" 
        id="circle19116" 
        style={{
          color: "#000000",
          fill: "#002cba",
          fillOpacity: 1,
          fillRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4.1
        }}
      />
      <path 
        d="m 85.193359,150 a 1,1 0 0 0 -0.708984,0.29297 1,1 0 0 0 0,1.41406 c 4.694667,4.69467 4.694668,12.27604 0,16.9707 a 1,1 0 0 0 0,1.41407 1,1 0 0 0 1.416016,0 c 5.458965,-5.45897 5.458963,-14.33987 0,-19.79883 A 1,1 0 0 0 85.193359,150 Z m -19.09375,0.29297 c -5.458957,5.45896 -5.458956,14.33986 0,19.79883 a 1,1 0 0 0 1.416016,0 1,1 0 0 0 0,-1.41407 c -4.694661,-4.69466 -4.694662,-12.27603 0,-16.9707 a 1,1 0 0 0 0,-1.41406 1,1 0 0 0 -1.416016,0 z" 
        id="circle19118" 
        style={{
          color: "#000000",
          fill: "#002cba",
          fillOpacity: 1,
          fillRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 4.1
        }}
      />
    </g>
  </svg>
);
