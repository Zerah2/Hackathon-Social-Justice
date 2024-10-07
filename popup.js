// Get modal element
var modal = document.getElementById("donateModal");

// Get open modal button
var donateBtn = document.getElementById("donateBtn");

// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Open modal when donate button is clicked
donateBtn.onclick = function () {
    modal.style.display = "block";
}

// Close modal when close button is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Close modal if clicked outside of modal content
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Show monthly message when 'Monthly' option is selected
document.getElementById("donationType").addEventListener('change', function () {
    var donationType = this.value;
    var monthlyMessage = document.getElementById("monthlyMessage");
    
    if (donationType === "monthly") {
        monthlyMessage.style.display = "block";
    } else {
        monthlyMessage.style.display = "none";
    }
});

// Show 'Other' amount input when 'Other' option is selected
var otherAmountRadio = document.querySelector("input[name='amount'][value='other']");
var otherAmountInput = document.getElementById("otherAmount");

otherAmountRadio.addEventListener('change', function () {
    if (this.checked) {
        otherAmountInput.style.display = "inline";
    }
});

// Handle submission (add necessary backend functionality)
document.getElementById("submitDonation").addEventListener('click', function () {
    alert('Thank you for your donation!');
});
