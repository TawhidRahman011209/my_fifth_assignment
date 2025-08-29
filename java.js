document.addEventListener("DOMContentLoaded", () => {
  const heartButtons = document.querySelectorAll(".heart-btn");
  const callButtons = document.querySelectorAll(".call-btn");
  const copyButtons = document.querySelectorAll(".copy-btn");
  const historyList = document.getElementById("historyList");
  const clearBtn = document.getElementById("clearHistory");
  const likeDisplay = document.getElementById("likeCount");
  const coinDisplay = document.getElementById("coinCount");
  const copyDisplay = document.getElementById("copyCount");

  let coinCount = 100;
  let likeCount = 0;
  let copyCount = 0;

  heartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      likeCount++;
      likeDisplay.textContent = likeCount;
    });
  });

  callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const service = btn.dataset.service;
    const number = btn.dataset.number;

    if (coinCount >= 20) {
      coinCount -= 20;
      coinDisplay.textContent = coinCount;

      alert(`📞 You are calling ${service} at ${number}.`);

      const time = new Date().toLocaleTimeString();
      const li = document.createElement("li");

      // Left container (service + number stacked)
      const leftDiv = document.createElement("div");
      const serviceEl = document.createElement("div");
      serviceEl.textContent = service;
      const numberEl = document.createElement("div");
      numberEl.textContent = number;
      leftDiv.appendChild(serviceEl);
      leftDiv.appendChild(numberEl);

      // Right container (time)
      const rightDiv = document.createElement("div");
      rightDiv.textContent = time;

      // Add to li
      li.appendChild(leftDiv);
      li.appendChild(rightDiv);
      historyList.appendChild(li);
    } else {
        alert("You do not have enough coin. You need 20 coins minimum to do a call.");
      }
    });
  });

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const number = btn.dataset.number;

      navigator.clipboard.writeText(number).then(() => {
        copyCount++;
        copyDisplay.textContent = copyCount;
      });
      alert(`Copied ${number} to clipboard`);
    });
  });

  clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
  });
});