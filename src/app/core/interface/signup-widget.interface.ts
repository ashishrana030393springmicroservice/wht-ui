import { FormGroup } from "@angular/forms";
import { Widget } from "./widget.interface";

export interface SignupWidget extends Widget{
  isRefreshing:boolean;
  value:()=>any;
  valid:()=>boolean;
}