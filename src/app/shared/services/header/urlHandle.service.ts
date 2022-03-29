
import { EventEmitter} from "@angular/core";

export class UrlHandleService {
    url: string = 'recipe';
    onNavigate = new EventEmitter<string>();
    constructor() { }
    getUrl() {
        return this.url;
    }
    setUrl(url: string) {
      this.url = url;
      this.onNavigate.emit(url);
    }
}
