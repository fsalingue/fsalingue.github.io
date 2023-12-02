function search() {
    // Fetch user inputs
    const location = document.getElementById('location').value.toLowerCase();
    const move1 = document.getElementById('move1').value.toLowerCase();
    const move2 = document.getElementById('move2').value.toLowerCase();

    // Filter the Pokemon data based on user inputs
    const results = pokemonData.filter(pokemon => {
        // Implement your criteria checks here
        const matchesLocation = pokemon.locations.some(loc => loc.location.toLowerCase() === location);
        const knowsMove1 = pokemon.moves.some(move => move.name.toLowerCase() === move1);
        const knowsMove2 = pokemon.moves.some(move => move.name.toLowerCase() === move2);

        // Example: Only include Pokemon that match all criteria
        return matchesLocation && knowsMove1 && knowsMove2;
    });

    // Display results in the table
    displayResults(results);
}

function displayResults(results) {
    const tableBody = document.getElementById('resultsBody');

    // Clear previous results
    tableBody.innerHTML = '';

    // Populate the table with results
    results.forEach(pokemon => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = pokemon.id;
        row.insertCell(1).textContent = pokemon.name;
        // Add more cells based on your needs
    });
}

// Example Pokemon data (replace with actual data)
const pokemonData = [
    // ... (your Pokemon data here)
];
