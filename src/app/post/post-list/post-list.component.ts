import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.modal';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() name: Post[] = [];

  constructor() {
  }

  ngOnInit() {
  }
}
