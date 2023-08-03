import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from './json-placeholder.service';
import { ModeloAbstratoPrimeiroComponenteModel } from './modelo-abstrato-primeiro-componente.model';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.scss']
})

export class PrimeiroComponenteComponent implements OnInit {
  
  
  posts: any[] = [];
  displayedPosts: any[] = [];
  currentIndex = 0;
  time: Date = new Date();

  constructor(private jsonPlaceholderService: JsonPlaceholderService) { }

  ngOnInit(): void {    
    this.jsonPlaceholderService.getPosts().subscribe(
      data => {
        console.log(data);
        
        this.posts = data.map((postData: any) => new ModeloAbstratoPrimeiroComponenteModel({
          id: postData.id,
          name: postData.title,
          abstractVariable: postData.body
        }));

        this.loadMore();

        


      },
      error => console.error(error)
    );

    setInterval(() => {
      this.time = new Date();
    }, 1000);



  }

  loadMore(): void {
    const newPosts = this.posts.slice(this.currentIndex, this.currentIndex + 5);
    this.displayedPosts = this.displayedPosts.concat(newPosts);
    this.currentIndex += 5;

  } 

  hidePosts(): void {
    this.displayedPosts = [];
    this.currentIndex = 0;
  }

  deletePost(index: number): void {
    // Remove o post da lista displayedPosts
    this.displayedPosts.splice(index, 1);
  
    // Remove o post da lista original posts
    this.posts.splice(index, 1);
  }

}
