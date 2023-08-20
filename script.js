const advId = document.getElementById("advId");
const advText = document.getElementById("advText");
const advButton = document.getElementById("advButton");


async function getAdvice() {

    const url = "https://api.adviceslip.com/advice"

    try {
        const response =await fetch(url)
        const data = await response.json()

        
        advId.textContent = data["slip"]["id"];
        advText.textContent = data["slip"]["advice"];
    }

    catch(e) {
        console.log(e)
    }
}


advButton.addEventListener('click' , getAdvice);
