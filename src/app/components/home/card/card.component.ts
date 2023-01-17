import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card-wrapper">
      <span>{{ num }}</span>
      <div class="card">
        <h4>{{ title }}</h4>
        <p>{{ content }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() num: any;
  @Input() title: string | undefined;
  @Input() content: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
