import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  private _postSource = new BehaviorSubject([]);
  postSource = this._postSource.asObservable();

  constructor(private db: AngularFireDatabase) { }

  getAllPosts(): Observable<any[]> {
    return this.db.list('/posts').valueChanges();
  }

  getPostById(id): Observable<any> {
    return this.db.object('/posts/' + id).valueChanges();
  }

  setAllPosts(posts: any) {
    this._postSource.next(posts);
  }

}
