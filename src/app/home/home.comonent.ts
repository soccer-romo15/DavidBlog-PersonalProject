import { Component } from '@angular/core';
import { IBlog } from './home'
import { BlogService } from './home.service'

@Component ({
    selector: "pm-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent{
    image_text = "Welcome to my Blog!";
    blogs: IBlog[];
    blogUrl = "src/assets/json/main-stories.json";
    title = "Who I am";
    img = "assets/img/backCabin.jpg";
    summary = "About Who I am";
    story = "My name is David Niculcea and this will be where I insert some little parts of my life. For anyone wondering who I am or what I'm currently doing. I'm currently in college Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci voluptatem quo asperiores atque sint quibusdam, ratione eligendi ab animi rerum. Fugiat libero sint porro quas nobis voluptate quis? Perspiciatis, eius. lor";
    dateReleased = "02/26/20";


    constructor(){console.log('reading Json file');
    // console.log(blogStories)
    // this.blogs = blogStories}

    // getBlogss():any
    // {
    //     return this.BlogService.getBlogs().subscribe({
    //         next: movieObserved => this.blogs = movieObserved});
    // }
    

    // changeMe()
    // {
        
    // }
}
}