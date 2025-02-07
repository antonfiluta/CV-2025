const html_elmets = {
    body: document.body,
    profile__img__box: document.getElementsByClassName("profile__img__box")[0],
}

const components_base = {
    nav_buttons: [
        'assets/images/icons/conversation.png',
        'assets/images/icons/skill-development.png',
        'assets/images/icons/management.png',
        'assets/images/icons/information.png',
    ],
}

for (let ß = 0; ß < 4; ß++) {
    const button = document.createElement("button");
    button.classList.add("profile__img__button");
    button.onclick = () => scroll_content();

    const img = document.createElement("img");
    img.src = components_base.nav_buttons[ß];
    img.alt = "scroll"

    button.append(img);
    html_elmets.profile__img__box.append(button);
}