import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { DataService } from '../../services/data.service';
import { JsonData } from '../../models/json-data';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './quote.component.html',
})
export class QuoteComponent implements OnInit {
  items!: JsonData;

  constructor(private _data: DataService) {}

  ngOnInit(): void {
    this.items = this._data.contentData();
  }
}
