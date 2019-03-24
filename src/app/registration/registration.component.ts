import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  profileForm = this.fb.group({
      fullname: [''],
      City: [''],
      State: [''],
      email: [''],
      date: [''],
      Zip: [''],
      password: [''],
      confirm_password: [''],
      gender: ['']
    });
    updateProfile(){
    console.warn(this.profileForm.value);
    }
}
