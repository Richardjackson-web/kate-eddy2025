<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $attendance = htmlspecialchars($_POST["attendance"]);
    $message = htmlspecialchars($_POST["message"]);

    // Basic Validation
    if (empty($attendance) || empty($message)) {
        echo "<p style='color: red;'>Please fill in all required fields.</p>";
        exit;
    }

    // Store data (Optional: Save to a file or database)
    $file = fopen("rsvps.csv", "a"); // Open file to append
    fputcsv($file, [$attendance, $message]); // Save data
    fclose($file);

    // Confirmation Message
    echo "<p style='color: green;'>Thank you, $name! Your RSVP has been recorded.</p>";
} else {
    echo "<p style='color: red;'>Invalid request.</p>";
}
?>
