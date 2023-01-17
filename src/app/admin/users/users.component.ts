import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  errorMessage: string = '';
  users: User[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        this.errorMessage = error;
        this.errorMessage = error.error.message;
      }
    );
  }
  handleDelete(email: string) {
    this.usersService.delete(email).subscribe(
      (response) => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      (error) => {
        this.errorMessage = error;
        this.errorMessage = error.error.message;
      }
    );
  }
}
