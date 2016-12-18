import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './signup.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  user: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    /*this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        account: new FormGroup({
          email: new FormControl('', Validators.required),
          confirm: new FormControl('', Validators.required)
        })
    });*/
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      account: this.fb.group({
        email: ['', Validators.required],
        confirm: ['', Validators.required]
      })
    });
  }

onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}
