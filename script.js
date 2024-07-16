function getGreeting() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (hours >= 5 && hours < 12) {
      return "Good Morning PMSA !!!";
  } else if (hours === 12 && minutes === 0) {
      return "Good Morning PMSA !!!";
  } else if (hours >= 12 && hours < 15 || (hours === 15 && minutes <= 30)) {
      return "Good Afternoon PMSA !!!";
  } else if (hours >= 15 && hours < 19 || (hours === 19 && minutes === 0)) {
      return "Good Evening PMSA !!!";
  } else {
      return "Good Night PMSA !!!";
  }
}

document.getElementById("greeting").textContent = getGreeting();

// Copy
