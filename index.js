// En avatar har egenskaperna name, age, type och image

var avatars = []

function Avatar(avatarName, age, type, avatarImage) {
    this.avatarName = avatarName;
    this.age = age;
    this.type = type;
    this.avatarImage = avatarImage;
};



avatars.push(
    harry = new Avatar("Harry", 37, "human", "https://avatars.dicebear.com/v2/human/Harry.svg"), 
    beepboop = new Avatar ("BeepBoop", 5, "botts", "https://avatars.dicebear.com/v2/bottts/BeepBoop.svg"),
    josefin = new Avatar ("Josefin", 25, "female", "https://avatars.dicebear.com/v2/female/Josefin.svg"),
    botty = new Avatar ("Botty", 4, "botts", "https://avatars.dicebear.com/v2/bottts/Botty.svg"),
    dimitris = new Avatar ("Dimitris", 34, "human","https://avatars.dicebear.com/v2/human/Dimitris.svg")
    );


function render() {
    var container = document.getElementById("flex-container");
    container.innerHTML = "";
    avatars.forEach(avatar => {
        var avatarElement = document.createElement("div");
        avatarElement.classList.add("card")
        avatarElement.innerHTML = `
        <img src=${avatar.avatarImage} alt=${avatar.avatarName} style="width:60%">
        <h4><b>${avatar.avatarName}</b></h4> 
        <p>${avatar.age}</p> 
        <p>${avatar.type}</p> 
        `
    container.appendChild(avatarElement);
    });
}