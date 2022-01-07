import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import KeyboardArrowLeftRounded from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';

export default function ArrowButton({direction,...props} ){
  const label = {
    left: 'Previous',
    right: 'Next',
  };
  return (
    <IconButton
      size="small"
      aria-label={label[direction]}
      {...props}
      sx={{
        color: "black",
        border: '1px solid ',
        borderColor: 'yellow',
        '&:hover': {
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'primaryDark.200' : 'grey.300'),
        },
        '&.Mui-disabled': {
          opacity: 0.5,
          color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : 'grey.700'),
          borderColor: (theme) => (theme.palette.mode === 'dark' ? 'primary.700' : 'grey.300'),
        },
        '& + .MuiIconButton-root': {
          ml: 2,
        },
        ...props.sx,
      }}
    >
      {direction === 'left' && <KeyboardArrowLeftRounded fontSize="small" />}
      {direction === 'right' && <KeyboardArrowRightRounded fontSize="small" />}
    </IconButton>
  );
}
