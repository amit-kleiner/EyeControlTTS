import { Component, OnInit } from '@angular/core';
import { TextToSpeechService } from 'src/app/core/services/text-to-speech.service';
import { Voice } from 'src/app/shared/models/Voice.model';

@Component({
  selector: 'app-main-player',
  templateUrl: './main-player.component.html',
  styleUrls: ['./main-player.component.css']
})
export class MainPlayerComponent implements OnInit {
  myText = "Hi, What's up? This is an example. You can listen to any text you write";
  selectedSpeed = 1;
  selectedLanguage = "en-GB-Standard-A";
  allVoices: any;

  constructor(private textToSpeechService: TextToSpeechService) { 
  }

  ngOnInit(): void {
    this.textToSpeechService.getLanguages().then(
      res => { 
        this.allVoices = res;
      }, e => { 
        const errorMessage = e.error.error ? e.error.error : e.message;
        console.log(`Error: ${JSON.stringify(errorMessage)}`);
      }
    );
  }
}
