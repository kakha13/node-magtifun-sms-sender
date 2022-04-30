# NODE Magtifun SMS Sender

Demo: https://magtifun.herokuapp.com/

main.html წამოადგენს html ფორმას რომელის საშუალებითაც შეგიძლიათ გადასცეთ საჭირო მონაცემები api -ს

ასევე შეგიძლიათ პირდაპირ post მოთხოვნით მიაკითხოთ /api -ს მისამართზე


აუცილებელი ველებია
--------------
- phone: გამგზავნის ტელეფონის და magtifun ის username
- password: ამავე მომხარებლის პაროლი
- phone2: მიმღების ტელეფონის ნომერი
- text: გასაგზავნი ტექსტი


მაგალითი
--------------
```
{
 "phone": "5********",
 "password": "********",
 "phone2": "5********",
 "text": "Hi"
}
```
ვაგზავნით მისამართზე: ```http://localhost:3000/api```
 

პასუხები
--------------
| Status | Response  |
| ------ | --------- |
| success   |<pre lang="json">{<br>  "status": "success"}</pre>|
| failed    |<pre lang="json">{<br>  "status": "failed",<br>  "error": ["phone", "password", "phone2", "text"]<br>}</pre>|

```error``` ში არსებული ჩამონათვალი ასახავს გამოტოვილ ველებს.

ინსტალაცია
--------------
1. დაკლონეთ რეპოზიტორი
2. შედით საქაღალდეში
3. გუაშვით ბრძანება ```npm install```
4. გაშვება ```npm run start``` იგივე რაც ```node main.js```
სერვისი მზადაა.

ძირითადი პორტი: ```3000```
მისამართი: ```http://localhost:3000/```
API მისამართი: ```http://localhost:3000/api```