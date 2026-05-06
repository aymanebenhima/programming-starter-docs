# Loops: Repeating Tasks Automatically

## Why Do We Need Loops?

Imagine you are told to write the phrase "I will not talk in class" on a chalkboard 100 times. That would take a long time and your hand would hurt! 

In programming, we hate doing the same thing over and over manually. Whenever a process needs to be repeated, we use a tool called a **loop**.

A loop is simply a set of instructions that the computer repeats automatically until a specific stopping condition is met. Loops make our code efficient and save us a lot of typing!

## The `for` Loop

One of the most common ways to make a computer repeat a task is using a **for loop**. 

A `for` loop needs three pieces of information to work:
1. **Where to start** (Initialization)
2. **When to stop** (Stopping condition)
3. **How to count up** (Iteration step)

These three pieces of information go inside parentheses `()` and are separated by semicolons `;`.

Here is what the syntax looks like:

```js
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
```

If you run this code, the computer will print:
```text
0
1
2
3
```

## Breaking Down the `for` Loop

Let's look closely at the three parts inside the parentheses of our example:

1. `let counter = 0;`  
   **Where to start:** We create a variable named `counter` and set it to `0`. This is where our loop begins.

2. `counter < 4;`  
   **When to stop:** This is a condition, just like in an `if` statement! The loop will keep running **as long as** the counter is less than 4. If the counter reaches 4, the loop stops immediately.

3. `counter++`  
   **How to count up:** After each loop finishes, we need to increase our counter so the loop doesn't run forever. `counter++` simply adds `1` to the counter after every single round.

Inside the curly braces `{}` is the actual code we want the computer to repeat. In this case, we told it to `console.log(counter)`, which is why it prints the numbers 0, 1, 2, and 3!

## A Real World Example

Let's use a `for` loop to count down the days until the weekend:

```js
for (let day = 1; day <= 5; day++) {
  console.log(`It is day ${day} of the work week.`);
}
console.log('Hooray! It is the weekend!');
```

The output will be:
```text
It is day 1 of the work week.
It is day 2 of the work week.
It is day 3 of the work week.
It is day 4 of the work week.
It is day 5 of the work week.
Hooray! It is the weekend!
```

Loops are incredibly powerful tools that you will use all the time as you learn to code!
