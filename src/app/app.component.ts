import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'mil';
  // constructor(private service: HeroService) { }

  ngOnInit() {
    console.log("x")
  }

}