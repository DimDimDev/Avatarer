// En avatar har egenskaperna name, age, type och image

var avatars = []

function Avatar(avatarName, age, type, avatarImage) {
    this.avatarName = avatarName;
    this.age = age;
    this.type = type;
    this.avatarImage = avatarImage;
};



avatars.push(
    harry = new Avatar("Harry", 37, "Human", "https://avatars.dicebear.com/v2/human/Harry.svg"), 
    beepboop = new Avatar ("BeepBoop", 5, "Robot", "https://avatars.dicebear.com/v2/bottts/BeepBoop.svg"),
    josefin = new Avatar ("Josefin", 25, "Female", "https://avatars.dicebear.com/v2/female/Josefin.svg"),
    botty = new Avatar ("Botty", 4, "Robot", "https://avatars.dicebear.com/v2/bottts/Botty.svg"),
    dimitris = new Avatar ("Dimitris", 34, "Human","https://avatars.dicebear.com/v2/human/Dimitris.svg")
    );
