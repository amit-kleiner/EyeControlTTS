import { AudioConfig } from './AudioConfig.model'
import { Input } from './Input.model'
import { Voice } from './Voice.model';

export class SpeechRequestParams {
    input: Input;
    voice: Voice;
    audioConfig: AudioConfig;
}