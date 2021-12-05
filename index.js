var Friends = {
    firstname: "Tommy",
    lastname: "Thompson",
    age: 40,
    gender: "male",
    favoriteActors: ["Nicole Kidman", "Anna Kendrick", "Brad Pitt", "Will Smith", "Charliz Theron"],
    favoriteShows: [
        {
            showName: "Friends",
            numberofSeasons: "25",
            favoriteCharacter: "Chandler",
            schedule: [
                "5pm on Tuesday",
                "5pm on Thursday",
            ]
        },
        {
            showName: "The Shrink Next Door",
            numberofSeasons: "1",
            favoriteCharacter: "Marti",
            schedule: [
                "5pm on Monday",
                "5pm on Wednesday",
            ]
        },
        {
            showName: "New Amsterdam",
            numberofSeasons: "4",
            favoriteCharacter: "Dr. Goodwin",
            schedule: [
                "9pm on Tuesdays",
                "5pm on Thursday",
            ]
        },
        {
            showName: "Virgin River",
            numberofSeasons: "3",
            favoriteCharacter: "Melinda Monroe",
            schedule: [
                "430pm on Tuesday",
                "430pm on Thursday",
            ],
        }
            ],
    printFavoriteActors: function() {
        for (1=0; 1 < this.favoriteActors.length; i++) {
            console.log(this.favoriteActors[i])
        }
    }   
}