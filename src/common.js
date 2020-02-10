const Common = {
    formatDateTime(date, format) {
        var d = new Date(date),
            month = "" + (d.getMonth() + 1),
            day = "" + d.getDate(),
            year = d.getFullYear();
        var hour = d.getHours();
        var min = d.getMinutes();
        var sec = d.getSeconds();

        if (month.length < 2) month = "0" + month;
        if (day.length < 2) day = "0" + day;
        if (format == undefined) {
            return (
                [year, month, day].join("-") +
                " " +
                hour +
                ":" +
                min +
                ":" +
                sec
            );
        } else {
            switch (format) {
                case "yyyy-mm-dd":
                    return [year, month, day].join("-");

                case "dd-mm-yyyy":
                    return [day, month, year].join("-");

                case "mm-dd-year":
                    return [month, day, year].join("-");

                case "mm":
                    return month;

                case "dd":
                    return day;

                case "yyyy":
                    return year;
                case "hh-mm-ss":
                    return hour + ":" + min + ":" + sec;

                default:
                    return (
                        [year, month, day].join("-") +
                        " " +
                        hour +
                        ":" +
                        min +
                        ":" +
                        sec
                    );
            }
        }
    },

};

export default Common;
