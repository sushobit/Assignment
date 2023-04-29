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
  font-size: 1.5rem;
  text-align: center;
  margin: 2rem 0;
`;



function Diet() {
    return (
        <div>
            <div className='diettop'>
                <p>Salubify Nutrition</p>
                <h1>Healthy Eating Refresh</h1>
                <p>Healthy eating in real life</p>
            </div>

            <div className='videocontainer'>
                <h1>Here some best videos for beautiful Healthy Diet</h1>
                <div className='cardss'>
                        <Card>
                        <VideoWrapper>
                        <Video
                            src="https://www.youtube.com/embed/KDfj0JusPS8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></Video>
                        </VideoWrapper>
                        <Heading>5 Healthy Veg Breakfast Options High Protein </Heading>
                        </Card>

                        <Card>
                        <VideoWrapper>
                        <Video
                            src="https://www.youtube.com/embed/qgA-0R5Ssm8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></Video>
                        </VideoWrapper>
                        <Heading>Top 6 High Protein Foods Veg & Non Veg </Heading>
                        </Card>

                        <Card>
                        <VideoWrapper>
                        <Video
                            src="https://www.youtube.com/embed/8eUqEutfk2M"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></Video>
                        </VideoWrapper>
                        <Heading>Full Day of Eating My Diet Secret </Heading>
                        </Card>

                        <Card>
                        <VideoWrapper>
                        <Video
                            src="https://www.youtube.com/embed/v9wAxh4Y8s8"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></Video>
                        </VideoWrapper>
                        <Heading>5 Healthy & Quick Snacks </Heading>
                        </Card>
                </div>
                <h1 className='ending'>Sunita, as we age, our dietary needs may change. It's important to know the appropriate serving sizes and nutritional requirements for your age. If you're unsure about what to eat, consult with your healthcare provider, a family member, or a registered dietitian. 
                Remember to prioritize your health and speak with your doctor about any concerns or specific health needs you may have.</h1>
            </div>


        </div>
    );
}

export default Diet