// const a: string = `hello`
var a = "hello";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["AUTHOR"] = 3] = "AUTHOR";
})(Role || (Role = {}));
var obj = {
    a: 1,
    b: 2,
    l1: [1, 2, 3],
    l2: [true, 1, "yees"],
    l3: [1, "str"],
    role: Role.ADMIN
};
if (obj.role === Role.ADMIN) {
    console.log("is Author");
    console.log(Role.READ_ONLY);
}
