import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { PostService } from '../providers/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'jokes-de-papa-ng15';
  posts: Post[] = postsMock

  constructor(
    // private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    // const slug = this.route.snapshot.paramMap.get('slug');
    // this.posts = this.postService.getPosts();
  }

}
