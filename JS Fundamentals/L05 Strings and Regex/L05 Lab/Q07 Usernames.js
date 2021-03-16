function getUsernames(emails) {
    let usernames = [];
    emails.forEach(email => {
        let emailTokens = email.split("@");
        let name = emailTokens[0];
        let domain = emailTokens[1];

        let suffix = "";
        domain.split(".").forEach(element => {
            suffix += element[0];
        });

        let currentUsername = name + "." + suffix;
        usernames.push(currentUsername);
    });

    console.log(usernames.join(", "));
}

getUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);