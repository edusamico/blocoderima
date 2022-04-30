
const Rimas = ({ suffixRimas }) => {
  let rimas = [];
  for (let i in suffixRimas) {
    let rima = suffixRimas[i].word;
    rimas.push(rima);
  }

  let filterRimas = [...new Set(rimas)]

  let count = false;
  count = (filterRimas.length !== 0) ? true : false;
  
  return (
    <div>
      <h2>Rimas</h2>
      {count && <p>Encontramos {filterRimas.length} possíveis rimas!</p>}
    
      
      <div>
        <ol className='rimas'>
          {filterRimas.map(filterRimas => (
            <li className='rima' key={filterRimas}>{filterRimas}</li>
          ))}
        </ol>
      </div>
    </div>

  )
}
export default Rimas