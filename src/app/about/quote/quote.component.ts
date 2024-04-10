import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Quote } from '../../quote';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [HttpClientModule],
  template: `
    <div class="quote">
      <p class="words">{{this.quote[0].quote}}</p>
      <p class="author">{{this.quote[0].author}}</p>
      <p>On the topic of {{this.quote[0].category}}</p>
    </div>
  `,
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

  url: string = "https://api.api-ninjas.com/v1/quotes?category"
  apiKey: string = "rPSG+Kl7bJpYju4rBDKcqQ==iF2axW9Xkbwgc7Qo"
  categoryArray: string[] = [
    "beauty", 
    "happiness", 
    "money", 
    "life", 
    "future", 
    "friendship", 
    "fitness", 
    "dreams", 
    "courage",
    "computers"
  ]

  quote!: Quote[]

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getQuote().subscribe({
      next: (data) => {
        console.log("Getting a quote from")
        this.quote = data
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log("Successful quote acquistion")
      }
    })
  }

  getQuote(): Observable<Quote[]> {
    let headers = new HttpHeaders()
    headers = headers.set('X-API-KEY', this.apiKey)

    let finalUrl = `${this.url}=${this.categoryArray[Math.floor(Math.random()*10)]}`
    return this.http.get<Quote[]>(finalUrl, {headers: headers})
  }
}
