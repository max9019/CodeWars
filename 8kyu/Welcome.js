/*
https://www.codewars.com/kata/welcome

Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting -
if you have it in your database.
It should default to English if the language is not in the database, or in the event of an invalid input.
 */

function greet(language) {
    if (language === 'english') return 'Welcome';
    if (language === 'czech') return 'Vitejte';
    if (language === 'danish') return 'Velkomst';
    if (language === 'dutch') return 'Welkom';
    if (language === 'estonian') return 'Tere tulemast';
    if (language === 'finnish') return 'Tervetuloa';
    if (language === 'flemish') return 'Welgekomen';
    if (language === 'french') return 'Bienvenue';
    if (language === 'german') return 'Willkommen';
    if (language === 'irish') return 'Failte';
    if (language === 'italian') return 'Benvenuto';
    if (language === 'latvian') return 'Gaidits';
    if (language === 'lithuanian') return 'Laukiamas';
    if (language === 'polish') return 'Witamy';
    if (language === 'spanish') return 'Bienvenido';
    if (language === 'swedish') return 'Valkommen';
    if (language === 'welsh') return 'Croeso';
    else return "Welcome";
}