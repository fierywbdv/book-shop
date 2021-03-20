# book-shop
Task "Book Shop". Course "RSSchool Angular 2021 Q1"

The app will automatically start with eslint check and open in browser if you run `npm start`

### Branch "task-intro" (PR#1):
  - ##### По заданию ["task-intro"](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular-new/angular-intro.md)
    Создание проекта:
    - [x] с использованием angular-cli создайте новый проект (ng new bookShop) и загрузите его на гитхаб в репозиторий с названием book-shop.
    - [x] в package.json заменить содержимое команды start на ng lint && ng serve -o.
  - ##### Дополнительно к заданию:
    - [x] tslint заменен на eslint (Airbnb), установлен и настроен prettier
 
### Branch "task-components" (PR#2):
  - ##### По заданию ["task-components"](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular-new/angular-components.md)

    1. Создать компонент `BookComponent`. Используйте его в `AppComponent`. Модель книг `BookModel` описать интерфейсом:  
      • `name`: _string_;  
      • `description`: _string_;  
      • `price`: _number_;  
      • `category`: _enum_ (создайте enum с несколькими категориями);  
      • `createDate`: _number_;  
      • `isAvailable`: _boolean_;
    2. Вывести свойства `BookComponent` в его темплейте. 
    3. Добавить кнопку `Buy` в шаблон `BookComponent`. Реализовать обработчик события `onBuy` по нажатию на кнопку `Buy`, который должен добавлять книгу в корзину. `BookComponent` реализовать как презентационный компонент с `input` и `output`, без зависимостей. Если товара нет, кнопку `Buy` делать недоступной.
    4. Создать компонент `CartComponent` и использовать в `AppComponent` темплейте. Создать `CartItemComponent` и использовать внутри `CartComponent`. Компонент `CartItemComponent` должен отображать приобретенную книгу и колличество единиц данного экземпляра. Реализовать возможности: изменить количество товара, удалить товар из корзины.
    5. Для взаимодействия между компонентами использовать декораторы: `@Input()`, `@Output()`.
    6. По возможности использовать `OnPush` стратегию для презентационных компонентов (`BookComponent`, `CartItemComponent`).
    7. По возможности использовать два или более метода-хука жизненного цикла компонента.
    8. Использовать различные DOM события (`click`, `wheel`, `blur`...).
    9. Добавить в разметку AppComponent элемент <h1 #appTitle></h1> с шаблонной переменной. Использовать `@ViewChild`, получить доступ к DOM-элементу темплейта, установить заголовок для приложения из класса.
  - ##### Рекомендации:
    Не используйте для имен событий, которые генерят компоненты, префикс `on`. Используйте его для нейминга обработчиков этих событий