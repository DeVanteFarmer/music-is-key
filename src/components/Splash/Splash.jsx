/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import "./Splash.css";

export const Splash = () => {
  const navigate = useNavigate();

  const enterSite = () => {
    navigate('/MusicPage');
  };

  return (
    <div className='splash-container'>
      <Container className="text-center mt-5">
        <h1>Welcome to Music-Is-KEY!</h1>
        <h2>
          <span>
            Different musical keys can influence our emotions and mental states by evoking specific moods and feelings.
            For example, major keys, like C Major or G Major, are often associated with happy, upbeat, and joyful emotions,
            making them perfect for stimulating positive feelings and energy. On the other hand, minor keys, such as A Minor or D Minor,
            tend to evoke more introspective, melancholic, and somber emotions, which can be soothing and meditative. The key of a song,
            combined with its tempo and melody, can significantly impact our psychological state, providing a powerful tool for emotional
            expression and mental well-being.
          </span>
        </h2>
        <Button color="dark" onClick={enterSite}>Enter Here</Button>
      </Container>
    </div>
  );
};
