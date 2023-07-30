
import { StepWiseInstruction } from "../interface/step-wise-instruction";

export class StepWiseInstructionFunctionality {
  stepsToSignUp:StepWiseInstruction[]=[
    {
      id:"1ststepToSignup",
      show:true,
      read:false,
      img: '../../../../assets/images/png/htsu-name.png',
      descriptions:[
        "Enter your firstname and surname (or lastname).",
        "click next button to fill basic information."
      ] ,
      figure: ["../../../assets/images/png/validatepersonaldetails.png","../../../assets/images/png/validatepersonaldetails-error.png"]
    },
    {
      id:"2ndStepToSignup",
      show:false,
      read:false,
      img: '../../../../assets/images/png/htsu-basicinfo.png',
      descriptions:[
        "Fill the basic information."
      ] ,
      figure: ["../../../assets/images/png/validatebasicinfo.png","../../../assets/images/png/validatebasicinfo-error.png"]
     
    },
    {
      id:"3rdStepToSignup",
      show:false,
      read:false,
      img: '../../../../assets/images/png/htsu-username.png',
      descriptions:[
        "Specify how you'll sign in."
      ] ,
      figure: ["../../../assets/images/png/validateusername.png","../../../assets/images/png/validateusername-error.png"]
      
    },
    {
      id:"4thStepToSignup",
      show:false,
      read:false,
      img: '../../../../assets/images/png/htsu-password.png',
      descriptions:[
        "Create a strong password."
      ] ,
      figure: ["../../../assets/images/png/signup-success.png","../../../assets/images/png/signup-error.png"]
    }
  ]

  next(index:number):StepWiseInstruction{
    this.read(index);
    const next = index + 1;
    this.show(next);
    return this.stepsToSignUp[next];
  }

  show(index:number):boolean{
    this.stepsToSignUp[index].show = false;
    if(this.isExist(index)){
      this.stepsToSignUp[index].show = true;
    }
    return this.stepsToSignUp[index].show;;
  }

  read(index:number):boolean{
    this.stepsToSignUp[index].read =false;
    if(this.isExist(index)) {
      this.stepsToSignUp[index].read =true;
    }
    return this.stepsToSignUp[index].read;
  }

  isExist(index:number): boolean{
    return index <= this.stepsToSignUp.length;
  }

}