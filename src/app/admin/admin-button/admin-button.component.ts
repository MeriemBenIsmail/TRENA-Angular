import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-button',
  templateUrl: './admin-button.component.html',
  styleUrls: ['./admin-button.component.css'],
})
export class AdminButtonComponent implements OnInit {
  @Input() content: string = '';
  @Input() color: string = '';
  @Input() bgColor: string = '';
  @Input() shadow: string = '';
  constructor() {}

  ngOnInit(): void {}
}
