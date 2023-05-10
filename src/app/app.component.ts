import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Arrays for Input and Results

  input: any = '';
  resultAdd: any[] = [];
  resultSubtract: any[] = [];
  resultMultiply: any[] = [];
  resultDivide: any[] = [];
  divideResult: any;

  // Add Numbers

  set0() {
    if (this.input == '0') {
      this.input = '0';
    } else {
      this.input += '0';
    }
  }

  set1() {
    if (this.input == '0') {
      this.input = '1';
    } else {
      this.input += '1';
    }
  }

  set2() {
    if (this.input == '0') {
      this.input = '2';
    } else {
      this.input += '2';
    }
  }

  set3() {
    if (this.input == '0') {
      this.input = '3';
    } else {
      this.input += '3';
    }
  }

  set4() {
    if (this.input == '0') {
      this.input = '4';
    } else {
      this.input += '4';
    }
  }

  set5() {
    if (this.input == '0') {
      this.input = '5';
    } else {
      this.input += '5';
    }
  }

  set6() {
    if (this.input == '0') {
      this.input = '6';
    } else {
      this.input += '6';
    }
  }

  set7() {
    if (this.input == '0') {
      this.input = '7';
    } else {
      this.input += '7';
    }
  }

  set8() {
    if (this.input == '0') {
      this.input = '8';
    } else {
      this.input += '8';
    }
  }

  set9() {
    if (this.input == '0') {
      this.input = '9';
    } else {
      this.input += '9';
    }
  }

  // Calculator Functions

  clear() {
    this.input = '0';
  }

  multiply() {
    this.resultMultiply.push(Number(this.input));
    console.log(this.resultMultiply);
    this.input = '0';
  }

  divide() {
    this.resultDivide.push(Number(this.input));
    console.log(this.resultDivide);
    this.input = '0';
  }

  subtract() {
    this.resultSubtract.push(Number(this.input));
    console.log(this.resultSubtract);
    this.input = '0';
  }

  add() {
    this.resultAdd.push(Number(this.input));
    console.log(this.resultAdd);
    this.input = '0';
  }

  calc() {
    if (this.input == '0') {
      this.input = '0';
    } else if (this.resultAdd[0]) {
      this.input = this.resultAdd[0] + Number(this.input);
      this.resultAdd = [];
    } else if (this.resultMultiply[0]) {
      this.input = this.resultMultiply[0] * Number(this.input);
      this.resultMultiply = [];
    } else if (this.resultSubtract[0]) {
      this.input = this.resultSubtract[0] - Number(this.input);
      this.resultSubtract = [];
    } else {
      // this.input = this.resultDivide[0] / Number(this.input);
      // this.resultDivide = [];
      this.divideResult = this.resultDivide[0] / Number(this.input);
      this.input = this.divideResult.toFixed(5);
      this.resultDivide = [];
    }
  }

  ngOnInit(): void {
    // Set Input value default

    if (this.input == '') {
      this.input = '0';
    }
  }
}
