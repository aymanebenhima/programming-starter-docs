# Conditionals: Making Decisions

## How Computers Make Decisions

In everyday life, you make decisions all the time based on the situation. 
- **If** it is raining, **then** I will take an umbrella.
- **Else** (otherwise), I will wear sunglasses.

We can teach computers to make these same kinds of decisions! In pseudo code, we call these **conditional statements**. They check if a specific condition is true, and then perform a task based on the result.

## The `IF ... THEN` Statement

The simplest way to make a decision is using an `IF` statement. 

```pseudo
SET is_raining TO TRUE

IF is_raining EQUALS TRUE THEN
  PRINT "Take an umbrella!"
END IF
```

Here is how it is built:
1. It starts with the word `IF`.
2. Next is the **condition** (`is_raining EQUALS TRUE`). This is a question that has a yes/no answer.
3. Then comes the word `THEN`. The instructions inside will run **only if** the condition is true.
4. We finish the block with `END IF` so the computer knows where the decision ends.

If `is_raining` was `FALSE`, the computer would simply skip the code inside and print nothing!

## The `IF ... THEN ... ELSE` Statement

What if we want the computer to do something else when the condition is false? We can add an `ELSE` statement!

```pseudo
SET is_raining TO FALSE

IF is_raining EQUALS TRUE THEN
  PRINT "Take an umbrella!"
ELSE
  PRINT "Wear sunglasses!"
END IF
```

Now, if the condition is false, the computer skips the first block and runs the code inside the `ELSE` block instead. In this case, it will print: `Wear sunglasses!`.

## Asking Questions: Comparison Operators

Usually, our conditions aren't just a simple TRUE or FALSE variable. We want to compare things. For example: "Is the player's score higher than 100?"

To ask these questions, we use **comparison operators**:
- `<` : Less than
- `>` : Greater than
- `<=` : Less than or equal to
- `>=` : Greater than or equal to
- `EQUALS` (or `==`) : Is exactly equal to
- `NOT EQUALS` (or `!=`) : Is not equal to

Let's see this in action:

```pseudo
SET hunger_level TO 8

IF hunger_level > 7 THEN
  PRINT "Time to eat!"
ELSE
  PRINT "We can eat later!"
END IF
```
Since 8 is greater than 7, this code will print: `Time to eat!`.

## Multiple Decisions: `ELSE IF`

Sometimes life isn't just A or B. There might be a C, D, and E! 

If we have more than two possible outcomes, we can chain decisions together using `ELSE IF`.

```pseudo
SET stop_light TO "yellow"

IF stop_light EQUALS "red" THEN
  PRINT "Stop!"
ELSE IF stop_light EQUALS "yellow" THEN
  PRINT "Slow down!"
ELSE IF stop_light EQUALS "green" THEN
  PRINT "Go!"
ELSE
  PRINT "Caution, unknown light!"
END IF
```

The computer reads from top to bottom. It checks the first condition (`"red"`). Since that is false, it moves to the next one (`"yellow"`). Since that is true, it runs that block of code and completely ignores the rest!

## Checking Multiple Things at Once (Logical Operators)

What if you want to go to the park, but **only if** it is sunny **AND** it is the weekend?

We can use **logical operators** to combine conditions:
- **AND**: Both conditions must be true.
- **OR**: Only one of the conditions needs to be true.

Using `AND`:
```pseudo
SET is_sunny TO TRUE
SET is_weekend TO TRUE

IF is_sunny EQUALS TRUE AND is_weekend EQUALS TRUE THEN
  PRINT "Let us go to the park!"
END IF
```

Using `OR`:
```pseudo
SET day TO "Saturday"

IF day EQUALS "Saturday" OR day EQUALS "Sunday" THEN
  PRINT "Enjoy the weekend!"
END IF
```

## Review

Let’s review conditionals:
- **`IF ... THEN`** checks a condition and runs a block of code if the condition is true.
- **`ELSE`** gives a default backup plan if the condition was false.
- **`ELSE IF`** lets you check multiple different conditions in a row.
- **Comparison operators** (like `>`, `<`) help you compare values.
- **Logical operators** (`AND`, `OR`) let you combine multiple conditions together.
