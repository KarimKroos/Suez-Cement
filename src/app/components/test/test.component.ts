import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private fb:FormBuilder) { }


  form = this.fb.group({
    smart: ['',Validators.required],
    mail: ['',[Validators.required,Validators.email]],
    pass1: ['',Validators.required],
    pass2: ['',Validators.required],
    tos: ['']

  })

  ngOnInit(): void {
  }

  onSubmit() :void{
console.warn(this.form.getRawValue());

  }

  get f(){
    return this.form.controls;
  }

}
