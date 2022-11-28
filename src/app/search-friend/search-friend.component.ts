import { Component } from '@angular/core';

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html',
  styleUrls: ['./search-friend.component.css']
})
export class SearchFriendComponent {

  name=""

  readValues=()=>{
    let data = {"name":this.name}
    console.log(data)
  }

}
