<<<<<<< HEAD
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
=======
import { Component, EventEmitter, Input, input, Output} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
>>>>>>> 89ed2a2d155c5eacbd8d07158510973b8eb6a1ff

// type User={
//   id:string;
//   avatar:string;
//   name:string;
// }

<<<<<<< HEAD
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selectedUser!: boolean;
=======


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent,CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) user!:User;
  @Input({required:true}) selectedUser!:boolean;
>>>>>>> 89ed2a2d155c5eacbd8d07158510973b8eb6a1ff
  @Output() select = new EventEmitter<string>();

  // avatar= input.required<string>();
  // name = input.required<string>();

<<<<<<< HEAD
  onUserClick() {
    this.select.emit(this.user.id);
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
=======

   onUserClick(){
    this.select.emit(this.user.id)
   }

   get imagePath(){
    return 'assets/users/'+this.user.avatar;
   }
>>>>>>> 89ed2a2d155c5eacbd8d07158510973b8eb6a1ff
}
