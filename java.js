document.addEventListener("DOMContentLoaded", () => {
  const heartButtons = document.querySelectorAll(".heart-btn");
  const callButtons = document.querySelectorAll(".call-btn");
  const copyButtons = document.querySelectorAll(".copy-btn");
  const historyList = document.getElementById("historyList");
  const clearBtn = document.getElementById("clearHistory");

  // Navbar counters
  const likeDisplay = document.getElementById("likeCount");
  const coinDisplay = document.getElementById("coinCount");
  const copyDisplay = document.getElementById("copyCount");

  let coinCount = 100; // starting coins
  let likeCount = 0;
  let copyCount = 0;

  // ❤️ Heart button functionality
  heartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      likeCount++;
      likeDisplay.textContent = likeCount;
    });
  });

  // 📞 Call button functionality with coin system
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
        li.textContent = `${service} (${number}) — ${time}`;
        historyList.appendChild(li);
      } else {
        alert("You do not have enough coin. You need 20 coins minimum to do a call.");
      }
    });
  });

  // 📋 Copy button functionality
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const number = btn.dataset.number;

      navigator.clipboard.writeText(number).then(() => {
        copyCount++;
        copyDisplay.textContent = copyCount;
      });
      alert(`✅ Copied ${number} to clipboard`);
    });
  });

  // 🧹 Clear history
  clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
  });
});
