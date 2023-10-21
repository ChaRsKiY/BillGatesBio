// Директива import импортирует функциональность модуля angular/core, 
// предоставляя доступ к функции декоратора @Component.
import { Component } from '@angular/core';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
    selector: 'my-app',
    template: `<div>
               <header-comp />
               <main-comp />
               </div>`,
    styles: [`div {display: flex; flex-direction: column;}`]
})
export class AppComponent { 
    name = 'Виталий';
}