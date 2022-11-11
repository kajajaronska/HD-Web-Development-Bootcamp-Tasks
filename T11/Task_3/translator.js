let polishDict = new Map();

polishDict.set("dog", "pies");
polishDict.set("cat", "kot");
polishDict.set("food", "jedzenie");
polishDict.set("pretty", "piekny");
polishDict.set("hungry", "glodny");
polishDict.set("good", "dobrze");
polishDict.set("potato", "ziemniak");
polishDict.set("meat", "mieso");
polishDict.set("coffee", "kawa");
polishDict.set("tea", "herbata");

while (true) {
  // Asking user to choose word they would like to translate
  let userWord = prompt(
    "Which English word would you like to translate into Polish? 🤪"
  );

  // Statement entered when user's word exists in the dictionary
  if (polishDict.has(userWord)) {
    alert(
      `Your word ➡️${userWord}⬅️ translates to ➡️${polishDict.get(
        userWord
      )}⬅️ in Polish.`
    );

    // Statement entered when user's word doesn't exists in the dictionary
  } else {
    alert(`Sorry! We don't have word ${userWord} in our dictionary yet! 😢
Try something else.`);
  }
}
