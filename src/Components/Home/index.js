import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className='all'>
      <div className="thought">
        <h1 className='thoughthead'>Hey Sunita, let's prioritize our health <br/>and happiness and make the most of our time!</h1>
        <p className='thoughpara'>Here is a simple formula for a healthy and happy life: prioritize exercise and yoga,<br/> maintain a balanced diet, and find joy in your favorite hobbies and entertainment.</p>
      </div>
      <div className='imagecont'>
        <div className='containerdetails'>
          <h1><span className='salubiname'>Salubify</span> can be your companion in maintaining a healthy and happy lifestyle.</h1>
          <p>No matter your age, it's important to prioritize your health and well-being to prevent illness and promote longevity. However, as you get older, your immune system may become weaker, making you more vulnerable to infections and illnesses.
            Therefore, it's essential to make healthy lifestyle choices to boost your immune system and reduce your risk of developing infections or illnesses. By prioritizing your health and well-being, you can enjoy a healthy and happy life at any age.</p>
        </div>
        <img className='image' alt='' src='https://media.istockphoto.com/id/838254540/photo/laughing-senior-woman-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=jHZ3tdA4cvpNNFyeSt8lCPZU6Gk-NYF2Eog7-TSR8r8='/>
      </div>
      <div className='tips'>
        <h2>Nine Tips to Stay Healthy Year-Round</h2>
        <ol>
          <li>Eat a balanced and nutritious diet that includes plenty of fruits, vegetables, whole grains, and lean proteins.</li>
          <li>Stay hydrated by drinking plenty of water throughout the day.</li>
          <li>Get regular exercise, including both cardio and strength training.</li>
          <li>Get enough sleep and rest to allow your body to recharge.</li>
          <li>Manage stress levels through techniques such as meditation, yoga, or deep breathing.</li>
          <li>Avoid harmful habits such as smoking and excessive drinking.</li>
          <li>Stay up-to-date with vaccinations and receive regular check-ups and screenings to monitor your health.</li>
          <li>Practice good hygiene, such as washing your hands frequently and covering your mouth and nose when coughing or sneezing.</li>
          <li>Stay connected with friends and family for emotional support and social interaction.</li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
