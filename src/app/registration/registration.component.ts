import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators} from "@angular/forms";
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
      fullname: ['',Validators.required],
      City: ['',Validators.required],
      State: ['',Validators.required],
      email: ['',Validators.required, Validators.email],
      date: ['',Validators.required],
      Zip: ['',Validators.required],
      password: ['',Validators.required],
      gender: ['',Validators.required]
    });
    updateProfile(){
    console.warn(this.profileForm.value);
    }
}
