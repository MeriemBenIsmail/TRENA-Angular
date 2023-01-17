import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TerrainsService } from 'src/app/services/terrains.service';

@Component({
  selector: 'app-add-terrain-form',
  templateUrl: './add-terrain-form.component.html',
  styleUrls: ['./add-terrain-form.component.css'],
})
export class AddTerrainFormComponent implements OnInit {
  @Input() isVisible: boolean = true;
  errorMessage: string = '';
  @Output() sendVisible = new EventEmitter();
  loading: boolean = false;
  constructor(
    private terrainService: TerrainsService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onClose() {
    this.isVisible = false;
    this.sendVisible.emit(false);
  }
  onSubmit(formulaire: NgForm) {
    const { sport, description, address, surface, price, available, image } =
      formulaire.form.value;

    this.loading = true;
    this.terrainService
      .add(sport, address, surface, price, description, image, true)
      .subscribe(
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
