# book-shop
Task "Book Shop". Course "RSSchool Angular 2021 Q1"

The app will automatically start with eslint check and open in browser if you run `npm start`

### Branch "task-intro" ([link to PR#1](https://github.com/Musmen/book-shop/pull/1)):
  - ##### По заданию ["task-intro"](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular-new/angular-intro.md)
    Создание проекта:
    - [x] с использованием angular-cli создайте новый проект (ng new bookShop) и загрузите его на гитхаб в репозиторий с названием book-shop.
    - [x] в package.json заменить содержимое команды start на ng lint && ng serve -o.
  - ##### Дополнительно к заданию:
    - [x] tslint заменен на eslint (Airbnb), установлен и настроен prettier
 
### Branch "task-components" ([link to PR#2](https://github.com/Musmen/book-shop/pull/2)):
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

### Branch "task-services" ([link to PR#3](https://github.com/Musmen/book-shop/pull/3)):
  - ##### По заданию ["task-services"](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/angular-new/angular-services-di.md)
    1. Создать сервис `BooksService`, который будет возвращать книги с помощью метода `getBooks()`. Использовать этот сервис в компоненте `BooksListComponent` для доставки массива книг.
    2. Создать сервис `CartService`, который должен содержать данные корзины магазина и управлять ее содержимым. Он будет доставлять список приобретенных книг в виде массива `CartItemComponent` в компонент `CartListComponent`. Кроме этого сервис должен содержать следующую информацию:  
        • `CartProduct` - о добавленных товарах в корзину;  
        • `totalQuantity` - общее количество товаров в корзине;  
        • `totalSum` - общую стоимость товаров в корзине;  
      Сервис должен предоставлять следующий функционал:  
        • `addBook()` - добавить товар в корзину с нужным количеством;  
        • `removeBook()` - удалить указанный товар из корзины;  
        • `increaseQuantity()/decreaseQuantity()` - увеличить/уменьшить количество указанного товара в корзине;
      • `removeAllBooks()` - очистить корзину;  
        • `updateCartData()` - пересчитать общее количество товара и сумму после каждой операции, которая влияет на корзину;
    3. Создайте сервис `LocalStorageService` _(core/services/local-storage.service.ts)_, который позволит работать
      с `window.localStorage` (как класс, `useClass`).
      Он должен предоставлять методы для:
      • установки значения: строки или объекта (`setItem()`)
      • получения значения: строки или объекта (`getItem()`)
      • удаления значения по ключу (`removeItem()`)
    4. Создайте сервис `ConfigOptionsService` _(core/services/config-options.service.ts)_, который должен хранить объект настроек (id, login, email, ...). Сервис должен предоставлять методы для установки и извлечения данных. Метод установки на вход принимает объект, а метод извлечения данных возвращает объект. Предусмотреть возможность установки подмножества свойств. Например, { id, login }.
    5. Создайте сервис `ConstantsService` _(core/services/constant.service.ts)_, в виде готового литерала объекта, например _{ App: "TaskManager", Ver: "1.0" }_. Зарегистрируйте его, используя `useValue`.
    6. Создайте сервис `GeneratorService` _(core/services/generator.ts)_, который должен генерировать случайную последовательность символов длины n из набора _a-z, A-Z, 0-9_. Создайте функцию `GeneratorFactory(n: number)`, которая будет предоставлять сгенерированную строку, используя `GeneratorService`. Зарегистрируйте `GeneratorFactory` используя `useFactory`.
    7. Создайте демо-компонент `AboutComponent` _(layout/components/about.component.ts)_ и внедрите перечисленные выше сервисы. Используйте декоратор `@Optional()`.