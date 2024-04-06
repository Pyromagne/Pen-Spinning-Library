import React from "react";
import { Chip } from "@mui/material";

  const difficultyData = [
    {
      level: 'a',
      label: 'Easy',
      style: {
        color: 'RGB(80, 250, 123)',
        borderColor: 'RGB(80, 250, 123)',
        backgroundColor: "black",
        fontWeight: 'bold',
        borderWidth: '2px',
      }
    },
    {
      level: 'b',
      label: 'Normal',
      style: {
        color: 'RGB(139, 233, 253)',
        borderColor: 'RGB(139, 233, 253)',
        backgroundColor: "black",
        fontWeight: 'bold',
        borderWidth: '2px',
      }
    },
    {
      level: 'c',
      label: 'Hard',
      style: {
        color: 'RGB(255, 85, 85)',
        borderColor: 'RGB(255, 85, 85)',
        backgroundColor: "black",
        fontWeight: 'bold',
        borderWidth: '2px',
      }
    }
  ]

const DiffChip = ({diff}) => {
    let  chipStyle;
    let label;

    for(const difficultyItem of difficultyData) {
      if(diff === difficultyItem.level){
        chipStyle = difficultyItem.style;
        label = difficultyItem.label;
      }
    }

    return <Chip variant="outlined" label={label} sx={chipStyle} />;
    
}

export default DiffChip;