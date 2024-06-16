import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data.service';
import { JsonData } from '../../models/json-data';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [MatIconModule, AsyncPipe],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  items!: JsonData;

  constructor(private _data: DataService) {}

  public getData = this._data.fetchDataJson()

  ngOnInit(): void {
    this.getData.subscribe((res) => (this.items = res));
  }
}
