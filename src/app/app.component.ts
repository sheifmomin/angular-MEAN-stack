import { Component } from '@angular/core';
import { Post } from '../app/post/post.modal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory';
  post: Post[] = [];

  public onPostAdded(params) {
    this.post.push(params);
    console.log(this.post);
  }
}
