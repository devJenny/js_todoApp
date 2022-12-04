const christmasDday = document.querySelector("#christmas-dday");

function getClock() {

  const today = new Date();
  const thisYear = today.getFullYear();
  const xMas = new Date(thisYear, 11, 25, 00, 00, 00); // month is 'month index' :: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
  const dDay = xMas - today;
  // console.log(dDay); // ex) 2103827024 (유닉스 타임)

  // 1초 = 1000밀리초 , 1분 = 60초 , 1시간 = 60분 , 1일 = 24시간
  const day = String(Math.floor(dDay / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor((dDay / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((dDay / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((dDay / 1000) % 60)).padStart(2, "0");

  christmasDday.innerHTML = `This year<br>💛X-mas💜<br>${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
