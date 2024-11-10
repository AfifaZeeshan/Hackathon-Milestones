//  et reference to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement
const shareableLinkContainer = document.getElementById('shareable-link-container') as HTMLDivElement
const shareableLinkElement = document.getElementById('shareable-link') as HTMLAnchorElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();  // prevent page reload

    // Collect Input Values
    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const contact = (document.getElementById('contact') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value

    //Save form data in localStorage with the username as the key
    const resumeData = {
        name,
        email,
        contact,
        education,
        experience,
        skills

    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Savinng the data locally

    // Generate the resume content dynamically

    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
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

    resumeDisplayElement.innerHTML = resumeHTML;

    //Generate a shareable URL with the username Only

    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

// Handle PDF Download

downloadPdfButton.addEventListener('click', () => {
    window.print(); // This will oepn the print dialogueand allow the user to save as PDF
});

// Prefill the form based on the username in the URL

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if(username){
        //Autofill form if data is found in localStorage

        const savedResumeData = localStorage.getItem(username);

        if(savedResumeData){
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('contact') as HTMLInputElement).value = resumeData.contact;
            (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
            (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
            (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;


        }
    }
});

