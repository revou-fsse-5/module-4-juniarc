import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import '../../styles/stepper.css'

interface AuthStepperProps {
    activeStep: number,
    steps: string[],
}

function AuthStepper({ activeStep, steps } : AuthStepperProps){
    return(
        <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                return(
                    <Step key={label}{...stepProps}>
                        <StepLabel >{label}</StepLabel>
                    </Step>
                )
            })}
        </Stepper>
    )
}

export default AuthStepper;