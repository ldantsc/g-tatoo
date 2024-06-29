import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data.service';
import { JsonData } from '../../models/json-data';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ButtonComponent ,MatIconModule, AsyncPipe],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent implements OnInit {
  items!: JsonData;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.items = this._data.contentData()
  }
}
