
const Rimas = ({ suffixRimas }) => {

  // taking only unique words of object
  let rimas = [];
  for (let i in suffixRimas) {
    let rima = suffixRimas[i].word;
    rimas.push(rima);
  }

  let filterRimas = [...new Set(rimas)];

  // counting vowels 
  const filterToSyllables = (word) => {
    let countVowels = 0;
    const wordArr = word.split("");
    const vowels = ["a", "e", "i", "o", "u",
      "á", "é", "í", "ó", "ú",
      "â", "ê", "î", "ô", "û",
      "à", "è", "ì", "ò", "ù",
      "ã", "õ"]

    for (let letter of wordArr) {
      for (let vowel of vowels) {
        if (letter === vowel) {
          countVowels++;
        }
      }
    }
    return countVowels;
  }
  
  //preparing to show
  let toShow = false;
  toShow = (filterRimas.length !== 0) ? true : false;

  return (
    <div>

      <h2>Rimas</h2>

      {toShow && <p>Encontramos {filterRimas.length} possíveis rimas!</p>}
      {!toShow && <p>Tente com outra palavra!</p>}

      <div>

        <ol className='rimas'>
          {filterRimas.map(word => (
            <li className='rima' key={word}>{word} - {filterToSyllables(word)} sílabas</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
export default Rimas