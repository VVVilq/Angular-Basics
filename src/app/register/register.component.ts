import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  reactiveForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.reactiveForm=new FormGroup({
      imie: new FormControl('',[Validators.required,Validators.maxLength(1024)]),
      nazwisko: new FormControl('',[Validators.required,Validators.maxLength(1024)]),
      email: new FormControl('',[Validators.required,Validators.maxLength(255),Validators.email]),
      dataurodzenia: new FormControl('',Validators.required),
      adres: new FormControl('',[Validators.required,Validators.maxLength(255)]),
      kodpocztowy: new FormControl('',[Validators.required,Validators.maxLength(255)]),
      miasto: new FormControl('',[Validators.required,Validators.maxLength(512)]),
      regulamin: new FormControl('',[Validators.required]),
      spam: new FormControl('')
    })
  }
  get imie() {
    return this.reactiveForm.get('imie')
  }
  get nazwisko() {
    return this.reactiveForm.get('nazwisko')
  }
  get email() {
    return this.reactiveForm.get('email')
  }
  get dataurodzenia() {
    return this.reactiveForm.get('dataurodzenia')
  }
  get adres() {
    return this.reactiveForm.get('adres')
  }
  get kodpocztowy() {
    return this.reactiveForm.get('kodpocztowy')
  }

  get miasto() {
    return this.reactiveForm.get('miasto')
  }


}
