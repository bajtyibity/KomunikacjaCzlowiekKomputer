
//export class StronaComponent {
//}
//////////////////////////
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Dignozas {
  id: number;
  objaw1: string;
  objaw2: string;
  objaw3: string;
  objaw4: string;
  objaw5: string;
  objaw6: string;
  objaw7: string;
  objaw8: string;
  objaw9: string;
  objaw10: string;
  choroba: string;
}

interface Symptoms {
  id: number;
  nazwa: number; // Zmiana typu na number
}

@Component({
  selector: 'app-strona',
  templateUrl: './strona.component.html',
  styleUrl: './strona.component.css'
})
export class StronaComponent implements OnInit {
  public diagnosis: Dignozas[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDiagnoza();
  }

  getDiagnoza() {
    console.log("Attempting to fetch diagnozas...");
    this.http.get<Dignozas[]>('/diagnozas').subscribe(
      (result) => {
        this.diagnosis = result;
        console.log("Diagnoza received:", result);
      },
      (error) => {
        console.error("Error fetching diagnozas:", error);
      }
    );
  }

  title = 'angularapp8.client';
}



