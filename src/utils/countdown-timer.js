import { useEffect, useState } from "react";

const useCountdown = () => {
  const countDownDate = new Date("february 07, 2023 08:00:20").getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  var days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  if (days.toString().length === 1) {
    days = "0" + days;
  } else if (hours.toString().length === 1) {
    hours = "0" + hours;
  } else if (minutes.toString().length === 1) {
    minutes = "0" + minutes;
  } else if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  } else {
    days = days;
    hours = hours;
    minutes = minutes;
    seconds = seconds;
  }

  return [days, hours, minutes, seconds];
};

export { useCountdown };

export const countdownTimer = () => {
  // Tetapkan tanggal kita menghitung mundur
  var countDownDate = new Date("february 07, 2023 08:00:20").getTime();

  // Perbarui hitungan mundur setiap 1 detik
  var x = setInterval(function () {
    // Dapatkan tanggal dan waktu hari ini
    var now = new Date().getTime();

    // Temukan jarak antara sekarang dan tanggal hitung mundur
    var distance = countDownDate - now;

    // Perhitungan waktu untuk hari, jam, menit dan detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Jika hitungan mundur selesai, tulis beberapa teks
    if (distance < 0) {
      clearInterval(x);
    }

    return [days, hours, minutes, seconds];
  }, 1000);
};
