const buttons = document.querySelectorAll(".button");
let district = document.getElementsByClassName("district-name")
let desc = document.getElementsByClassName("description-text"); // match your HTML
let map = document.getElementById("map");

buttons.forEach(setupButton);

function setupButton(button) {
    if (button) {
        const pElement = button.querySelector('p');
        const name = pElement.textContent;
         district[0].innerHTML = "District";

        let newImg = name + ".png";

        button.addEventListener("click", function() {
            map.src = newImg;
            district[0].innerHTML = (name === "Blank Map") ? "District" : name;
            // Always use desc[0] since there is only one description div
            if (name == "Corozal") {
                desc[0].innerHTML = "Corozal District is the northernmost district of Belize, bordering Mexico. Its capital is Corozal Town, and it’s known for sugar cane farming and Maya ruins like Cerros and Santa Rita.";
            } else if (name == "Orange Walk") {
                desc[0].innerHTML = "Orange Walk District, in northern Belize, has its capital at Orange Walk Town. It’s known for its sugar industry, Mestizo culture, and nearby Maya sites such as Lamanai.";
            } else if (name == "Belize") {
                desc[0].innerHTML = "Belize District is home to Belize City, the country’s largest urban area and main port. The district includes the offshore cayes, the Belize River, and parts of the Belize Barrier Reef.";
            } else if (name == "Cayo") {
                desc[0].innerHTML = "Cayo District is located in western Belize and is known for its lush forests, waterfalls, and Maya ruins like Xunantunich and Caracol. The capital, Belmopan, is also in Cayo.";
            } else if (name == "Stann Creek") {
                desc[0].innerHTML = "Stann Creek District lies along the Caribbean coast of south-central Belize. Its capital is Dangriga, and it’s home to the Garifuna culture, banana farms, and the Cockscomb Basin Wildlife Sanctuary.";
            } else if (name == "Toledo") {
                desc[0].innerHTML = "Toledo District is the southernmost district of Belize, with Punta Gorda as its capital. It’s known for its Maya villages, caves, and rich biodiversity in the rainforest and coastal areas.";
            } else if (name == "Blank Map") {
                desc[0].innerHTML = "";
            } else {
                desc[0].innerHTML = "Unknown district name.";
            }

            console.log(name + " — " + desc[0].innerHTML);
        });
    }    
}
