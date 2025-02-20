const html_elmets = {
    body: document.body,
    profile__img__box: document.getElementsByClassName("profile__img__box")[0],
    anim_items: document.getElementsByClassName("content"),
    sidebar: document.getElementsByClassName("sidebar")[0],
    close: document.getElementsByClassName("sidebar__cross")[0],
    menu: document.getElementsByClassName("sidebar__cross")[1],
}

const components_base = {
    nav_buttons: [
        {
            id: "Contacts",
            src: "assets/images/icons/conversation.png"
        },
        {
            id: "Skills",
            src: "assets/images/icons/skill-development.png"
        },
        {
            id: "projects",
            src: "assets/images/icons/management.png"
        },
        {
            id: "About",
            src: "assets/images/icons/information.png"
        },
    ],
}

const globals = {
    is_sidebar_visible: true,
}

const build_buttons = () => {
    for (let ß = 0; ß < 4; ß++) {
        const a = document.createElement("a");
        a.classList.add("profile__img__button");
        a.setAttribute("href", `#${components_base.nav_buttons[ß].id}`);;
        a.onclick = sidebar_controler;
    
        const img = document.createElement("img");
        img.src = components_base.nav_buttons[ß].src;
        img.alt = "scroll";
    
        a.append(img);
        html_elmets.profile__img__box.append(a);
    }
}

const add_animations = () => {
    if (html_elmets.anim_items.length > 0) {
        const animOnScroll = () => {
            for (let i = 0; i < html_elmets.anim_items.length; i++) {
                const anim_item = html_elmets.anim_items[i];
                const anim_item_height = anim_item.offsetHeight;
                const anim_item_offset = offset(anim_item).top;
                const anim_start = 4;
    
                let anim_item_point = window.innerHeight - anim_item_height / anim_start;
                if (anim_item_height > anim_item_offset - anim_item_point) {
                    anim_item_point = window.innerHeight - window.innerHeight / anim_start;
                }
    
                if ((pageYOffset > anim_item_offset - anim_item_point) && pageYOffset < (anim_item_offset + anim_item_height)) {
                    anim_item.classList.add("_active");
                } else {
                    anim_item.classList.remove("_active");
                }
            }
        }
        const offset = (el) => {
            const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
        window.addEventListener("scroll", animOnScroll);
        setTimeout(animOnScroll, 100)
    }
}

const sidebar_controler = () => {
    if (window.innerWidth <= 850) {
        html_elmets.body.classList.toggle("blocked");
        html_elmets.sidebar.classList.toggle("hidden");
        html_elmets.menu.classList.toggle("hiddenB");
        html_elmets.close.classList.toggle("hiddenB");
    }
}


build_buttons()
add_animations()