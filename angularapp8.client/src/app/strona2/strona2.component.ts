import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

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

@Component({
  selector: 'app-strona2', // Updated selector name
  templateUrl: './strona2.component.html',
  styleUrls: ['./strona2.component.css']
})
export class Strona2Component implements OnInit {
  public diagnosis: Dignozas[] = [];
  public filteredDiagnosis: Dignozas[] = [];
  public filterCriteria: string = '';
  public filterCriteria2: string = '';
  public filterCriteria3: string = '';
  public filterCriteria4: string = '';
  public filterCriteria5: string = '';
  public filterCriteria6: string = '';
  public filterCriteria7: string = '';
  public filterCriteria8: string = '';
  public filterCriteria9: string = '';
  public filterCriteria10: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDiagnoza();
  }

  getDiagnoza() {
    console.log("Attempting to fetch diagnozas...");
    this.http.get<Dignozas[]>('/diagnozas').subscribe(
      (result) => {
        this.diagnosis = result;
        this.filteredDiagnosis = result; // Initialize filteredDiagnosis with all data
        console.log("Diagnoza received:", result);
      },
      (error) => {
        console.error("Error fetching diagnozas:", error);
      }
    );
  }

  applyFilter2() {
    let remainingDiagnosis = [...this.diagnosis]; // Kopiujemy oryginalną listę
    let filteredDiagnosis: Dignozas[] = [];
    const criteria = this.filterCriteria.toLowerCase();

    for (let i = 1; i <= 10; i++) {
      remainingDiagnosis = remainingDiagnosis.filter(diagnose => {
        const objaw = (diagnose as any)[`objaw${i}`].toLowerCase(); // Rzutowanie typu

        if (objaw.includes(criteria)) {
          filteredDiagnosis.push(diagnose);
          return false; // Usuwamy znalezione diagnozy z dalszego przetwarzania
        }
        return true;
      });
    }

    this.filteredDiagnosis = filteredDiagnosis;
  }


  applyFilter() {
    this.filteredDiagnosis = this.diagnosis.filter(diagnose => {
      const symptoms = [
        diagnose.objaw1,
        diagnose.objaw2,
        diagnose.objaw3,
        diagnose.objaw4,
        diagnose.objaw5,
        diagnose.objaw6,
        diagnose.objaw7,
        diagnose.objaw8,
        diagnose.objaw9,
        diagnose.objaw10
      ];

      const criteria = [
        this.filterCriteria,
        this.filterCriteria2,
        this.filterCriteria3,
        this.filterCriteria4,
        this.filterCriteria5,
        this.filterCriteria6,
        this.filterCriteria7,
        this.filterCriteria8,
        this.filterCriteria9,
        this.filterCriteria10
      ];

      return criteria.every((criterion, index) => {
        if (!criterion) return true; // Skip if the criterion is empty
        return symptoms.some(symptom =>
          symptom.toLowerCase().includes(criterion.toLowerCase())
        );
      });
    });
  }


  clearFilter() {

    this.filterCriteria = '';
    this.filterCriteria2 = '';
    this.filterCriteria3 = '';
    this.filterCriteria4 = '';
    this.filterCriteria5 = '';
    this.filterCriteria6 = '';
    this.filterCriteria7 = '';
    this.filterCriteria8 = '';
    this.filterCriteria9 = '';
    this.filterCriteria10 = '';
    
  }
}
