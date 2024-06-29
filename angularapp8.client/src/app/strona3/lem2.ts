interface Case {
  id: number;
  objawy: string[];
  choroba: string;
}

interface Rule {
  conditions: string[];
  conclusion: string;
}

export class LEM2 {
  private cases: Case[];

  constructor(cases: Case[]) {
    this.cases = cases;
  }

  private generateRulesForDisease(disease: string): Rule[] {
    const rules: Rule[] = [];
    const relevantCases = this.cases.filter(c => c.choroba === disease);
    const otherCases = this.cases.filter(c => c.choroba !== disease);
    const uncoveredCases = [...relevantCases];

    while (uncoveredCases.length > 0) {
      let bestCondition: string | null = null;
      let bestConditionCoverage: number = 0;
      let bestConditionCases: Case[] = [];

      const conditions = new Set<string>();
      this.cases.forEach(c => c.objawy.forEach(o => conditions.add(o)));

      conditions.forEach(condition => {
        const coveredCases = uncoveredCases.filter(c => c.objawy.includes(condition));
        const notCoveredCases = otherCases.filter(c => c.objawy.includes(condition));
        const coverage = coveredCases.length - notCoveredCases.length;

        if (coverage > bestConditionCoverage) {
          bestCondition = condition;
          bestConditionCoverage = coverage;
          bestConditionCases = coveredCases;
        }
      });

      if (bestCondition) {
        rules.push({
          conditions: [bestCondition],
          conclusion: disease
        });

        bestConditionCases.forEach(c => {
          const index = uncoveredCases.indexOf(c);
          if (index > -1) {
            uncoveredCases.splice(index, 1);
          }
        });
      } else {
        break;
      }
    }

    return rules;
  }

  generateRules(): Rule[] {
    const diseases = new Set(this.cases.map(c => c.choroba));
    let allRules: Rule[] = [];

    diseases.forEach(disease => {
      const rulesForDisease = this.generateRulesForDisease(disease);
      allRules = allRules.concat(rulesForDisease);
    });

    return allRules;
  }

  classify(symptoms: string[]): string {
    const rules = this.generateRules();
    for (const rule of rules) {
      if (rule.conditions.every(condition => symptoms.includes(condition))) {
        return rule.conclusion;
      }
    }
    return "Nieznana choroba";
  }
}
