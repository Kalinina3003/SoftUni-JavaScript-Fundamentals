// Task: Extract File.
// Description: Receive a file path as a string.
// Extract the file name and its extension.
// Handle file names containing multiple dots.
// Print the file name and the extension separately.

function extractFile(path) {
    let pathParts = path.split('\\');
    let file = pathParts.pop();

    let lastDotInx = file.lastIndexOf('.');
    let fileName = file.substring(0, lastDotInx);
    let fileExt = file.substring(lastDotInx + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');