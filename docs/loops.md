# Loops: Repeating Tasks Automatically

## Why Do We Need Loops?

Imagine you are told to write the phrase "I will not talk in class" on a chalkboard 100 times. That would take a long time and your hand would hurt! 

In programming, we hate doing the same thing over and over manually. Whenever a process needs to be repeated, we use a tool called a **loop**.

A loop is simply a set of instructions that the computer repeats automatically until a specific stopping condition is met. Loops make our algorithms efficient and save us a lot of typing!

## The `FOR` Loop

One of the most common ways to make a computer repeat a task is using a **FOR loop**. A FOR loop is perfect when you know exactly *how many times* you want to repeat something.

Here is what the syntax looks like in pseudo code:

```pseudo
FOR counter FROM 1 TO 4 DO
  PRINT counter
END FOR
```

If you run this algorithm, the computer will print:
```text
1
2
3
4
```

### Breaking Down the `FOR` Loop

Let's look closely at how it works:
1. `FOR counter FROM 1`: We create a temporary variable named `counter` and start it at 1.
2. `TO 4`: We tell the loop to keep repeating until the counter reaches 4.
3. `DO`: This tells the computer to execute the instructions inside the loop.
4. After each repetition, the computer automatically increases the counter by 1.
5. `END FOR`: This marks the end of the loop block.

### A Real World Example

Let's use a `FOR` loop to count down the days until the weekend:

```pseudo
FOR day FROM 1 TO 5 DO
  PRINT "It is day " + day + " of the work week."
END FOR

PRINT "Hooray! It is the weekend!"
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

## The `WHILE` Loop

Sometimes, you don't know exactly how many times a loop needs to run. You just want it to keep going **while** a certain condition is true. For this, we use a **WHILE loop**.

```pseudo
SET hunger_level TO 5

WHILE hunger_level > 0 DO
  PRINT "Eating a slice of pizza..."
  SET hunger_level TO hunger_level - 1
END WHILE

PRINT "I am full!"
```

This loop will check the condition (`hunger_level > 0`). If it is true, it eats a slice of pizza and decreases the hunger level. It will repeat this 5 times until the hunger level hits 0, at which point the loop stops and prints "I am full!".

Loops are incredibly powerful tools that you will use all the time as you build algorithms!
