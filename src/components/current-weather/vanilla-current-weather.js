function createCurrentWeather(data) {
  // Create the main container
  const weatherDiv = document.createElement("div");
  weatherDiv.className = "weather";

  // Create the top section
  const topDiv = document.createElement("div");
  topDiv.className = "top";

  const topInnerDiv = document.createElement("div");

  const cityParagraph = document.createElement("p");
  cityParagraph.className = "city";
  cityParagraph.textContent = data.city;

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.className = "weather-description";
  descriptionParagraph.textContent = data.weather[0].description;

  topInnerDiv.appendChild(cityParagraph);
  topInnerDiv.appendChild(descriptionParagraph);

  const weatherIcon = document.createElement("img");
  weatherIcon.alt = "weather";
  weatherIcon.className = "weather-icon";
  weatherIcon.src = `icons/${data.weather[0].icon}.png`;

  topDiv.appendChild(topInnerDiv);
  topDiv.appendChild(weatherIcon);

  // Create the bottom section
  const bottomDiv = document.createElement("div");
  bottomDiv.className = "bottom";

  const temperatureParagraph = document.createElement("p");
  temperatureParagraph.className = "temperature";
  temperatureParagraph.textContent = `${Math.round(data.main.temp)}°F`;

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "details";

  const detailsHeaderRow = document.createElement("div");
  detailsHeaderRow.className = "parameter-row";

  const detailsLabel = document.createElement("span");
  detailsLabel.className = "parameter-label top";
  detailsLabel.textContent = "Details";

  detailsHeaderRow.appendChild(detailsLabel);
  detailsDiv.appendChild(detailsHeaderRow);

  // Function to create a parameter row
  function createParameterRow(label, value) {
    const parameterRow = document.createElement("div");
    parameterRow.className = "parameter-row";

    const parameterLabel = document.createElement("span");
    parameterLabel.className = "parameter-label";
    parameterLabel.textContent = label;

    const parameterValue = document.createElement("span");
    parameterValue.className = "parameter-value";
    parameterValue.textContent = value;

    parameterRow.appendChild(parameterLabel);
    parameterRow.appendChild(parameterValue);

    return parameterRow;
  }

  detailsDiv.appendChild(
    createParameterRow("Feels Like", `${Math.round(data.main.feels_like)}°F`)
  );
  detailsDiv.appendChild(
    createParameterRow("Wind", `${Math.round(data.wind.speed)} MPH`)
  );
  detailsDiv.appendChild(
    createParameterRow("Humidity", `${data.main.humidity}%`)
  );
  detailsDiv.appendChild(
    createParameterRow("Pressure", `${data.main.pressure} hPa`)
  );

  bottomDiv.appendChild(temperatureParagraph);
  bottomDiv.appendChild(detailsDiv);

  // Assemble the main container
  weatherDiv.appendChild(topDiv);
  weatherDiv.appendChild(bottomDiv);

  return weatherDiv;
}

// Example of appending to the DOM
const data = {
  city: "New York",
  weather: [{ description: "Sunny", icon: "01d" }],
  main: { temp: 75, feels_like: 78, humidity: 60, pressure: 1012 },
  wind: { speed: 10 },
};
document.body.appendChild(createCurrentWeather(data));
