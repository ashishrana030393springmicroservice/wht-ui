import { FormGroup } from "@angular/forms";

export interface Widget{
  
  load:()=>void;
  refresh:()=>void;
}