import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/assets/icons/left-arrow.png';
import BodyParts from './BodyParts';
import ExerciseCard from './ExerciseCard'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {data.map((item , key) => (
       
        <Box 
          key={key+item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyPart ? <BodyParts
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          /> :<ExerciseCard exercise={item}/>}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
