import { Component } from '@angular/core';
import { Banner } from './banner.component/banner.component';
import { Layers } from './layers.component/layers.component';
import { Header } from '../header.component/header.component';
import { TranslationService } from '../services/translation.services';


@Component({
  selector: 'app-hero',
  imports: [Banner, Layers, Header],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss', './hero.component.mediaquarry.scss'],
})
export class Hero {
  constructor(public translation: TranslationService) {}
}
