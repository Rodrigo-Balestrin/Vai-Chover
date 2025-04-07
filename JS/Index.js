function getWeather() {
  const apiKey = '45f8d6a48ac2279c8954243037bb47b8';
  const city = document.getElementById('city').value.trim();

  if (!city) return alert('Digite o nome de uma cidade.');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        return alert('Cidade não encontrada.');
      }

      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      document.getElementById('weather-icon').src = iconUrl;
      document.getElementById('weather-icon').style.display = 'block';

      document.getElementById('temp-div').innerHTML = `<p>${Math.round(data.main.temp)}°C</p>`;
      document.getElementById('weather-info').innerHTML = `
        <p>${data.name}</p>
        <p>${data.weather[0].description}</p>
      `;
    })
    .catch(() => alert('Erro ao buscar dados do clima.'));
}
