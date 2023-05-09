import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  input: string = '';
  result: string = '';
  i: any;
  calcArray: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

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

  multiply() {}

  divide() {}

  subtract() {}

  add() {}

  calc() {}

  ngOnInit(): void {
    // Set Input value default

    if (this.input == '') {
      this.input = '0';
    }
  }
}
