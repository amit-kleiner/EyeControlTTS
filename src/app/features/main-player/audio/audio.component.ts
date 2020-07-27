import { Component, OnInit } from '@angular/core';
import { TextToSpeechService } from 'src/app/core/services/text-to-speech.service';
import { SpeechRequestParams } from 'src/app/shared/models/SpeechRequestParams.model';
import { AudioConfig } from 'src/app/shared/models/AudioConfig.model';
import { Input } from '@angular/core';
import { Voice } from 'src/app/shared/models/Voice.model';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
   outputSpeech: any;
   @Input() myText: string;
   @Input() selectedSpeed;
   @Input() selectedLanguage;

   constructor(private textToSpeechService: TextToSpeechService) { }
  
   ngOnInit(): void {
      this.prepareAudio();
   }

   prepareAudio() {
    const requestParams = new SpeechRequestParams();
    const input = new Input();
    input.text = this.myText;
    requestParams.input = input;

    const audioConfig = new AudioConfig();
    audioConfig.audioEncoding = "MP3";
    audioConfig.speakingRate = this.selectedSpeed;
    requestParams.audioConfig = audioConfig;

    const voice = new Voice();
    voice.languageCode = "en-gb";
    voice.name = this.selectedLanguage;
    voice.ssmlGender = "FEMALE";
    requestParams.voice = voice;
    
    this.textToSpeechService.getSpeech(requestParams).then(
      res => { 
        this.outputSpeech = res;
      }, e => { 
        const errorMessage = e.error.error ? e.error.error : e.message;
        console.log(`Error: ${JSON.stringify(errorMessage)}`);
      }
    );
   }
}