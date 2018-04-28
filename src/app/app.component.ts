import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

interface iAppState {
  message: string;
}
interface AppState {
  post: Post;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message$: Observable<string>

  /*constructor(private store: Store<AppState>) {

  }*/


  post: Observable<Post>

  text: string; /// form input val

  constructor(private store: Store<AppState>,private istore: Store<iAppState>) {
    this.post = this.store.select('post')
    this.message$ = this.istore.select('message')
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text) )
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset())
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote())
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote())
  }
  spanishMessage() {
    this.istore.dispatch({type: 'SPANISH'})
  }

  frenchMessage() {
    this.istore.dispatch({type: 'FRENCH'})
  }
  normalMessage(){
    this.istore.dispatch({type: 'ENGLISH'})
  }
}
