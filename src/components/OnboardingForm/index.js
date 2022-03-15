import React, { useState } from 'react';
import CustomTextField from '../CustomTextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Icon from '@mui/material/Icon';
import HorizontalLinearStepper from '../Stepper';
import onBoardingFormContent from '../../constants/onboardingFormContent.json'

const initialState = {
  fullName: '',
  displayName: '',
  workspaceName: '',
  workspaceUrl: '',
  use: 'forMyself'
};

const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
  ({ checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: 'blue',
    }
  }),
);

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} style={{borderColor: checked && 'blue' }} {...props} />;
}

function OnboardingQuestions() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (name, event) => {
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const getStepContent = (activeStep) => {

    switch (activeStep) {
    case 0: {
      return (
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl font-semibold text-center pt-16 pb-4">{onBoardingFormContent[activeStep].heading}</p>
          <p className="text-xl text-stone-500 text-center pb-8">{onBoardingFormContent[activeStep].subHeading}</p>
            {onBoardingFormContent[activeStep].inputs.map((input) => (
              <div key={input.id} className='mb-4 flex flex-col'>
                <span className="text-lg font-semibold">{input.label}</span>
                <CustomTextField
                  required={input.required}
                  key={input.id}
                  value={formData[input.id]}
                  placeholder={input.placeholder}
                  onChange={(e) => handleChange(input.id, e)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  margin="normal"
                  fullWidth />
              </div>
            ))}
        </div>
      );
    }
    case 1: {
      return (
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl font-semibold text-center pt-16 pb-4">{onBoardingFormContent[activeStep].heading}</p>
          <p className="text-xl text-stone-500 text-center pb-8">{onBoardingFormContent[activeStep].subHeading}</p>
          {onBoardingFormContent[activeStep].inputs.map((input) => (
              <div key={input.id} className='mb-4 flex flex-col'>
                <p className="text-lg font-semibold">{input.label}</p>
                <CustomTextField
                  required={input.required}
                  key={input.id}
                  value={formData[input.id]}
                  placeholder={input.placeholder}
                  onChange={(e) => handleChange(input.id, e)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  margin="normal"
                  fullWidth />
              </div>
            ))}
        </div>
      );
    }
    case 2: {
      return (
        <div className="flex flex-col justify-center items-center">
          <p className="text-4xl font-semibold text-center pt-16 pb-4">{onBoardingFormContent[activeStep].heading}</p>
          <p className="text-xl text-stone-500 text-center pb-8">{onBoardingFormContent[activeStep].subHeading}</p>
            <RadioGroup
              value={formData.use}
              onChange={(e) => handleChange('use', e)}
              className='flex justify-center'
              row>
              {onBoardingFormContent[activeStep].inputs.map((input) => (
                <MyFormControlLabel
                  className="onboarding-radio-input w-1/4"
                  value={input.id}
                  key={input.id}
                  control={(
                    <Radio
                      icon={<></>}
                      checkedIcon={<></>}
                    />
                  )}
                  label={(
                    <div className='flex flex-col'>
                      <Icon>{input.icon}</Icon>
                      <p className="font-bold text-lg text-black">{input.label}</p>
                      <p className="text-stone-500">{input.subLabel}</p>
                    </div>
                  )}
                />
              ))}
            </RadioGroup>
        </div>
      );
    }
    case 3: {
      return (
        <div className="flex flex-col items-center">
          <p className="text-4xl font-semibold text-center pt-16 pb-4">{onBoardingFormContent[activeStep].heading}</p>
          <p className="text-xl text-stone-500 text-center pb-2">{onBoardingFormContent[activeStep].subHeading}</p>
          <CheckCircleIcon color='primary' style={{fontSize: 200}}/>
        </div>
      );
    }
    default:
      return <></>;
    }
  };

  return (
      <div className="w-7/12 flex flex-col justify-center items-center">
        <form>
          <HorizontalLinearStepper
            stepContentTitle={onBoardingFormContent}
            steps={Array.from(new Array(4)).fill(null)}
            getStepContent={getStepContent}
          />
        </form>
      </div>
  );
}

export default OnboardingQuestions;
