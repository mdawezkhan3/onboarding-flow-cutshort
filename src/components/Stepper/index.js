import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const {
    steps = [], getStepContent
  } = props;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div>
      <div>
        <Stepper activeStep={activeStep}>
          {steps.map((label, idx) => (
            <Step key={idx}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      {getStepContent(activeStep)}
      <div className='text-center mt-4'>
        {
          activeStep === steps.length - 1
            ? (
              <Button className='w-96' variant="contained" color="primary">
                Launch Eden
              </Button>
            ) : (
              <Button className='w-96' variant="contained" color="primary" onClick={handleNext}>
                Create Workspace
              </Button>
            )
        }
      </div>
    </div>
  );
}
