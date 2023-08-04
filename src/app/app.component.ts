import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  myString = "Hello, world!";
  title = 'my-app';
  constructor(private http: HttpClient) {}

  click() {
    const apiUrl = `http://localhost:9000/technician-api/dropdown/test=${this.myString}`;
    const queryParam = encodeURIComponent(this.myString);
    const apiURLWithQueryParam = `${apiUrl}?text=${queryParam}`;

    this.http.get(apiUrl).subscribe({
      next: (response: any) => {
        // Handle the successful response from the API here
        console.log('API response:', response);
      },
      error: (error: any) => {
        // Handle any errors that occurred during the API call here
        console.error('API error:', error);
      }
    })
  }




}

