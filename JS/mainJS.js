// 1. -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

    // function DescribeTag(titleOfTag, action, attrs) {
    //     this.titleOfTag = titleOfTag;
    //     this.action = action;
    //     this.attrs = attrs;
    // }
    //
    // let title = 'a';
    // let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
    // let attributs = [
    //     {titleAttr: 'accesskey', actionAttr: 'Активация ссылки с помощью комбинации клавиш.'},
    //     {titleAttr: 'coords', actionAttr: 'Устанавливает координаты активной области'},
    //     {titleAttr: 'download', actionAttr: 'Предлагает скачать указанный по ссылке файл'},
    // ];
    //
    // let tagA = new DescribeTag(title, action, attributs);
    // console.log(tagA);
    //
    // title = 'div';
    // action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
    // attributs = [
    //     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
    //     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
    // ];
    //
    // let tagDiv = new DescribeTag(title, action, attributs);
    // console.log(tagDiv);
    //
    // title = 'h1';
    // action = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
    // attributs = [
    //     {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
    //     {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
    // ];
    //
    // let tagH1 = new DescribeTag(title, action, attributs);
    // console.log(tagDiv);
    //
    // title = 'span';
    // action = 'Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль. Например, внутри абзаца (тега <p>) можно изменить цвет и размер первой буквы, если добавить начальный и конечный тег <span> и определить для него стиль текста. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.';
    // attributs = ['no attributs'];
    //
    // const tagSpan = new DescribeTag(title, action, attributs);
    // console.log(tagSpan);

// 2. -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }

    // class Describe {
    //     constructor(titleOfTag, action, attrs) {
    //         this.titleOfTag = titleOfTag;
    //         this.action = action;
    //         this.attrs = attrs;
    //     }
    // }
    //
    // let title = 'input';
    // let action = ' Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков. Хотя элемент <input> не требуется помещать внутрь контейнера <form>, определяющего форму, но если введенные пользователем данные должны быть отправлены на сервер, где их обрабатывает серверная программа, то указывать <form> обязательно. ';
    // let attributs = [
    //     {titleOfAttr: 'accept', actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
    //     {titleOfAttr:'border', actionOfAttr: 'Толщина рамки вокруг изображения.'},
    //     {titleOfAttr:'multiple', actionOfAttr: 'Позволяет загрузить несколько файлов одновременно.'},
    // ];
    //
    // let tagInput = new Describe(title, action, attributs);
    // console.log(tagInput);
    //
    //
    // title = 'form';
    // action = 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.';
    // attributs = [
    //     {titleOfAttr: 'ccept-charset', actionOfAttr: 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'},
    //     {titleOfAttr: 'enctype', actionOfAttr: 'Способ кодирования данных формы.'},
    // ];
    //
    // let tagForm = new Describe(title, action, attributs);
    // console.log(tagForm);
    //
    // title = 'option';
    // action = 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
    // attributs = [
    //     {titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
    //     {titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.'},
    //     {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'},
    // ];
    //
    // let tagOption = new Describe(title, action, attributs);
    // console.log(tagOption);
    //
    // title = 'select';
    // action = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Каждый пункт создается с помощью тега <option>, который должен быть вложен в контейнер <select>. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.';
    // attributs = [
    //     {titleOfAttr: 'accesskey', actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'},
    //     {titleOfAttr: 'form', actionOfAttr: 'Связывает список с формой.'},
    //     {titleOfAttr: 'name', actionOfAttr: 'Имя элемента для отправки на сервер или обращения через скрипты.'},
    // ];
    //
    // let tagSelect = new Describe(title, action, attributs);
    // console.log(tagSelect);

// 3. -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

    // let car = {
    //     model: 'mazda CX-30',
    //     producer: 'mazda',
    //     year : 2019,
    //     maxSpeed : 193,
    //     volumeEngine : 1.8,
    //     drive() {
    //         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    //     },
    //     info() {
    //         if (this.driver) {
    //             console.log(
    //             `model: ${this.model},
    //             producer: ${this.producer},
    //             year : ${this.year},
    //             maxSpeed : ${this.maxSpeed},
    //             volumeEngine : ${this.volumeEngine},
    //             driver : ${this.driver.name} age ${this.driver.age},
    //             `);
    //             } else {
    //             console.log(
    //             `model: ${this.model},
    //             producer: ${this.producer},
    //             year : ${this.year},
    //             maxSpeed : ${this.maxSpeed},
    //             volumeEngine : ${this.volumeEngine},
    //             `);
    //         }
    //
    //     },
    //     increaseMaxSpeed (newSpeed) {
    //         this.maxSpeed = newSpeed;
    //     },
    //     changeYear(newValue) {
    //         this.year = newValue;
    //     },
    //     addDriver (driver){
    //         this.driver = driver;
    //     },
    // }
    //
    // let driver = {name: 'Vitaliy', age: 35, status: true}
    //
    // car.drive();
    // car.info();
    // car.increaseMaxSpeed(30);
    // car.changeYear(2021);
    // car.addDriver(driver);
    // car.info();

// 4. -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

    // class Human {
    //     constructor(name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }
    // class Cinderella extends Human {
    //     constructor(name, age, footSize) {
    //         super(name, age);
    //         this.footSize = footSize;
    //     }
    // }
    //
    // let arrayCinderelles = [];
    // arrayCinderelles[0] = new Cinderella('Karina', 17, 38);
    // arrayCinderelles[1] = new Cinderella('Milissa', 29, 39.5);
    // arrayCinderelles[2] = new Cinderella('Amaliya', 25, 37.5);
    // arrayCinderelles[3] = new Cinderella('Sofiya', 19, 38);
    // arrayCinderelles[4] = new Cinderella('Mariya', 18, 34.5);
    // arrayCinderelles[5] = new Cinderella('Valeriya', 21, 38);
    // arrayCinderelles[6] = new Cinderella('Anabelle', 18, 37);
    // arrayCinderelles[7] = new Cinderella('Sherelise', 22, 39);
    // arrayCinderelles[8] = new Cinderella('Assol', 23, 38.5);
    // arrayCinderelles[9] = new Cinderella('Edera', 16, 36.5);
    //
    //
    // class Princes extends Human{
    //     constructor(name, age, shoe) {
    //         super(name, age);
    //         this.shoe = shoe;
    //     }
    // }
    //
    // let prince = new Princes('Peter', 19, 34.5)
    // for (const item of arrayCinderelles) {
    //     if (item.footSize === prince.shoe) {
    //         console.log(item.name)
    //     }
    // }

// 5. -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

    // function Cinderella(name, age, footSize) {
    //     this.name = name ||'No name';
    //     this.age = age || 'No age';
    //     this.footSize = footSize || 'No foot';
    // }
    //
    // let arrayCinderelles = [];
    // arrayCinderelles[0] = new Cinderella('Karina', 17, 38);
    // arrayCinderelles[1] = new Cinderella('Milissa', 29, 39.5);
    // arrayCinderelles[2] = new Cinderella('Amaliya', 25, 37.5);
    // arrayCinderelles[3] = new Cinderella('Sofiya', 19, 38);
    // arrayCinderelles[4] = new Cinderella('Mariya', 18, 34.5);
    // arrayCinderelles[5] = new Cinderella('Valeriya', 21, 38);
    // arrayCinderelles[6] = new Cinderella('Anabelle', 18, 37);
    // arrayCinderelles[7] = new Cinderella('Sherelise', 22, 39);
    // arrayCinderelles[8] = new Cinderella('Assol', 23, 38.5);
    // arrayCinderelles[9] = new Cinderella('Edera', 16, 36.5);
    //
    // function Prince(name, age, shoe) {
    //     this.name = name || 'No name';
    //     this.age = age || 'No age';
    //     this.shoe = shoe || 'No shoe';
    //
    //     this.findCinderella = function (array) {
    //         let find = null;
    //         find = array.find(item => item.footSize === this.shoe);
    //         find
    //             ? console.log('My cinderella name' + ' ' + find.name)
    //             : console.log('I not find my cinderell');
    //     }
    // }
    //
    // let prince = new Prince('Peter', 19, 34.5);
    //
    // prince.findCinderella(arrayCinderelles);
    // console.log(prince);


