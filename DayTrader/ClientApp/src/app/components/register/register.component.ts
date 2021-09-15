import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { AlertService, MessageSeverity, DialogType } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { ConfigurationService } from '../../services/configuration.service';
import { Utilities } from '../../services/utilities';
import { UserRegister } from '../../models/user-register.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  userLogin = new UserRegister();
  isLoading = false;
  formResetToggle = true;
  modalClosedCallback: () => void;
  loginStatusSubscription: any;

  @Input()
  isModal = false;


  constructor(private alertService: AlertService, private authService: AuthService,
    private router: Router, private formBuilder: FormBuilder, private configurations: ConfigurationService) {
    if (this.authService.currentUser) {
      this.router.navigate(['/']);
    }
  }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }

  

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

  onSubmit() {
   

      // reset alerts on submit
      this.alertService.resetStickyMessage();

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

    this.isLoading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
    
       
    }
}
