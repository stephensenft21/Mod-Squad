   
   const showInfo = document.querySelector(".showInfo")
   
   const ModSquad = {

        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//added a comma at the end of the array. 
        series: {
            "start": "1968",
            "end": "1973"
        }
    }
//changed my "const" to a "let" variable
   let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })

//added an article tag to the DOM to hold the "showInfo" class
showInfo.innerHTML = HTMLRepresentation