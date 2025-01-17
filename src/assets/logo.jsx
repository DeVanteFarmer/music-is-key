/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Logo.jsx
import React from 'react';

export const Logo = ({ size }) => (
  <svg 
    height={size} 
    viewBox="0 0 48 48" 
    width={size} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M0 0h48v48H0z" 
      fill="none"
    />
    <path 
      d="M30 12H6v4h24v-4zm0 8H6v4h24v-4zM6 32h16v-4H6v4zm28-20v16.37c-.63-.23-1.29-.37-2-.37-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6V16h6v-4H34z"
    />
    </svg>
);