import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  items = [
    'Variedade de estilos',
    'Preços transparentes',
    'Horários flexíveis',
    'Atendimento personalizado',
    'Ambiente higiênico e seguro',
    'Estilo único e personalizado',
  ];
}
