function validateAndSubmit() {
    var restaurantName = document.getElementById("restaurantName").value;
    var address = document.getElementById("address").value;
    var ph = document.getElementById("ph").value;
    var people = document.getElementById("people").value;
    var date = document.getElementById("date").value;

    // Check if required fields are empty
    if (restaurantName === "" || address === "" || ph === "" || people === "" || date === "") {
        alert("Please fill out these fields");
        return false; // Prevent form submission
    } else {
        document.getElementById("DONATE").form.submit();

    }


}