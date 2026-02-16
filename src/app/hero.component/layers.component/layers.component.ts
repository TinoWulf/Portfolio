import { Component } from '@angular/core';

@Component({
  selector: 'app-layers',
  imports: [],
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.scss', './layers.component.mediaquarry.scss'],
})
export class Layers {

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
}
