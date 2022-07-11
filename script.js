window.addEventListener("load", () => {
  const container = document.querySelectorAll("h1");
  if (!container) return;

  container.forEach((element) => {
    const classNames = ["orange", "blue", "red", "pink", "yellow"];

    const rawString = element.textContent;

    element.innerHTML = "";

    for (let i = 0; i < rawString.length; i++) {
      if (rawString.substring(i, i + 3) === "NYU") {
        i += 2;
        const elem = document.createElement("a");
        elem.textContent = "NYU";
        elem.href = "https://www.nyu.edu/";
        elem.target = "_blank";
        elem.classList.add("violet");
        element.appendChild(elem);
        continue;
      }

      if (rawString.substring(i, i + 12) === "ThoughtWorks") {
        i += 11;
        const elem = document.createElement("a");
        elem.textContent = "ThoughtWorks";
        elem.href = "https://www.thoughtworks.com/";
        elem.target = "_blank";
        elem.classList.add("tw");
        element.appendChild(elem);
        continue;
      }

      if (rawString.substring(i, i + 3) === "Tik") {
        i += 2;
        const elem = document.createElement("span");
        elem.textContent = "Tik";
        elem.classList.add("tik", 'bold', 'content');
        element.appendChild(elem);
        continue;
      }

      if (rawString.substring(i, i + 3) === "Tok") {
        i += 2;
        const elem = document.createElement("span");
        elem.textContent = "Tok";
        elem.classList.add("tok", 'bold', 'content');
        element.appendChild(elem);
        continue;
      }

      const character = rawString[i];

      const spanny = document.createElement("span");
      spanny.textContent = character;

      spanny.classList.add(classNames[i % classNames.length]);

      element.appendChild(spanny);
    }
  });
});
