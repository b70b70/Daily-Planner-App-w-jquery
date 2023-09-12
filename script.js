document.addEventListener('DOMContentLoaded', function () {
    // Function to display the current date and time in the header
    function displayCurrentDate() {
        const currentDate = dayjs();
        const formattedDate = currentDate.format('dddd, MMMM D, YYYY');
        $('#currentDay').text(formattedDate);
    }

// Function to update time block classes based on current time
function updateBlockClasses() {
    const currentTime = dayjs();
    const currentHour = currentTime.hour(); // Get the current hour of the day
    console.log("Current Time:", currentTime);

    $('.row[id^="timeblock-"]').each(function () {
        const timeId = $(this).attr('id');
        const blockHour = parseInt(timeId.replace('timeblock-', '')); // Extract the hour from the element's ID
        const timeBlock = $(this);

        if (blockHour < currentHour) {
            timeBlock.addClass('past').removeClass('present future');
        } else if (blockHour === currentHour) {
            timeBlock.addClass('present').removeClass('past future');
        } else {
            timeBlock.addClass('future').removeClass('past present');
        }
    });
}


    // Load saved events from local storage and populate textareas
    function loadSavedEvents() {
        $('.row[id^="timeblock-"]').each(function () {
            const timeId = $(this).attr('id');
            const savedEvent = localStorage.getItem(timeId);

            if (savedEvent) {
                const textarea = $(this).find('.description');
                textarea.val(savedEvent);
            }
        });
    }

    // Call the functions to display the current date, load saved events, and update block classes
    displayCurrentDate();
    updateBlockClasses();
    loadSavedEvents();

    // Listen for save button clicks
    $('.saveBtn').on('click', function () {
        // Log that it's saved
        console.log('It saved');

        // Get the parent timeblock element
        const timeBlock = $(this).closest('.row');
        const timeId = timeBlock.attr('id');

        // Get the value from the description textarea
        const value = timeBlock.find('.description').val();

        // Save the event to local storage
        localStorage.setItem(timeId, value);

        // Display a notification
        $(".notification").addClass('show');
        setTimeout(function () {
            $(".notification").removeClass('show');
        }, 5000);
    });
});


