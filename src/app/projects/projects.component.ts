import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }
}
