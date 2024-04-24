import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private color: string = "primary";

  public getColor(): string {
    return this.color
  }
  
  public setColor(color: string) {
    this.color = color;
  }

  constructor() { }
}
