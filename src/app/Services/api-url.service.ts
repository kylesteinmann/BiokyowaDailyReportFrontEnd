import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  apiUrl = "http://localhost:3000/"
  constructor() { }
}
