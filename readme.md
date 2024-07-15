"this" kalit so'zi JavaScript-da juda muhim tushuncha bo'lib, u turli xil kontekstlarda turli qiymatlarni qabul qilishi mumkin. "this" ning qiymati funksiyaning qanday chaqirilganiga bog'liq. Keling, "this" ning ishlatilishini oddiy funksiyalarda va arrow funksiyalarda ko'rib chiqaylik.

### Oddiy funksiyalar
Oddiy funksiyalarda "this" kontekstiga ega bo'lib, bu kontekst chaqirilgan usulga bog'liq. 

#### Global Kontekst
Global kontekstda "this" global ob'ektga ( `window`)ga ishora qiladi.

```javascript
function showThis() {
    console.log(this);
}
showThis(); // Brauzerda: window ob'ekti,
```

#### Metod Kontekstida
Agar funksiya ob'ektning metodi sifatida chaqirilsa, "this" o'sha ob'ektga ishora qiladi.

```javascript
const person = {
    name: "Ahmad",
    greet: function() {
        console.log(this.name);
    }
};
person.greet(); // "Ahmad"
```

#### Konstruktor Funksiyalar
Konstruktor funksiyalar yangi ob'ekt yaratishda ishlatiladi va "this" yangi yaratilgan ob'ektga ishora qiladi.

```javascript
function Person(name) {
    this.name = name;
}
const person1 = new Person("Ali");
console.log(person1.name); // "Ali"
```

### Arrow Funksiyalar
Arrow funksiyalar "this" ni tashqi kontekstdan meros qilib oladi. Bu shuni anglatadiki, arrow funksiyalar ichidagi "this" qiymati ulardan tashqaridagi "this" bilan bir xil bo'ladi.

#### Tashqi Kontekstni Meros Qilish

```javascript
const person = {
    name: "Ahmad",
    greet: function() {
        const innerFunction = () => {
            console.log(this.name);
        };
        innerFunction();
    }
};
person.greet(); // "Ahmad"
```

#### Farqlarni Ko'rsatish

```javascript
const person = {
    name: "Ahmad",
    greet: function() {
        const innerFunction = function() {
            console.log(this.name);
        };
        innerFunction(); // undefined (global ob'ekt yoki undefined)
    }
};
person.greet();

const personArrow = {
    name: "Ahmad",
    greet: function() {
        const innerArrowFunction = () => {
            console.log(this.name);
        };
        innerArrowFunction(); // "Ahmad"
    }
};
personArrow.greet();
```

Yuqoridagi misollarda, oddiy funksiya `innerFunction` "this" ni global kontekstdan oladi, shuning uchun u undefined bo'ladi (strict mode da), lekin arrow funksiya `innerArrowFunction` tashqi funksiyaning "this" ni oladi va "Ahmad" ni qaytaradi.

### Xulosa
- Oddiy funksiyalar: "this" kontekst chaqirilgan joyga bog'liq.
- Arrow funksiyalar: "this" tashqi kontekstni meros qilib oladi.
- Konstruktor funksiyalar: "this" yangi yaratilgan ob'ektga ishora qiladi.

"this" ning qanday ishlashini to'g'ri tushunish JavaScript kodini to'g'ri yozish va tushunishda juda muhimdir.