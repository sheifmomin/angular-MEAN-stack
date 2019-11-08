import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.modal';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  public addPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
  }

}
