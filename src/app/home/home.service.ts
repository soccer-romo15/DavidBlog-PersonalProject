import { IBlog } from './home';
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import blogJson from 'src/assets/json/main-stories.json'

@Injectable({
    providedIn: 'root'
})


export class BlogService
{
    constructor(){}
    jsonRequst = blogJson

    getBlogs()
    {
        return this.jsonRequst;
    }

    // constructor(private http:HttpClient){}
    // blogUrl = "src/assets/json/main-stories.json";
    
    // getBlogs(): Observable<IBlog[]>
    // {
    //         return this.http.get<IBlog[]>(this.blogUrl)
    // }
}

// Template for getting Json Request from private server