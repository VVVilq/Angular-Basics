import { Component, OnInit } from '@angular/core';
import { compareValidator } from '../shared/compare-validator.directive';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      login: new FormControl('', [Validators.required,Validators.maxLength(512)]),
      password: new FormControl('', [Validators.required,Validators.maxLength(512)]),
      passwordcf: new FormControl('', [Validators.required,Validators.maxLength(512),compareValidator('password')]),
    })
  }
}
