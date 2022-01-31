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
				const nyu = document.createElement("a");
				nyu.textContent = "NYU";
				nyu.href = 'https://www.nyu.edu/';
				nyu.target = '_blank';
				nyu.classList.add('violet');
				element.appendChild(nyu);
				continue
			}

			if (rawString.substring(i, i + 12) === "ThoughtWorks") {
				i += 11;
				const nyu = document.createElement("a");
				nyu.textContent = "ThoughtWorks";
				nyu.href = 'https://www.thoughtworks.com/';
				nyu.target = '_blank';
				nyu.classList.add('tw');
				element.appendChild(nyu);
				continue
			}

      const character = rawString[i];

      const spanny = document.createElement("span");
      spanny.textContent = character;

      spanny.classList.add(classNames[i % classNames.length]);

      element.appendChild(spanny);
    }
  });
});
