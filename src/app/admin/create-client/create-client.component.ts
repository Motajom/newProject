import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { MatDatepickerInputEvent } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
age: number;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      dClient: ['', Validators.required],
      title: ['', Validators.required],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      oName: ['', Validators.required],
      admitted: ['', Validators.required],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', Validators.required],
      mStatus: ['', Validators.required],
      occupation: ['', Validators.required],
      nationality: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }


  computeAge(val: MatDatepickerInputEvent<Date>){
    var now: Date = new Date()
    if (val.value.getMonth() > now.getMonth()){
      this.age = (now.getFullYear() - val.value.getFullYear()) - 1;
    } 
    else {
      this.age = now.getFullYear() - val.value.getFullYear();
    }
    console.log(this.age)
  }

  submitt(){
    console.log(this.firstFormGroup.value)
  }
}

