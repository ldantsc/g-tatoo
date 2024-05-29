import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { SlideImageComponent } from '../../components/slide-image/slide-image.component';
import { DataService } from '../../services/data.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { jsonData } from '../../models/json-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideImageComponent, JsonPipe, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  items:jsonData | any

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.fetchDataJson().subscribe(
      res => this.items = res
    )
  }
}
