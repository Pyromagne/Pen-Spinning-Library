import React from "react";
import { Chip } from "@mui/material";

const beginnerStyle = {
    color: 'RGB(80, 250, 123)',
    borderColor: 'RGB(80, 250, 123)',
    fontWeight: 'bold',
    borderWidth: '2px',
  };
  
  const normalStyle = {
    color: 'RGB(139, 233, 253)',
    borderColor: 'RGB(139, 233, 253)',
    fontWeight: 'bold',
    borderWidth: '2px',
  };
  
  const hardStyle = {
    color: 'RGB(255, 85, 85)',
    borderColor: 'RGB(255, 85, 85)',
    fontWeight: 'bold',
    borderWidth: '2px',
  };

const DiffChip = ({diff}) => {
    let  chipStyle;
    let label;

    if (diff === 'a') {
        chipStyle = beginnerStyle;
        label = 'Easy';
    }
    else if (diff === 'b') {
        chipStyle = normalStyle;
        label = 'Normal';
    }
    else if (diff === 'c') {
        chipStyle = hardStyle;
        label = 'Hard';
    }

    return <Chip variant="outlined" label={label} sx={chipStyle} />;
    
}

export default DiffChip;