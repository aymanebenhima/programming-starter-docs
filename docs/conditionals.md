# Conditional Statements: Making Decisions

## How Computers Make Decisions

In everyday life, you make decisions all the time based on the situation. 
- **If** it is raining, **then** I will take an umbrella.
- **Else** (otherwise), I will wear sunglasses.

We can teach computers to make these same kinds of decisions! In code, we call these **conditional statements**. They check if a specific condition is true, and then perform a task based on the result.

## The `if` Statement

The simplest way to make a decision in code is using the `if` statement. 

```js
let itIsRaining = true;

if (itIsRaining) {
  console.log('Take an umbrella!');
}
```

Here is how an `if` statement is built:
1. It starts with the word `if`.
2. Next are parentheses `()`. Inside them goes the **condition** (a question that has a yes/no or true/false answer).
3. Finally, there are curly braces `{}`. Inside the braces is the code that will run **only if** the condition is `true`.

If `itIsRaining` was `false`, the computer would simply skip the code inside the curly braces and print nothing!

## The `if...else` Statement

What if we want the computer to do something else when the condition is `false`? We can add an `else` statement!

```js
let itIsRaining = false;

if (itIsRaining) {
  console.log('Take an umbrella!');
} else {
  console.log('Wear sunglasses!');
}
```

Now, if the condition is `false`, the computer skips the first block of code and runs the code inside the `else` block instead. In this case, it will print: `Wear sunglasses!`.

## Asking Questions: Comparison Operators

Usually, our conditions aren't just a simple `true` or `false` variable. We want to compare things. For example: "Is the player's score higher than 100?"

To ask these questions, we use **comparison operators**:
- Less than: `<`
- Greater than: `>`
- Less than or equal to: `<=`
- Greater than or equal to: `>=`
- Is exactly equal to: `===`
- Is NOT equal to: `!==`

*Notice that "is equal to" uses three equal signs `===`. Remember that a single equal sign `=` is only used for putting data into a variable box!*

Let's see this in action:

```js
let hungerLevel = 8;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}
```
Since 8 is greater than 7, this code will print: `Time to eat!`.

## Multiple Decisions: `else if`

Sometimes life isn't just A or B. There might be a C, D, and E! 

If we have more than two possible outcomes, we can use `else if` statements to chain decisions together.

```js
let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down!');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown light!');
}
```

The computer reads from top to bottom. It checks the first condition (`'red'`). Since that is false, it moves to the next one (`'yellow'`). Since that is true, it runs that block of code and completely ignores the rest!

## Checking Multiple Things at Once (Logical Operators)

What if you want to go to the park, but **only if** it is sunny **AND** it is the weekend?

We can use **logical operators** to combine conditions:
- **AND** (`&&`): Both conditions must be true.
- **OR** (`||`): Only one of the conditions needs to be true.

Using AND (`&&`):
```js
let isSunny = true;
let isWeekend = true;

if (isSunny && isWeekend) {
  console.log('Let us go to the park!');
}
```

Using OR (`||`):
```js
let day = 'Saturday';

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
}
```

## Review

Let’s review conditionals:
- **`if`** checks a condition and runs a block of code if the condition is `true`.
- **`else`** gives a default backup plan if the condition was `false`.
- **`else if`** lets you check multiple different conditions in a row.
- **Comparison operators** (like `>`, `<`, `===`) help you compare values.
- **Logical operators** (`&&` for AND, `||` for OR) let you combine multiple conditions together.
