import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts =[
  {
    title: 'Neat Tree',
    imageUrl: 'assets/tree.jpeg',
    username: 'nature',
    content: 'saw a cool tree today!'
  },
  {
    title: 'Snowy Mountains',
    imageUrl: 'assets/mountain.jpeg',
    username: 'mountainlover',
    content: 'Heres a cool snowy mountain!'
  },
  {
    title: 'Mountain Biking',
    imageUrl: 'assets/biking.jpeg',
    username: 'bikinglover223',
    content: 'Went biking today!'
  },
  {
    title: 'Mountain Biking',
    imageUrl: 'assets/biking.jpeg',
    username: 'bikinglover223',
    content: 'Went biking today!'
  }
  ]
}
