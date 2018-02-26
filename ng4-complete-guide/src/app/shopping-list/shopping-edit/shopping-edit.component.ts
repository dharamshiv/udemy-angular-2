import { Component, OnInit, Output, EventEmitter,ElementRef,ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  
  
  constructor() { }

  ngOnInit() {
  }

  // onAddItem(nameInput:HTMLInputElement,amountInput:HTMLInputElement){
  //   this.ingredientAdded.emit(new Ingredient(nameInput.value,amountInput.value));
  // }
  
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmout = this.amountInputRef.nativeElement.value; 
    const newIngredient = new Ingredient(ingName,ingAmout);
    this.ingredientAdded.emit(newIngredient);
  }
  
  
}
