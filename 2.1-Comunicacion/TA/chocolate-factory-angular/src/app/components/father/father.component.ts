// father.component.ts
import { Component, AfterContentInit, ContentChild, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule, ChildComponent],
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements AfterViewInit, AfterContentInit {
  parentMessageInput = 'Quiero de forma urgente, un informe de todos los productos de la empresa';
  childMessageEventOutput = '';

  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  @ContentChild('projectedContent', { static: true }) projectedContent!: ElementRef;

  receiveMessage($event: string) {
    this.childMessageEventOutput = $event;
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.childComponent.parentMessageViewChild = 'De forma remota voy hacer uso del exoesqueleto(Variables del Hijo) ' +
        'que tienes instalado para hacer una verificar el informe';
    });
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
      console.log('El contenido proyectado es:', this.projectedContent.nativeElement.textContent);
    }
  }
}
