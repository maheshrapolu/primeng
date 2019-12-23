import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, interval, Observable } from 'rxjs';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  result: any;
  display: boolean = false;
  private uptimechange: Subscription;
  showData: string;
  count: number = 0;
  constructor(private httpclient: HttpClient) { }
  ngOnInit() {
    this.getdetails();
    this.uptimechange = interval(10000).subscribe(
      (val) => {
        this.getdetails()
      }
    );
    
  }
  getdetails() {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/albums').subscribe((data) => {
      this.result = data;
      console.log('datadetails', this.result);
    })
  }
  showModel(user) {
    if (!this.display) {
      this.showData = JSON.stringify(user);
      this.display = true;
    }
    else {
      this.display = false;
    }
    
  }


}

