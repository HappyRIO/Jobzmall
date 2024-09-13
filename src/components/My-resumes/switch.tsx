"use client"
import * as React from 'react';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';

interface Props {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SwitchControl:React.FC<Props> = ({ checked, setChecked }) => {
  // const [checked, setChecked] = React.useState<boolean>(false);
  const [bgColor, setBgColor] = React.useState<string>("bg-[#22C55E]");
  return (
      <Switch
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        {
          setChecked(event.target.checked)
          {checked ? setBgColor("bg-[#22C55E]") : setBgColor("bg-[#EAB308]") }
        }
        }
        variant='outlined'
        slotProps={{
          track: {
            children: (
              <React.Fragment>
                <Typography className='absolute left-0 flex justify-center items-center text-sm text-[#A3A3A3] bg-[#171717] h-[34px] w-[90px] -translate-x-[9.5px] rounded-l-full' component="span" level="inherit" sx={{ ml: '10px' }}>
                <BoltRoundedIcon fontSize='small'/>Pay Now
                </Typography>
                <Typography className='absolute right-0 flex justify-center items-center text-sm text-[#A3A3A3] bg-[#171717] h-[34px] w-[90px] translate-x-2 rounded-r-full' component="span" level="inherit" sx={{ mr: '8px' }}>
                  <AccessTimeFilledRoundedIcon fontSize='small'/>Pay Later
                </Typography>
              </React.Fragment>
            ),
            
          },
          thumb: {
            children: 
                <Typography className={`absolute flex justify-center items-center text-sm text-white ${bgColor} h-[34px] w-[90px] rounded-full left-0 -translate-x-[9.5px]`}component="span" level="inherit" sx={{ ml: '10px' }}>
                  {checked ? <AccessTimeFilledRoundedIcon fontSize='small'/> : <BoltRoundedIcon fontSize='small'/>}
                  <div>Pay Now</div>
                </Typography>
            // <Typography className='absolute left-0 flex justify-center items-center text-white bg-[#22C55E] h-full text-sm m-0 text-nowrap' component="span" level="inherit" sx={{ ml: '10px' }}>
            // <BoltRoundedIcon className='text-xs1' fontSize='small'/><div>Pay Now</div>
            // </Typography>
            
          },
        }}
        sx={{
          opacity: 60,
          "--Switch-trackWidth": "180px",
          "--Switch-gap": "0px",
          "--Switch-trackHeight": "36px",
          "--Switch-thumbSize": "34px",
          "--Switch-thumbRadius": "99px",
          "--Switch-thumbWidth": "90px",
          "--Switch-thumbOffset": "1px",
          "--Switch-trackRadius": "99px",
          "--Switch-trackBg": "transparent",
        }}
      />
  );
}

export default SwitchControl;