import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='./images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='./images/img13.jpg'
              text="Experience the stunning view from world's highest peaks"
              label='Adrenalin'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='./images/img10.jpg'
              text="Travels to the world's least travelled places"
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='./images/img11.jpg'
              text='Experience the breath taking view of Spiti Valley'
              label='Breath Taking'
              path='/products'
            />
            <CardItem
              src='./images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;