function date() {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if (second < 10) {
        second = "0" + second; // 补零
    }
    if (month < 10) {
        month = "0" + month; // 补零
    }
    if (day < 10) {
        day = "0" + day; // 补零
    }
    if (hour < 10) {
        hour = "0" + hour; // 补零
    }
    if (minute < 10) {
        minute = "0" + minute; // 补零
    }
    const week = now.getDay();
    const weekArr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    const weekDay = weekArr[week];
    const time = `${year}年${month}月${day}日 <br />${hour}:${minute}:${second} ${weekDay}`;
    return time;
}