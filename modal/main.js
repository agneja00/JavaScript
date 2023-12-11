// Acceptance Criteria:
// 1. Show audit log information on the left hand side. It should be empty by default
// 2. Show 'Help' button on the right bottom corner
//     a. On button click it should open form dialog
//     b. Form dialog should be animated on open
// 3. Create form dialog with 4 inputs:
//     a. First name (required)
//     b. Last name (required)
//     c. Email (required and should be valid email)
//     d. Complaint (required)
// 4. Form should be validated before submitting it
//     a. If form is not valid, then display generic error text and highlight fields that are invalid
// 5. If form is valid then submit it
//     a. clear all, if any, errors, clear input values and close dialog
//     b. fill in audit info fields with user input

const helpBtn = document.querySelector(".help-btn");
const helpDialog = document.querySelector(".help-dialog");
const dialogCloseBtn = document.querySelector(".help-dialog-close-btn");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const complaint = document.querySelector("#complaint");
const submitBtn = document.querySelector("#submit");
const validationError = document.querySelector(".validation-error");

const firstNameLog = document.querySelector("#first-name-log");
const lastNameLog = document.querySelector("#last-name-log");
const emailLog = document.querySelector("#email-log");
const complaintLog = document.querySelector("#complaint-log");
const dateLog = document.querySelector("#date-log");

helpBtn.addEventListener("click", openDialog);
dialogCloseBtn.addEventListener("click", closeDialog);
submitBtn.addEventListener("click", submitComplaint)


function openDialog() {
    helpDialog.style.display = "block";    
}

function closeDialog() {
    helpDialog.style.display = "none";
}

function submitComplaint() {
    if (isComplaintValid()) {
        displayComplaint();
        clearDialogValues();
        closeDialog();
    } else {
        displayErrors();
    }
}

function displayComplaint() {
    firstNameLog.textContent = firstName.value;
    lastNameLog.textContent = lastName.value;
    emailLog.textContent = email.value;
    complaintLog.textContent = complaint.value;
    dateLog.textContent = new Date().toLocaleString();
}

function clearDialogValues() {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    complaint.value = '';
}

function displayErrors() {
    validationError.style.display = "block";
    if (!firstName.value) {
        applyErrorToField(firstName)
    }
    if (!lastName.value) {
        applyErrorToField(lastName)
    }
    if (!email.value || email.validity.typeMismatch) {
        applyErrorToField(email)
    }
    if (!complaint.value) {
        applyErrorToField(complaint)
    }
}

function isComplaintValid() {
    if (!firstName.value || !lastName.value || email.validity.typeMismatch || !complaint.value) {
        return false;
    }

    clearErrors();
    return true;
}

function applyErrorToField(field) {
    field.style.border = "1px solid red";
}

function clearErrors() {
    validationError.style.display = "none";
    clearErrorFromField(firstName);
    clearErrorFromField(lastName);
    clearErrorFromField(email);
    clearErrorFromField(complaint);
}

function clearErrorFromField(field) {
    field.style.border = "1px solid gray";
}