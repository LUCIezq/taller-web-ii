import { Component, input } from '@angular/core';

@Component({
  selector: 'title-component',
  imports: [],
  templateUrl: './title.component.html'
})
export class TitleComponent {
  title = input.required<string>();
}
