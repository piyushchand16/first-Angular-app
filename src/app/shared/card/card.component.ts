import { Component } from '@angular/core';
<<<<<<< HEAD
import { UserComponent } from '../../user/user.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {}
=======
import { UserComponent } from "../../user/user.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [UserComponent,UserComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
>>>>>>> 89ed2a2d155c5eacbd8d07158510973b8eb6a1ff
