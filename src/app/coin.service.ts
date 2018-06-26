import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat/_esm5/observable';
import 'rxjs-compat/_esm5/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  result: any;
  constructor(private http: HttpClient) { }

  addCoin(name, price) {
    const uri = 'http://localhost:4000/coins/add';
    const obj = {
      name: name,
      price: price
    };
    this.http.post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  getCoins() {
    const uri = 'http://localhost:4000/coins';
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  editCoin(id) {
    const uri = 'http://localhost:4000/coins/edit/' + id;
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  updateCoin(name, price, id) {
    const uri = 'http://localhost:4000/coins/update/' + id;

    const obj = {
      name: name,
      price: price
    };
    this.http.post(uri, obj).subscribe(res => console.log('Done'));
  }

  deleteCoin(id) {
    const uri = 'http://locahost:4000/coins/delete/' + id;

    return this.http.get(uri).map(res => {
      return res;
    });
  }
}
