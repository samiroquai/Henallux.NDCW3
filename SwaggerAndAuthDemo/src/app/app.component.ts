import { Component, OnInit } from '@angular/core';
import { ShopsService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
   
  }
  title = 'SwaggerCodeGenDemo';
  /**
   *
   */
  constructor(private shopsService: ShopsService) {
    
  }
}
