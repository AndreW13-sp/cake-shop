// eslint-disable no-undef
const fs = require("fs");
const path = require("path");

// Function to add 'tw-' prefix to class names
function addTwPrefix(content) {
	// Define a regex that matches class names and add 'tw-' prefix
	return content.replace(/\b(class(Name)?=")([^"]*)"/g, (match, prefix, className, classes) => {
		// Avoid adding 'tw-' prefix to already prefixed classes
		const prefixedClasses = classes
			.split(/\s+/)
			.filter(Boolean)
			.map((cls) => (cls.startsWith("tw-") ? cls : `tw-${cls}`))
			.join(" ");
		return `${prefix}${prefixedClasses}"`;
	});
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

if (!filePath) {
	console.error("Please provide a file path.");
	process.exit(1);
}

// Read the file content
fs.readFile(filePath, "utf8", (err, content) => {
	if (err) {
		console.error(`Failed to read the file at ${filePath}:`, err);
		return;
	}

	// Prefix the class names with 'tw-'
	const updatedContent = addTwPrefix(content);

	// Write the updated content back to the file
	fs.writeFile(filePath, updatedContent, "utf8", (err) => {
		if (err) {
			console.error(`Failed to write the updated content back to ${filePath}:`, err);
			return;
		}

		console.log(`Updated file successfully: ${filePath}`);
	});
});
