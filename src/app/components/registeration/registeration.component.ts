import { Component, OnInit } from '@angular/core';
import { FormBuilder ,  Validators } from '@angular/forms';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.registerForm.patchValue({
    //   name:"smart app"
    // });
  }

  form = this.fb.group({
    smart: ['',Validators.required],
    mail: ['',[Validators.required,Validators.email]],
    pass1: ['',Validators.required],
    pass2: ['',Validators.required],
    tos: ['']

  })

  onSubmit() :void{

  
   // var name = this.registerForm.controls['name'].value;
    // var mail = this.registerForm.controls['mail'].value;
    // var pass1 = this.registerForm.controls['pass1'].value;
    // var pass2 = this.registerForm.controls['pass2'].value;
    // var tos = this.registerForm.controls['tos'].value;



    console.log(this.form.getRawValue());

  }

 get f(){
    return this.form.controls;
  }

}
