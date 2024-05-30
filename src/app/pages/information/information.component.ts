import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  items = [{
    icon: 'palette_outlined',
    descript: 'Variedade de estilos'
  },
  {
    icon: 'paid',
    descript: 'Preços transparentes'
  },
  {
    icon: 'alarm_on',
    descript: 'Horários flexíveis'
  },
  {
    icon: 'handshake',
    descript: 'Atendimento personalizado'
  },
  {
    icon: 'sanitizer',
    descript: 'Ambiente higiênico e seguro'
  },
  {
    icon: 'star_half',
    descript: 'Estilo único e personalizado'
  },
  ];
}
