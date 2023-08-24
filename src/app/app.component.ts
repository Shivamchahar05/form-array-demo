import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'form-array-demo';
  //STEP 1
  formArrayExample!: FormGroup;

  constructor(
    //STEP 2
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    //STEP 3
    this.createForm();
    this.addLocations(); //if you required default controls
  }

  //STEP 4
  createForm() {
    this.formArrayExample = this._fb.group({
      businessName: [''],
      ownerInfo: this._fb.group({
        name: [''],
        gender: ['']
      }),
      locations: this._fb.array([])
    })
  }

  //STEP 5
  createLocation(): FormGroup {
    return this._fb.group({
      address: [''],
      mobile: [''],
      city: [''],
      state: ['']
    });
  }

  //STEP 6
  get formControls() {
    return this.formArrayExample.controls;
  }

  //STEP 7
  addLocations() {
    this.locations.push(this.createLocation());
  }

  //STEP 8
  removeLocations(index: number) {
    this.locations.removeAt(index);
  }

  //STEP 9
  get locations() {
    return this.formArrayExample.get("locations") as FormArray;
  }

  //STEP 10
  locationsByIndex(index: number) {
    const byIndex = this.formArrayExample.get("locations") as FormArray;
    return byIndex.controls[index];
  }

  submitHandler() {
    console.log(this.formArrayExample.value);

  }



}
