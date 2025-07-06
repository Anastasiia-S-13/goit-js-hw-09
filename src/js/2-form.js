const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textArea = document.querySelector("textarea")

if (form) {
form.addEventListener("input", userInformation);

function userInformation(event) {
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    formData.email = `${email}`;
    formData.message = `${message}`;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

 const savedInfo = localStorage.getItem("feedback-form-state");

    if (savedInfo) {
        const parsedInfo = JSON.parse(savedInfo);
        
        form.elements.email.value = parsedInfo.email || "";
        form.elements.message.value = parsedInfo.message || "";
    };

    form.addEventListener("submit", clickButton);
    function clickButton(event) {
        event.preventDefault();
        const email = event.currentTarget.elements.email.value.trim();
        const message = event.currentTarget.elements.message.value.trim();

        if (email === "" || message === "") {
            return alert("Fill please all fields");
        } else {
            console.log(formData);
            form.reset();
            localStorage.removeItem("feedback-form-state");
        }
    }

    input.addEventListener("focus", inputInFocus);
    input.addEventListener("blur", inputOutFocus);

    function inputInFocus(event) {
        input.setAttribute("placeholder", "Type area")
    }

    function inputOutFocus(event) {
        input.removeAttribute("placeholder");
    };
};