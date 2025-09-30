const messageElement = document.getElementById("message");

let messages = [
    "Hello World",
    "It's day 2"
];

messageElement.innerHTML = messages.reverse().map((m) => {
    return '<p>' + m + '</p>\n\n'
}).join('');