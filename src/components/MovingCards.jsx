
import {movingCarouselData} from '../data/data'
import styled, { keyframes } from "styled-components";



const Card=(props)=>{
    return(
    

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4">
    <a href="#">
        <img className="rounded-t-lg" src={props.IMGURL} alt="" />
    </a>
</div>

    )
}





const AppContainer = styled.div`
  width: 100vw;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow:hidden;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const CarouselTrack = styled.div`
flex-shrink: 0;
display: flex;
justify-content: space-around;
white-space: nowrap;
// width: 100%; 
animation: ${scrollX} 60s linear infinite; 
`;


const CarouselContainer = styled.div`
display: flex;
width: 2000px;
overflow: hidden;
user-select: none;
&:hover ${CarouselTrack} {
    animation-play-state: paused;
  }
`;

const Animation = styled.div`
animation: ${scrollX} 30s; 
&:hover {
    animation-play-state: paused;
}
`



const MovingCards = () => {
  const cardItems = movingCarouselData.map((item,index) => (

    <Card key={index} IMGURL={item.img}/>

  ));

  return (
    <AppContainer className=" lg:py-12">
        <Wrapper>
    <CarouselContainer>
      <CarouselTrack>
        {cardItems}
        </CarouselTrack>
        <CarouselTrack>
        {cardItems}
        </CarouselTrack>
    </CarouselContainer>
    </Wrapper>
    </AppContainer>
  );
};

export default MovingCards;



