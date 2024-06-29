import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LEM2 } from './lem2';

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
  selector: 'app-strona3',
  templateUrl: './strona3.component.html',
  styleUrls: ['./strona3.component.css']
})
export class Strona3Component implements OnInit {
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
  public lem2: LEM2 | null = null;  // Initialize lem2 as null
  public diagnosisResult: string | null = null;

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

        // Initialize LEM2 with fetched data
        const cases = result.map(d => ({
          id: d.id,
          objawy: [
            d.objaw1, d.objaw2, d.objaw3, d.objaw4, d.objaw5,
            d.objaw6, d.objaw7, d.objaw8, d.objaw9, d.objaw10
          ].filter(o => o !== ''),
          choroba: d.choroba
        }));

        this.lem2 = new LEM2(cases);
      },
      (error) => {
        console.error("Error fetching diagnozas:", error);
      }
    );
  }

  applyFilter() {
    this.filteredDiagnosis = this.diagnosis.filter(diagnose => {
      const symptoms = [
        diagnose.objaw1, diagnose.objaw2, diagnose.objaw3, diagnose.objaw4, diagnose.objaw5,
        diagnose.objaw6, diagnose.objaw7, diagnose.objaw8, diagnose.objaw9, diagnose.objaw10
      ];

      const criteria = [
        this.filterCriteria, this.filterCriteria2, this.filterCriteria3, this.filterCriteria4,
        this.filterCriteria5, this.filterCriteria6, this.filterCriteria7, this.filterCriteria8,
        this.filterCriteria9, this.filterCriteria10
      ];

      return criteria.every((criterion, index) => {
        if (!criterion) return true; // Skip if the criterion is empty
        return symptoms.some(symptom =>
          symptom.toLowerCase().includes(criterion.toLowerCase())
        );
      });
    });

    // Use LEM2 to classify based on filtered criteria
    if (this.lem2) {
      const criteria = [
        this.filterCriteria, this.filterCriteria2, this.filterCriteria3, this.filterCriteria4,
        this.filterCriteria5, this.filterCriteria6, this.filterCriteria7, this.filterCriteria8,
        this.filterCriteria9, this.filterCriteria10
      ].filter(c => c !== '');

      if (criteria.length > 0) {
        this.diagnosisResult = this.lem2.classify(criteria);
      } else {
        this.diagnosisResult = null;
      }
    }
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

    this.filteredDiagnosis = [...this.diagnosis];
    this.diagnosisResult = null;
  }
}
