const messageElement = document.getElementById("message");

let messages = [
    "Hello World",
    "It's day 2",
    "I think I understand map outputs now."
];

messageElement.innerHTML = messages.reverse().map((m) => {
    return '<p>' + m + '</p>\n\n'
}).join('');