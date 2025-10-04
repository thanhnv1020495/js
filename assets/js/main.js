const user = {
    firstName: "A",
    lastName: "Nguyen Van",
    fullName() {
        return `${this.lastName} ${this.firstName}`;
    },
    set reName(newName) {
        this.firstName = newName.split(" ").pop();   // lấy từ cuối
        this.lastName = newName.split(" ").slice(0, -1).join(" ");
    },
    get reName() {
        return `${this.lastName} ${this.firstName}`;
    }
}

console.log(user.fullName());  // "Nguyen Van A"

user.reName = "Nguyen Van B"; // dùng setter để đổi tên
console.log(user.reName);      // "Nguyen Van B"
console.log(user.fullName());  // "Nguyen Van B"


