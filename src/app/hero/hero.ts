import { Component } from '@angular/core';
import { Header } from './header/header';
import { Banner } from './banner/banner';
import { Layers } from './layers/layers';

@Component({
  selector: 'app-hero',
  imports: [Header, Banner, Layers],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

}
