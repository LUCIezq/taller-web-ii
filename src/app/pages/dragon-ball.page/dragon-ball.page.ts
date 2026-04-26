import { Component, effect, inject } from '@angular/core';
import { TitleComponent } from '../../components/title.component/title.component';
import { FormComponent } from '../../components/form-component/form-component';
import { ListComponent } from "../../components/list-component/list-component";
import { DragonBallService } from '../../services/dragon-ball.service';

@Component({
  selector: 'app-dragon-ball.page',
  imports: [TitleComponent, FormComponent, ListComponent],
  templateUrl: './dragon-ball.page.html'
})
export class DragonBallPage {
  public service = inject(DragonBallService);
}
