import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private _fg:FormGroup = this.fb.group({
    name:[, [Validators.minLength(2), Validators.required]],
    contactNumber:[, [Validators.pattern('[0-9]{10}')]],
    email:[, [Validators.email, Validators.required]],
    description:['']
  })
  phoneInput:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    const phoneInputField = document.querySelector("#phone");
    this.phoneInput = (window as any).intlTelInput(phoneInputField, {
      preferredCountries: [ "in", "de","us", "co",],
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
  
  }
  
  process() {
    
    const phoneNumber = this.phoneInput.getNumber();
    console.log(phoneNumber)
    // info.style.display = "";
    // info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
  }

  submit(){
    if(this.fg.valid){
      window.location.href='https://wa.me/'+this.phoneInput.getNumber()+'?text=Hi, I am '+this.fg.value.name + '%0A'+ this.fg.value.description + '%0A%'+this.fg.value.email;
    }
  }
  get fg():FormGroup{
    return this._fg;
  }

}
