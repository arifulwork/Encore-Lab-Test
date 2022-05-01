import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface Find {
  id: number;
  author: string;
  url: string;
  
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})



export class SearchComponent implements OnInit {

  searchTerm: string;
  search: Find[];
  term: string;

  constructor(private httpclient:HttpClient) { }

  ngOnInit(): void {

    this.httpclient.get<Find[]>('https://picsum.photos/v2/list?per_page=12&limit=1083').subscribe((data:Find[])=>{

      this.search = data;

    })
    
    ;
  }

}
