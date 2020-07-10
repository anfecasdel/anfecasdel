function obetenerDatosDiasSiguientes() {
  let apiKey = "a14c6a89f9baeeebb58d1b6de170586c";
  let ciudad = "Bogota";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  api.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let pronosticos = JSON.parse(this.responseText);
      let iconoDiaUno =
        "http://openweathermap.org/img/w/" +
        pronosticos.list[0].weather[0].icon +
        ".png";
      let diasSemana = new Array(
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      );
      let proximoUno = pronosticos.list[0].dt_txt;
      proximoUno = new Date(proximoUno);
      let proximoUnoDia = diasSemana[proximoUno.getDay()];
      let climaUno = pronosticos.list[0].weather[0].main;
      let maxTempUno = pronosticos.list[4].main.temp_max;
      maxTempUno = maxTempUno - 273.15;
      let minTempUno = pronosticos.list[0].main.temp_min;
      minTempUno = minTempUno - 273.15;

      diaUno(iconoDiaUno, proximoUnoDia, climaUno, maxTempUno, minTempUno);

      let iconoDiaDos =
        "http://openweathermap.org/img/w/" +
        pronosticos.list[8].weather[0].icon +
        ".png";
      let proximoDos = pronosticos.list[8].dt_txt;
      proximoDos = new Date(proximoDos);
      let proximoDosDia = diasSemana[proximoDos.getDay()];
      let climaDos = pronosticos.list[8].weather[0].main;
      let maxTempDos = pronosticos.list[12].main.temp_max;
      maxTempDos = maxTempDos - 273.15;
      let minTempDos = pronosticos.list[8].main.temp_min;
      minTempDos = minTempDos - 273.15;

      diaDos(iconoDiaDos, proximoDosDia, climaDos, maxTempDos, minTempDos);

      let iconoDiaTres =
        "http://openweathermap.org/img/w/" +
        pronosticos.list[15].weather[0].icon +
        ".png";
      let proximoTres = pronosticos.list[15].dt_txt;
      proximoTres = new Date(proximoTres);
      let proximoTresDia = diasSemana[proximoTres.getDay()];
      let climaTres = pronosticos.list[15].weather[0].main;
      let maxTempTres = pronosticos.list[19].main.temp_max;
      maxTempTres = maxTempTres - 273.15;
      let minTempTres = pronosticos.list[15].main.temp_min;
      minTempTres = minTempTres - 273.15;

      diaTres(
        iconoDiaTres,
        proximoTresDia,
        climaTres,
        maxTempTres,
        minTempTres
      );
    }
  };
}

obetenerDatosDiasSiguientes();

function diaUno(icono, dia, clima, maxTemp, minTemp) {
  $("#imagen_dia1").attr("src", icono);
  $("#diaSemanaUno").text(dia);
  $("#diaClimaUno").text(clima);
  maxTemp = maxTemp.toFixed();
  minTemp = minTemp.toFixed();
  $("#tempUno").text(maxTemp + "\260 / " + minTemp + "\260");
}

function diaDos(icono, dia, clima, maxTemp, minTemp) {
  $("#imagen_dia2").attr("src", icono);
  $("#diaSemanaDos").text(dia);
  $("#diaClimaDos").text(clima);
  maxTemp = maxTemp.toFixed();
  minTemp = minTemp.toFixed();
  $("#tempDos").text(maxTemp + "\260 / " + minTemp + "\260");
}

function diaTres(icono, dia, clima, maxTemp, minTemp) {
  $("#imagen_dia3").attr("src", icono);
  $("#diaSemanaTres").text(dia);
  $("#diaClimaTres").text(clima);
  maxTemp = maxTemp.toFixed();
  minTemp = minTemp.toFixed();
  $("#tempTres").text(maxTemp + "\260 / " + minTemp + "\260");
}
