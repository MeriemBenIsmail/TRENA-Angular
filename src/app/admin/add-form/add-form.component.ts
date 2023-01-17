import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  @Input() isVisible: boolean = true;
  errorMessage: string = '';
  @Output() sendVisible = new EventEmitter();
  loading: boolean = false;
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  onClose() {
    this.isVisible = false;
    this.sendVisible.emit(false);
  }
  onSubmit(formulaire: NgForm) {
    const { username, email, password } = formulaire.form.value;
    this.loading = true;
    this.userService.add(username, email, password).subscribe(
      (response) => {
        setTimeout(() => {
          this.isVisible = false;
          window.location.reload();
        });
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
        this.errorMessage = error.error.message;
      }
    );
  }
}
