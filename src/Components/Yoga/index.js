import './index.css'

import styled from "styled-components";

const Card = styled.div`
  width: 30%;
  padding: 30px;
  margin: 20px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-out;

  &:hover {
    transform: translateY(-0.5rem);
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Heading = styled.h2`
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 0;
`;


const Yoga = () => {
    return(
        <div>
             <div className='yogatopcontainer'>
               <h1>Midweek Yoga Reset with Salubify, <br/>The Self Care Doula</h1>
             </div>
             <div className='yogavideocontainer'>
                <h1>6 Valuable Yoga Asanas for Senior Citizens</h1>
                <div className='yogacard'>
                    <Card>
                    <VideoWrapper>
                    <Video
                        src="https://www.youtube.com/embed/misHjEvOskI"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></Video>
                    </VideoWrapper>
                    <Heading>Trikonasana </Heading>
                    <p>Benefits:
                    Trikonasana reduces blood pressure, a common problem that most elderly people face. It brings stability, 
                    strength, and stamina in one’s life. It is also good for strengthening the arms and legs.</p>
                    </Card>

                    <Card>
                    <VideoWrapper>
                    <Video
                        src="https://www.youtube.com/embed/fIF016JROiA"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></Video>
                    </VideoWrapper>
                    <Heading>Vrikshasana </Heading>
                    <p>Benefits:
                    Vrikshasana improves balance, stability and posture.
                    It strengthens the legs, ankles, and feet while stretching the hips, thighs, and spine.</p>
                    </Card>

                    <Card>
                    <VideoWrapper>
                    <Video
                        src="https://www.youtube.com/embed/i_ix1f99Vn4"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></Video>
                    </VideoWrapper>
                    <Heading>Ardha Chakrasana</Heading>
                    <p>Benefits:
                    Ardha Chakrasana strengthens the lower back muscles, which can help to alleviate lower back pain.
                    This yoga pose also helps to stretch and open up the chest and lungs, which can improve breathing and posture.</p>
                    </Card>

                    <Card>
                    <VideoWrapper>
                    <Video
                        src="https://www.youtube.com/embed/_oM_OGcaSRQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></Video>
                    </VideoWrapper>
                    <Heading>Padahastasana </Heading>
                    <p>Benefits:
                    Padahastasana stretches the hamstrings, calves, and spine, which can help relieve back pain and improve posture.
                     Regular practice of Padahastasana can improve digestion, reduce stress, and calm the mind, promoting overall physical and mental well-being.</p>
                    </Card>

                    <Card>
                    <VideoWrapper>
                    <Video
                        src="https://www.youtube.com/embed/X-oPQ9eO360"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></Video>
                    </VideoWrapper>
                    <Heading>Bhadrasan </Heading>
                    <p>Benefits:
                    Bhadrasana helps to improve your posture by strengthening your spine and lower back muscles.
                    Practicing Bhadrasana can also help to reduce stress and anxiety, and improve your focus and concentration.</p>
                    </Card>

                    <Card>
                    <VideoWrapper>
                    <Video
                        src="https://www.youtube.com/embed/JDzDfraiR7U"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></Video>
                    </VideoWrapper>
                    <Heading>Ustrasana </Heading>
                    <p>Benefits:
                    Ustrasana, or Camel pose, can help to improve posture and strengthen the back muscles.
                    Ustrasana can also help to stimulate the digestive system, improve circulation, and reduce stress and anxiety.</p>
                    </Card>

                </div>
                <h1 className='ending'>"Yoga is not about touching your toes, it's about what you learn on the way down. 
                Keep practicing and embrace the journey towards a healthier and happier you, Sunita."</h1>
             </div>
        </div>
    )
}

export default Yoga