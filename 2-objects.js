const o = new Object();
o.firstName = "sandesh";
o.lastName = "acharya";
o.isTeaching = true;
o.greet = function () {
  console.log("hi");
};

const o2 = {};
o.firstName = "sandesh";
o["lastName"] = "acharya";
const key = "isTeaching";
o[key] = true;
o["greet"] = function () {
  console.log("hi");
};

const o3 = {
  firstName: "sandesh",
  lastName: "acharya",
  isTeaching: true,
  greet: function () {
    console.log("hi");
  },
  address: {
    street: "Main Street",
    number: 123,
  },
};
