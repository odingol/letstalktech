module.exports = {
    format_date: (date) => {
        // Formats date as the MM/DD/YYYY
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate() + 1}/${new Date(date).getFullYear()}`;
    }
};