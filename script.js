// Först så gör vi en tom array och ser till att hämta den-
// -nedpackade arrayn som en string.

let myDiary = [];
const wholeDiary = localStorage.getItem("diary");

// Sen sparar vi objektet som vi får av att ha parsat strängen.

const myDiaryParsed = JSON.parse(wholeDiary);

// Om det finns något i myDiaryParsed så sparar vi den till myDiary.

if (myDiaryParsed) {
  myDiary = myDiaryParsed;
}

// Om det finns något i myDiary så kör vi .map av innehållet och ger-
// -den ett index och sedan skapar ett element av varje objekt.

if (myDiary) {
  myDiary.map((entry, index) => {
    document
      .getElementById("savedItems")
      .appendChild(
        document.createElement("div")
      ).innerHTML = `<h1>Datum : ${entry.date}</h1> <h2>Title : ${entry.title}</h2><p>${entry.content}</p><button onclick="removeEntry(${index})">radera</button><hr />`;
  });
}

// När vi får ett klick ifrån saveButton så hämtar vi värdena-
// -från input fälten och sparar dom i variablar.

const saveButton = () => {
  const date = document.getElementById("date").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  // För att sedan skapa ett objekt av dom värdena.

  const entry = {
    date: date,
    title: title,
    content: content,
  };

  // Här lägger vi till objektet till den "toma" array:n.

  myDiary.push(entry);

  // Här plockar vi ur innehållet ur arrayn för att göra det-
  // -tillgängligt utanför den här funktionen.

  saveDiary(myDiary);
};

// För att kunna plocka bort ett inlägg så använder vi oss av indexvärdet-
// -och splicear bort det som ska raderas.

const removeEntry = (index) => {
  myDiary.splice(index, 1);
  saveDiary(myDiary);
};

// För att spara till local storage så gör vi först om array:n till en string-
// -och sätter "diary" som key och sedan laddar om sidan

const saveDiary = (data) => {
  const diaryStringify = JSON.stringify(data);
  localStorage.setItem("diary", diaryStringify);
  location.reload();
};
