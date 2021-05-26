import { useState } from 'react'
import '../styles.css'
import { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA")
  const [animal, setAnimal] = useState("dog")
  const [breed, setBreed] = useState("")
  const [breeds, setBreeds] = useState([])

  return (
    <div className="search-params">
      <h1>{ location }</h1>
      <form>
        <label htmlFor="location" />
          Location
        <input type="text" placeholder="Location" value={location} onChange={e => {setLocation(e.target.value)}} />
        <label htmlFor="animal">Animal
        <select 
        id="animal" 
        value={animal} 
        onChange={e => setAnimal(e.target.value)}
        onBlur={e => setAnimal(e.target.value)}>
        <option>All</option>
        {ANIMALS.map(animal => <option value={animal} key={animal} >{animal}</option>)}
        </select>
        </label>
<label htmlFor="breed">
    Breed
    <select id="breed" value={breed}
    onChange={e => setBreed(e.target.value)}
    onBlur={e => setBreed(e.target.value)}
    disabled = {!breeds.length}
    >
      <option>All</option>
      {breeds.map(breedString => <option key={breedString} value={breedString}>{ breedString }</option>)}
    </select>
</label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams