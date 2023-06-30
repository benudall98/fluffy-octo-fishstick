import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.login(this.loginForm.value.username, this.loginForm.value.password);
    }
  }

  login(username: string, password: string): void {
    // Make an API request to the server to authenticate the user
    
    // If the authentication is successful, the server will return a JWT
    // Store the JWT in the client-side storage (e.g., local storage)

    // Call the authService.login() method or handle the token storage accordingly
    this.router.navigateByUrl('/admin');
  }
}

