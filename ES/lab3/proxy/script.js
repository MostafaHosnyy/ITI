let info = {
    name: "Mostafa",
    addr: "New Giza",
    age: 27,
  };
  
  let handler = {
    set(target, property, value) {
      if (target.hasOwnProperty(property)) {
        if (property === "name" && value.length !== 7) {
          throw new Error("Name doesn't contain 7 chars!");
        } else {
          target[property] = value;
        }
  
        if (property === "addr" && typeof value !== "string") {
          throw new Error(`Address isn't a String!`);
        } else {
          target[property] = value;
        }
  
        if (property === "age" && (value > 60 || value < 25)) {
          throw new Error("The only allowed age is between 25-60!");
        } else {
          target[property] = value;
        }
      } else {
        throw new Error(`Can't add new property!`);
      }
    },
  };
  
  let proxy = new Proxy(info, handler);
  
  proxy.name = "mostafa";
  // proxy.name = "mostafa";
  
  proxy.addr = "New Giza";
  // proxy.addr = 5;
  
  proxy.age = 27;
  // proxy.age = 20;
  
  
  console.log(proxy);