<?php
$file = "rsvps.csv";

if (!file_exists($file)) {
    die("No RSVPs recorded yet.");
}

echo "<h2>RSVP List</h2>";
echo "<table border='1' cellpadding='10'>";
echo "<tr><th>Name</th><th>Email</th><th>Attendance</th><th>Message</th></tr>";

$handle = fopen($file, "r");
while (($row = fgetcsv($handle)) !== false) {
    echo "<tr><td>" . htmlspecialchars($row[0]) . "</td><td>" . htmlspecialchars($row[1]) . "</td><td>" . htmlspecialchars($row[2]) . "</td><td>" . htmlspecialchars($row[3]) . "</td></tr>";
}
fclose($handle);

echo "</table>";
?>
