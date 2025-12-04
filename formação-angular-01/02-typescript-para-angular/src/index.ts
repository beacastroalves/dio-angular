//Decorators

// class decorator
function ApiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: "Beatriz" });
  };
}

@ApiVersion("1.10")
class Api {}

const api = new Api();
console.log("class decorator:")
console.log(api.__name);
console.log("--- --- --- ---")


// attribute decorator
console.log("attribute decorator:")

function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => {
      if(value.length < length) {
        throw new Error(`Tamanho menor do que ${length}`);
      } else {
        _value = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  }
}

class Api2 {
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api2 = new Api2("usuario");
console.log(api2.name);
