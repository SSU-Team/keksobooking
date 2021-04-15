const a: string = "hello";

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

const obj = {
  a: 1,
  b: 2,
  l1: [1,2,3],
  l2: [true, 1, "yees"],
  l3: [1, "str"],
  role: Role.ADMIN
}

if (obj.role === Role.ADMIN) {
  console.log(`is Author`)
  console.log(Role.READ_ONLY)
}
