let savedPosts = [];

let myWholeDiary = localStorage.getItem("post");

let myDiaryParsed = JSON.parse(myWholeDiary);

if (myDiaryParsed) {
  savedPosts = myDiaryParsed;
}

if (savedPosts) {
  savedPosts.map((savedObject, index) => {
    document
      .getElementById("showPosts")
      .appendChild(
        document.createElement("div")
      ).innerHTML = `<h2>Datum: ${savedObject.date}</h2><h2>Rubrik: ${savedObject.title}</h2><h2>Inlägg:</h2><p> ${savedObject.content}</p><button onclick="removeEntry(${index})">radera</button><br><hr />`;
  });
}

let postSave = () => {
  console.log("save");
  let date = document.getElementById("date").value;
  let title = document.getElementById("heading").value;
  let content = document.getElementById("text").value;

  let savedObject = {
    date: date,
    title: title,
    content: content,
  };
  savedPosts.push(savedObject);

  saveDiary(savedPosts);
};

let postButton = document.getElementById("postButton");
postButton.addEventListener("click", postSave);

let removeEntry = (index) => {
  savedPosts.splice(index, 1);
  saveDiary(savedPosts);
};

let saveDiary = (data) => {
  let diaryStringifyd = JSON.stringify(data);
  localStorage.setItem("post", diaryStringifyd);
  location.reload();
};
