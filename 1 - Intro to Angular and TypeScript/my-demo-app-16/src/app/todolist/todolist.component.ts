import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  taskArray = [{
    taskName: 'brush teeth',
    isCompleted: false,
  }];
  
  constructor() { }

  ngOnInit(): void {
      
  }

  //<form (ngSubmit)="onSubmit(taskForm)" from HTML
  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })

    //clear input after add task!
    form.reset();
  }


  //<input (change)="onCheck(i)" from HTML
  onCheck(index: number) {
    console.log(this.taskArray);

    //change value of 'isCompleted' to opposite value and set it in the element (false -> true or true -> false)!!
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }


  //(click)="onDelete(i)" from HTML
  onDelete(index: number) {
    console.log(index);
    
    // splice (marked element, number of removed) --> MDN
    this.taskArray.splice(index, 1);
  }



}
