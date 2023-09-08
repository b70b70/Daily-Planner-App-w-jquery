// Wait for the DOM to be ready
$(document).ready(function () {
    // Function to display the current date in the header
    function displayCurrentDate() {
        // Get the current date
        const currentDate = dayjs();

        // Create a formatted date string
        const formattedDate = currentDate.format('dddd, MMMM D, YYYY');

        // Set the text content of the "currentDay" element in the header
        $('#currentDay').text(formattedDate);
    }

    // Call the function to display the current date
    displayCurrentDate();
});