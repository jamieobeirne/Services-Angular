import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NameWineValidator } from '../NameWineValidator';
import { FormControl, FormGroup } from '@angular/forms';

import { Wine } from '../models/Wine';
import { WineService } from '../services/wine.service';


@Component({
  selector: 'app-wine-new-reactive',
  templateUrl: './wine-new-reactive.component.html',
  styleUrls: ['./wine-new-reactive.component.css']
})


export class WineNewReactiveComponent {

  /*private wineService: WineService;*/
  ///public wine: Wine[];
  public wineForm: FormGroup;

  // variable wineService -> Injeccion de Dependencia por Constructor
  constructor(private wineService: WineService, private fb: FormBuilder) {

    //this.wineService = new WineService();

    this.createForm();
  }

  createForm() {
    this.wineForm = this.fb.group({
      name: [null, [Validators.required, NameWineValidator()]],
      price: [1, [Validators.required, Validators.min(1)]],
      imageUrl: [null, [Validators.required/*, Validators.pattern('^http(s?)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$')*/]],
      onSale: false
    });
  }

  onSubmit() {
    console.log('Wine Form Value', this.wineForm.value);

  }

  get name() { return this.wineForm.get('name'); }
  get price() { return this.wineForm.get('price'); }
  get url() { return this.wineForm.get('imageUrl'); }


  createWine() {


    if (this.wineForm.valid) {
      console.log(this.wineForm.value)
      const wine: Wine = {
        ...this.wineForm.value,
        isOnSale: this.wineForm.value.onSale,
        quantityInCart: 0
      }
      this.wineService.createWineService(wine)

    } else {
      console.error('Wine is in invalid state');
    }

  }



}
