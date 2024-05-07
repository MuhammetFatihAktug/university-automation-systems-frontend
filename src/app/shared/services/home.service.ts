import { Injectable } from '@angular/core';
import {AxiosService} from "./axios.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private axiosService: AxiosService) {
  }



}
