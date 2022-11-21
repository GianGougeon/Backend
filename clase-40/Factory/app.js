class FrontEndDeveloper {
  constructor(name) {
    this.name = name;
    this.type = "FrontEndDeveloper";
  }
}

class BackEndDeveloper {
  constructor(name) {
    this.name = name;
    this.type = "BackEndDeveloper";
  }
}

class DeveloperFactory {
  create(name, type) {
    switch (type) {
      case 1:
        return new FrontEndDeveloper(name);
      case 2:
        return new BackEndDeveloper(name);
    }
  }
}

const devFactory = new DeveloperFactory();
const devs = [];

devs.push(devFactory.create("John", 1));
devs.push(devFactory.create("Jane", 2));

console.log(devs);
