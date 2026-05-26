function generateStory(){

    // Get Input Values
    let hero = document.getElementById("heroName").value;

    let place = document.getElementById("place").value;

    let genre = document.getElementById("genre").value;

    let story = "";

    // Fantasy Story
    if(genre === "fantasy"){

        story = `${hero} entered the magical land of ${place}. 
        Suddenly, a glowing dragon appeared in the sky. 
        The entire kingdom waited for ${hero} to save them from darkness.`;

    }

    // Horror Story
    else if(genre === "horror"){

        story = `${hero} walked alone into the haunted place called ${place}. 
        Strange whispers echoed through the walls. 
        Suddenly, the lights went out and footsteps came closer...`;

    }

    // Sci-Fi Story
    else{

        story = `${hero} landed on the futuristic planet ${place}. 
        Flying cars filled the neon sky. 
        An AI robot approached ${hero} with an urgent mission to save humanity.`;

    }

    // Display Story
    document.getElementById("storyOutput").innerText = story;
}