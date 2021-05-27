import { useState } from 'react'
import '../styles.css'
import { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA")
  const [breeds, setBreeds] = useState([])
  const [animal, animalDrpdown] = useDropdown("animal", "dog", ANIMALS)
  const [breed,BreedDropdown] = useDropdown("Breed", "", breeds)

  return (
    <div className="search-params">
      <h1>{ location }</h1>
      <form>
        <label htmlFor="location">
          Location
        <input type="text" placeholder="Location" value={location} onChange={e => {setLocation(e.target.value)}} />
        </label>
        
        <animalDrpdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams