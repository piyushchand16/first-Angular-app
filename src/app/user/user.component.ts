import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// type User={
//   id:string;
//   avatar:string;
//   name:string;
// }

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selectedUser!: boolean;
  @Output() select = new EventEmitter<string>();

  // avatar= input.required<string>();
  // name = input.required<string>();

  onUserClick() {
    this.select.emit(this.user.id);
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
}
