import React,{useState} from 'react';
import {Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button} from '@material-ui/core'
import useStyle from './styles';

const steps =['Shipping Address','Paymetn Details'];
const Checkout = () => {
    const [activestep,setActiveStep] = useState(0);
    const classes = useStyle();
    return (
        <>
        <div className={classes.toolbar}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activestep} className={classes.stepper}>
                    {steps.map((step)=>(
                        <Step key={step}>
                          <StepLabel>{step}</StepLabel>      
                        </Step>
                    ))}
                </Stepper>
            </Paper>
        </main>
        </>    
       
    )
}

export default Checkout
