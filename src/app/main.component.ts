// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'main-comp',
    templateUrl: './main.component.html',
    styleUrls: ['main.css']
})
export class MainComponent { 
    quotes: string[] = [];
    links: string[] = [];
    newQuote: string = '';
    newLink: string = '';
    infoType: string = 'bio'; 
  
    addQuote() {
      if (this.newQuote) {
        this.quotes.push(this.newQuote);
        this.newQuote = '';
      }
    }
  
    addLink() {
      if (this.newLink) {
        this.links.push(this.newLink);
        this.newLink = '';
      }
    }
  
    setInfo(type: string) {
      this.infoType = type;
    }
}