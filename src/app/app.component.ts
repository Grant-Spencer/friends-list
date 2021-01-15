import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friends-list';
  newFriend = '';
  isDisabled = true;
 // create an array named friends and populate with some friends
  friends = ["Sean", "Ron", "Julie", "Phil", "Grant"];

  addFriend() {
    console.log(this.newFriend);
  }
}
