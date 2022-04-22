module.exports = {
    format_date: () => {
        // Formats date as the MM/DD/YYYY
        const date = new Date();
        return date.toLocaleDateString();
    }};