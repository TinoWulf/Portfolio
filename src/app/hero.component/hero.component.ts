import { Component } from '@angular/core';
import { Banner } from './banner.component/banner.component';
import { Layers } from './layers.component/layers.component';
import { Header } from '../header.component/header.component';

@Component({
  selector: 'app-hero',
  imports: [Banner, Layers, Header],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class Hero {

}
