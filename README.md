# Welcome Hackbright Students!

It's your Instructor, Heather! I made this demo repo for you. It's a single-page React app with a few key examples. If you look through the files, you'll find lots of comments that guide you through the example code. I recommend you clone the repo, make and activate a virtual environment, install the requirements, and run the app. That way, you'll get to see the examples in action as you explore the code.

## The Flask App
Start by taking a look at `server.py`. Pretty simple, right? Not much there. For a single-page React app, you'll mostly use your Flask app as an API that serves up `JSON`. Notice that the app only has one route that renders `HTML`.

## The HTML
Take a look at `main.html` in the `templates` folder. Once again, it's a very simple file. But there are a few important things to note:
- -The React libraries, included as script tags in the `<head>`.
- -The `jsx` files, included as script tags at the bottom of the `<body>`. (Their order is important as noted in the comments.)
- -The "root" `<div>`, the element that will hold our entire React app.
In a React app, we don't need jinja2 or lots of separate HTML files. Most of the magic happens dynamically on the frontend using the React logic written in the `jsx` files. We can change the content on the page without ever actually reloading the page. (Our server never needs to render anything other than `main.html`.) From our user's perspective, it will seem as if they are moving seamlessly from page to page.

## The React App
Next, take a look at the `jsx` files under `static/js`. The main logic for the React app is in `app.jsx`. This file contains an example of how to use React's Router library. From there, you can browse the other (numbered) examples. Read the comments throughout the files for more info.
- -Example 1: `mybutton.jsx`
- -Example 2: `books.jsx`
- -Example 3: `timer.jsx`
- -Example 4: `ajax.jsx` and `details.jsx`

If you have any questions, feel free to reach out! I hope these examples are useful to you.
