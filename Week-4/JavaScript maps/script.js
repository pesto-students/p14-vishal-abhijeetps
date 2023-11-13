function calcWordFrequencies() {
  let sentence = prompt('Enter list of words:').trim();
  let words = sentence.split(/\s+/);
  console.log(words);
  let ans = {};
  for (var i = 0; i < words.length; i++) {
    if (!ans[words[i]]) {
      ans[words[i]] = 0;
    }
    ans[words[i]]++;
  }

  for (key in ans) {
    console.log(`${key} ${ans[key]}`);
  }
}
