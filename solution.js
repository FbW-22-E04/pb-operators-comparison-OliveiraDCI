console.log("==> EXERCISE: Comparison Operators");

// 0
console.log(
  "0. Declare two variables apples and oranges. Assign a value of 20 to apples. Assign a value of 30 to oranges."
);
const apples = 20;
const oranges = 30;
console.log(
  "--> Assigned the value of " +
    apples +
    " to apples, and " +
    oranges +
    " to oranges."
);

// 1
console.log("1. Check whether apples and oranges are equal.");
console.log(apples === oranges);

// 2
console.log("2. Check whether apples and oranges are not equal.");
console.log(apples !== oranges);

// 3
console.log("3. Check whether apples is greater than oranges.");
console.log(apples > oranges);

// 4
console.log("4. Check whether apples is less than or equal to oranges.");
console.log(apples <= oranges);

// 5
console.log("5. Check whether oranges is greater than apples.");
console.log(oranges > apples);

// 6
console.log(
  "6. Declare another variable mangoes and give it a value of 5. Multiply mangoes by apples, and check whether this result is greater than mangoes added to oranges."
);
const mangoes = 5;
console.log("--> Assigned value of " + mangoes + " to mangoes.");
console.log(mangoes * apples > mangoes + oranges);

// 7
console.log(
  "7. Subtract mangoes from apples and check whether this result is less than oranges divided by mangoes."
);
console.log(apples - mangoes < oranges / mangoes);

// 8
console.log("8. Check whether mangoes, apples and oranges are equal.");
console.log(mangoes === apples && apples === oranges);

// 9
console.log(
  "9. Check whether the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes are equal."
);
const remainderApples = apples % mangoes;
const remainderOranges = oranges % mangoes;
console.log(remainderApples === remainderOranges);

// 10
console.log(
  "10. Check whether mangoes added to apples is greater than oranges minus mangoes. If it is not, find an operator which will give a result of true."
);
console.log(mangoes + apples <= oranges - mangoes);

// 11
console.log("11. BONUS CHALLENGE: add question headings to outputs");
console.log("--> Bonus Challenge accepted!");
