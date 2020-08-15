function main() {

    const ShowAllDrinks = (drinks) => {
        const listBookElement = document.querySelector("#listBook");
        listBookElement.innerHTML = "";

        drinks.forEach(drinks => {
            listBookElement.innerHTML += `
                <card-layanan 
                image="${drinks.strDrinkThumb}" 
                judul="${drinks.strDrink}" 
                deskripsi="${drinks.strInstructions}">
                </card-layanan>
            `;
        });

    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            const responseJson = JSON.parse(this.responseText);
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                ShowAllDrinks(responseJson.drinks);
            }
        }
    
        xhr.onerror = function() {
            showResponseMessage();
        }
    
        xhr.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
        xhr.send();

        const responseJson = JSON.parse(this.responseText);
        if(responseJson.error) {
            showResponseMessage(responseJson.message);
        } else {
            ShowAllDrinks(responseJson.drinks);
        }
    });

}

export default main;