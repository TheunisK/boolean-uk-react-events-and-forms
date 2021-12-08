import { useState } from "react"

function BookingSection() {
  const [formState, setFormState] = useState({
    date: "",
    pool: false,
    facial: false,
    massage: false,
    newspaper: false,
    breakfast: false
  });

  const handleForm = event => {
    const inputName = event.target.name;
    const inputType = event.target.type;
    let inputValue = event.target.checked;
    if (inputType === "datetime-local") {
      inputValue = event.target.value
    }
    setFormState({...formState, [inputName]: inputValue})
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formState)
    setFormState({
      date: "",
      pool: false,
      facial: false,
      massage: false,
      newspaper: false,
      breakfast: false
    })
  }

  return (
    <section className="shadow pad-lg">
      <h2>Booking Form</h2>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label htmlFor="date">When will you be arriving?</label>
        <input 
          onChange={handleForm}
          type="datetime-local"
          name="date"
        />
        <section>
          <h3>Spa Activities</h3>
          <input 
            type="checkbox" 
            id="pool" 
            name="pool" 
            onChange={handleForm}
          />
          <label htmlFor="pool">Soak and Swim</label>
          <input 
            type="checkbox" 
            id="facial" 
            name="facial"
            onChange={handleForm}
          />
          <label htmlFor="facial">Facial</label>
          <input 
            type="checkbox" 
            id="massage" 
            name="massage" 
            onChange={handleForm}
          />
          <label htmlFor="massage">Massage</label>
        </section>
        <section>
          <h3>Room Services</h3>
          <input 
            type="checkbox" 
            id="newspaper" 
            name="newspaper" 
            onChange={handleForm}
          />
          <label htmlFor="newspaper">Daily Newspaper</label>
          <input 
            type="checkbox" 
            id="breakfast" 
            name="breakfast"
            onChange={handleForm}
          />
          <label htmlFor="breakfast">Breakfast</label>
        </section>
        <button type="submit">Book</button>
      </form>
    </section>
  )
}

export default BookingSection
