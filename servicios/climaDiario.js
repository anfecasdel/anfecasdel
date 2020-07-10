function obetenerDatosDiaBogota() {
  let apiKey = "a14c6a89f9baeeebb58d1b6de170586c";
  let ciudad = "Bogota";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  api.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let datosDia = JSON.parse(this.responseText);
      let iconoDia =
        "http://openweathermap.org/img/w/" + datosDia.weather[0].icon + ".png";
      let climaDia = datosDia.weather[0].main;
      let tempDia = datosDia.main.temp;
      tempDia = tempDia - 273.15;
      let nombreCiudadDia = datosDia.name;
      cambiarAtributoBogota(iconoDia, climaDia, tempDia, nombreCiudadDia);
    }
  };
}

obetenerDatosDiaBogota();

function cambiarAtributoBogota(icono, clima, temp, ciudad) {
  $("#clima_bogota_icono").attr("src", icono);
  $("#clima_bogota").text(clima);
  $("#temp_bogota").text(temp + "\260");
  $("#p_nombre_ciudad").text(ciudad);
}

function obetenerDatosDiaParis() {
  let apiKey = "a14c6a89f9baeeebb58d1b6de170586c";
  let ciudad = "Paris";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  api.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let datosDia = JSON.parse(this.responseText);
      let iconoDia =
        "http://openweathermap.org/img/w/" + datosDia.weather[0].icon + ".png";
      let tempDia = datosDia.main.temp;
      tempDia = tempDia - 273.15;
      let nombreCiudadDia = datosDia.name;
      let nombrePais = datosDia.sys.country;
      let humedad = datosDia.main.humidity;
      let viento = datosDia.wind.speed;
      cambiarAtributoParis(
        iconoDia,
        tempDia,
        nombreCiudadDia,
        nombrePais,
        humedad,
        viento
      );
    }
  };
}

obetenerDatosDiaParis();

function cambiarAtributoParis(icono, temp, ciudad, pais, humedad, viento) {
  $("#imagen_otra").attr("src", icono);
  temp = temp.toFixed();
  $("#temp_otra").text(temp + "\260");
  $("#nombre_ciudad_otra").text(ciudad);
  $("#nombre_pais_otra").text(pais);
  $("#humedad").text("Humidity: " + humedad);
  $("#velocidad_viento").text(viento + "km/h");
}
