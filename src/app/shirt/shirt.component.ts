import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {
  @ViewChild('f')
  savingsForm!: NgForm;
  itemsSold: any;
  amount: any;
  description: any;

  constructor() { }

  ngOnInit(): void {
  }

  processForm() {

  }

}
