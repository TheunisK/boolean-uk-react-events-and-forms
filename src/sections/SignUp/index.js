import { useState } from "react"

function SignUpSection() {
  const [formState, setFormState] = useState({
    firstName: "",
    email: "",
    password: "",
    terms: false
  });

  const handleForm = event => {
    const inputName = event.target.name;
    const inputType = event.target.type;
    let inputValue = event.target.value;
    if (inputType === "checkbox") {
      inputValue = event.target.checked;
    }
    setFormState({...formState, [inputName]: inputValue})
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (formState.terms) {
      console.log("Submitted", formState)
    } else {
      alert("Please agree your life away.")
    }
    setFormState({
      firstName: "",
      email: "",
      password: "",
      terms: false
    })
    
  }

  // console.log(formState);

  return (
    <section className="shadow pad-lg">
      <h2>Sign Up</h2>
      {<form class="form-stack" onSubmit={handleSubmit}>
        <label for="firstName">First Name</label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={formState.firstName} 
          onChange={e => handleForm(e)}
        />
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formState.email} 
          onChange={e => handleForm(e)}
        />
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={formState.password}
          onChange={e => handleForm(e)}
        />
        <div>
          <input 
            type="checkbox" 
            id="terms" 
            name="terms"
            value={formState.terms}
            onChange={e => handleForm(e)}
          />
          <label for="terms">I accept Terms and Conditons</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>}
    </section>
  )
}

export default SignUpSection
