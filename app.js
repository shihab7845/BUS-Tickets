const allSeats = document.getElementsByClassName("add-seat");
let count = 0;

let seatLeft = 40;
console.log(seatLeft);
let totalPrice = 0;

for (const seat of allSeats) {
    seat.addEventListener("click", function (event) {
        if (count <= 3) {
            const clickedSeat = event.target;
            const seatInnerText = clickedSeat.innerText;

            
            
            console.log(seatInnerText);
            // added background color of seats 
            clickedSeat.classList.add('bg-green-500');
 
            // update seat number
            count++;
            console.log(count);
            seatLeft--;
            console.log(seatLeft);
            updateSeatCount("seat-left", seatLeft);
            updateSeatCount("seat-count", count);

             

            // display seats details into screen
            const selectedContainer = document.getElementById('seats-details');

            const div = document.createElement('div')
            div.classList.add('flex');
            div.classList.add('justify-around');

            const p1 = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');

            p1.innerText = seatInnerText;
            p2.innerText = "Economics";
            p3.innerText = "550";

            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);

            selectedContainer.appendChild(div)

           

            // update total price 
            totalPrice += 550;
            updateSeatCount('total-price', totalPrice);
            const grandTotal = document.getElementById('grand-total');
            grandTotal.innerText = totalPrice;

            

            if (count === 4) {
                const btnApply = document.getElementById('Coupon-apply');
                btnApply.removeAttribute('disabled');

                btnApply.addEventListener("click", function () {
                    const CouponInputField = document.getElementById("Coupon-code");
                    const inputValue = CouponInputField.value;
                    console.log(inputValue);
                    if (inputValue === "COUPLE20") {
                        let grandPrice = parseInt(grandTotal.innerText) - 440;
                        updateSeatCount("grand-total", grandPrice);
                        grandTotal.innerText = grandPrice; // Update displayed grand total
                        setAttributeValue("Coupon-apply");
                        console.log(grandPrice);


                        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const numberInput = document.getElementById('numberInput');
const submitButton = document.getElementById('submitButton');

numberInput.addEventListener('input', function(event) {
    const inputValue = event.target.value.trim(); 

    // Check if the input value contains exactly 11 characters (digits)
    const isValidInput = inputValue.length === 11;

    // Enable or disable the submit button based on the validity of the input
    if (isValidInput) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
    
});

submitButton.addEventListener('click', function() {
    // Perform actions when the submit button is clicked
    // alert("Submit button clicked!");
    setHidden("all-content")
    removeHidden("after-submit")

})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


                    } else if (inputValue === "NEW15") {
                        let grandPrice1 = parseInt(grandTotal.innerText) - 330;
                        updateSeatCount("grand-total", grandPrice1);
                        grandTotal.innerText = grandPrice1; // Update displayed grand total
                        console.log(grandPrice1);

                        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const numberInput = document.getElementById('numberInput');
const submitButton = document.getElementById('submitButton');

numberInput.addEventListener('input', function(event) {
    const inputValue = event.target.value.trim(); 

    // Check if the input value contains exactly 11 characters (digits)
    const isValidInput = inputValue.length === 11;

    // Enable or disable the submit button based on the validity of the input
    if (isValidInput) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
    
});

submitButton.addEventListener('click', function() {
    // Perform actions when the submit button is clicked
    alert("Submit button clicked!");
    setHidden("all-content")
    removeHidden("after-submit")
})
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


                        
                    } else {
                        alert("Invalid coupon code. Please enter a valid code.");
                    }


                });
            } else {
                const btnDisable = document.getElementsByClassName('add-seat');
                for (let i = 0; i < btnDisable.length; i++) {
                    btnDisable[i].setAttribute('disabled', true);
                }
            }
        }
    });
}

// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const numberInput = document.getElementById('numberInput');
// const submitButton = document.getElementById('submitButton');

// numberInput.addEventListener('input', function(event) {
//     const inputValue = event.target.value.trim(); 

//     // Check if the input value contains exactly 11 characters (digits)
//     const isValidInput = inputValue.length === 11;

//     // Enable or disable the submit button based on the validity of the input
//     if (isValidInput) {
//         submitButton.removeAttribute('disabled');
//     } else {
//         submitButton.setAttribute('disabled', 'disabled');
//     }
    
// });

// submitButton.addEventListener('click', function() {
//     // Perform actions when the submit button is clicked
//     alert("Submit button clicked!");
// })
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// BUG HERE 
 // +++++++++++++++++++++++++++++++++++++++++++++++++++
//  setAttributeValue("seatInnerText");
 // +++++++++++++++++++++++++++++++++++++++++++++++++++