import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpeechRequestParams } from 'src/app/shared/models/SpeechRequestParams.model';
import { Observable } from 'rxjs';
import { Voice } from 'src/app/shared/models/Voice.model';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  constructor(private httpClient: HttpClient) { }

    public async getSpeech(reuquestParams: SpeechRequestParams) {
      const url = "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyBUrG7YyqBHH-TcgwACamVt3mlNU2u5dR4";
      const headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      headers.append('X-Goog-Api-Key', 'AIzaSyBUrG7YyqBHH-TcgwACamVt3mlNU2u5dR4');

      return await this.httpClient.post<string>(url, 
          reuquestParams,
          {headers : headers})
      .toPromise();
    }

    public async getLanguages() {
      const url = "https://texttospeech.googleapis.com/v1/voices?key=AIzaSyBUrG7YyqBHH-TcgwACamVt3mlNU2u5dR4";
      const headers = new HttpHeaders();
      headers.append('content-type', 'application/json');
      headers.append('X-Goog-Api-Key', 'AIzaSyBUrG7YyqBHH-TcgwACamVt3mlNU2u5dR4');

      return await this.httpClient.get<Array<Voice>>(url, {headers : headers}).toPromise();
    }
  }
