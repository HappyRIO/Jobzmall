import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';
import { coachings, mostPopulars } from '@/data/resumequestion';
// import StepConnector from '@mui/material/StepConnector'; 

const StyledStepLabel = styled(StepLabel)(() => ({
  '& .MuiStepLabel-label': {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  '& .MuiStepLabel-iconContainer': {
    marginLeft: '0',
  },
}));

interface StepperProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  mode: boolean;
  // setMode: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const VerticalStepper: React.FC<StepperProps> = ({ activeStep, setActiveStep, mode , setOpen, setClick }) => {
    const steps:string[] = [];
  const handleStepClick = (step: number) => {
    setActiveStep(step);
    setOpen(false);

    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 150);
  };

  if(mode) {
    mostPopulars.map((item) => {
        steps.push(item.name)
    });
  } else {
    coachings.map((item) => {
        steps.push(item.name)
    });
  }

  return (
    <Stepper activeStep={activeStep} orientation="vertical" >
      {steps.map((label, index) => (
        <Step key={label} onClick={() => handleStepClick(index)} className='my-6'>
          <StyledStepLabel
            StepIconComponent={() => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: index <= activeStep ? 'blue' : 'lightgray',
                  color: 'white',
                  fontSize: '1.2rem',
                }}
              >
                {index + 1}
              </div>
            )}
            
          >
            <div className='text-white'>{label}</div>
          </StyledStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default VerticalStepper; 