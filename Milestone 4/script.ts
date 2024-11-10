const form = document.getElementById('resume-form') as HTMLFormElement

const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect Input Values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable="true"> ${email}</span></p>
    <p><b>Contact:</b><span contenteditable="true"> ${contact}</span></p>

    <h3>Education:</h3>
    <p contenteditable="true">${education}</p>
    
    <h3>Experience:</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills:</h3>
    <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML
            } else {
        console.error('Please fill the required field.')
    }

})
