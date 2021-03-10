# JAMStack course week 10 - Functions and Control Flow.

This week we started looking at **Functions** and **Control Flow**. We had a brief introduction to **scope** and played around with some **booleans**.

In the class we performed the exercises by having a **script** in the main html which output to the console using `console.log` and then we reviewed the output via [Dev Tools](https://developers.google.com/web/tools/chrome-devtools). To make viewing easier, I have used some simple javascript to display the output in previously empty paragraphs on the click of a button.

Because I wanted to use basic bootstrap form validation along with my own javascript, I had to use a bit of a hack to prevent the form from trying to submit to the server and having the page refresh which would cause the input values to be lost. There is probably a much more elegant solution, but given we are at the beginning of our javascript journey I simply added the following 2 lines to bottom of the bootstrap default form event listener:

```
event.preventDefault()
event.stopPropagation()
```