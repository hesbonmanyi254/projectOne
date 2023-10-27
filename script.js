document.addEventListener("DOMContentLoaded", function () {
    const jokeElement = document.getElementById("joke");
    const getJokeButton = document.getElementById("getJokeButton");

    getJokeButton.addEventListener("click", () => {
        fetchRandomJoke().then((joke) => {
            jokeElement.textContent = joke;
        });
    });

    async function fetchRandomJoke() {
        try {
            const response = await fetch("https://v2.jokeapi.dev/joke/Any");
            const data = await response.json();
            return data.joke;
        } catch (error) {
            return "Failed to fetch a joke. Please try again.";
        }
    }
});
