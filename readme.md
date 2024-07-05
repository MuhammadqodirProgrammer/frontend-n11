
Ushbu postda Javascriptda ko'p ishlatiladigan  string metodlari haqida gaplashamiz 


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2inyvbwmdecqtaz5kox1.png)

Ho'sh Stiring o'zi nma 🧐 ?

String - bu bitta yoki ikkita qo'shtirnoq ichidagi har qanday narsa.

**1. toUpperCase() **
Satrlarni katta harifga aylantiradi 👇🏽

```
const str ='Hammaga salom'
console.log(str.toUpperCase()); // Chiqadi: 'HAMMAGA SALOM'

// ! Yodda tuting strni qiymatini ozgartirnmaydi  yani bu qatordan keyin srtni logda ko'rsan 'Hammaga salom' chiqadi 

```

**2. toLowerCase() **
Satrlarni kichik harifga aylantiradi 👇🏽

```
const str ='Hammaga Salom'
console.log(str.toUpperCase()); // Chiqadi: 'hammaga salom'

// ! Yodda tuting strni qiymatini ozgartirnmaydi  yani bu qatordan keyin srtni logda ko'rsan 'Hammaga Salom' chiqadi 

```

**3.  includes() **
Ushbu usul string ma'lum bir qiymatni o'z ichiga oladimi yoki yo'qligini tekshiradi. Bu Booleanni qaytaradi 👇🏽

```
  const str = 'Bugun havo ajoyib';

  console.log(str.includes('Bugun')); // true
  console.log(str.includes('bugun')); // false
  console.log(str.includes(' ')); // true
  console.log(str.includes('array')); // false

```


**4. slice() **
Asl nusxasini o'zgartirmasdan satrning bir qismini nusxalash. 👇🏽
yozilishi:  string.slice(start, end)
```
  const str = 'Bugun havo ajoyib';

  // hech nima yozmasak start index 0
  console.log(str.slice()); // 'Bugun havo ajoyib'

  //  6 -indexdan boshlab copy qilishni boshlaydi
  console.log(str.slice(6)); // 'havo ajoyib'

  // 10-indeksdagi yakuniy nusxa (ushbu indeksdagi belgilar kiritilmaydi) yani **10-index gacha** bolgan qismini oladi
  console.log(str.slice(0, 5)); // 'Bugun'

```


**5. split() **
string.split(separator, limit) usuli yangi massivni qaytaradi. Split() usuli asl satrni o'zgartirmaydi. separator(ajratuvchi) Ajratish uchun ishlatiladigan satr yoki oddiy ifoda , limit bo'linishlar sonini cheklovchi  son 👇🏽

```
 const str = 'JavaScript is amazing';
  const strNew = 'JavaScript-is-amazing';

  console.log(str.split()); // ["JavaScript is amazing"]

  // Separator string used to determine where to make each split
  console.log(str.split('S')); // ["Java", "cript is amazing"]
  console.log(str.split('is')); // ["JavaScript ", " amazing"]
  console.log(str.split(' ')); // ["JavaScript", "is", "amazing"]
  console.log(strNew.split('-')); // ["JavaScript", "is", "amazing"]

```


**6. replace() **
Belgilangan qiymatni satrdagi boshqa qiymat bilan almashtiradi. string.replace(searchValue, newValue) 👇🏽

```
  const str = 'Bu juda oson';

  console.log(str.replace('Bu', 'U')); // 'U juda oson'

  // replace() katta kichik harflarga sezgir
  // replace pastdagi holatda ishlamaydi
 console.log(str.replace('bu', 'U')); // 'Bu juda oson'

  //ketta kichik harflarni chetlab o'tish uchun
  console.log(str.replace(/bu/i, 'U')); // 'U juda oson'

  // replace() metod faqat birinchi qiymatni ozgartiradi
  console.log(str.replace('u', 'A')); // 'BA juda oson'

  // barcha mosliklarni almashtirish uchun quyidagicha
  console.log(str.replace(/u/g, 'A')); // 'BA jAda oson'

```


**7. trim() **
Bu usul satrning ikkala tomonidagi barcha bo'shliqlarni olib tashlash uchun ishlatiladi. E'tibor bering, u bo'shliqlarni satr orasidagi emas, balki ikkala tomondan olib tashlaydi. 👇🏽

```
 const followMeOnTelegram = "      @Muhammadqodir_Programmer         "
 const followMePlease = followMeOnTwitter.trim()

 console.log(followMePlease)
 //natija: '@Muhammadqodir_Programmer'

```

Etiboringiz uchun raxmat 😎, endi borib ko'proq mashq qiling  va [yana o'shingizni tavsiya qilaman ](https://www.w3schools.com/jsref/jsref_obj_string.asp)

Iltimos, ushbu postga like bosing va baham ko'ring!

[Follow Me Telegram Channel](https://t.me/muhammadqodir_dev)


