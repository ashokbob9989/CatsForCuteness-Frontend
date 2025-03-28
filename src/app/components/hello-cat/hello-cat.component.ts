import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-hello-cat',
  standalone: true,
  imports: [],
  templateUrl: './hello-cat.component.html',
  styleUrl: './hello-cat.component.scss'
})
export class HelloCatComponent implements OnInit{
  message: string="";
  constructor(private http: HttpClient){}
  ngOnInit(): void{
    this.http.get("http://localhost:8080/cFc/hello", {
      responseType: "text"
    }).subscribe(response=>{
      this.message=response;
    });
  }
}
