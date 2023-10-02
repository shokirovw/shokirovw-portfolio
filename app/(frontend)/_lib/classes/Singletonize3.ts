type AnyClass = any;

class Singletonize3 {
  private static list: {[key: string]: Array<any>}  = {};

  public static insertClass (classRef: AnyClass, signature: string): void {
    if (!this.list.hasOwnProperty(signature)) {
      this.list[signature] = new Array (classRef, null);
    }
  }

  public static getInstance<T> (signature: string): T {
    //if (!this.list.hasOwnProperty(signature)) return; handling errors will disable suggestions, so better not to handle

    let row = this.list[signature];

    //if (!row[0]) return {};

    if (!row[1]) {
      row[1] = new row[0]();
    }

    return row[1];
  }

  public static async getInstanceAsync<T> (signature: string): Promise<T> {
    //if (!this.list.hasOwnProperty(signature)) return; handling errors will disable suggestions, so better not to handle

    let row = this.list[signature];

    //if (!row[0]) return {};

    if (!row[1]) {
      row[1] = new row[0]();
      await row[1].init();
    }

    return row[1];
  }
}

function generateUniqueKey (classRef: AnyClass) {
  return classRef.name;
}

export function getSingletonInstance<T> (classRef: AnyClass, init_exists: boolean = false): T {
    let unique_key = generateUniqueKey(classRef);

    Singletonize3.insertClass(classRef, unique_key);

    return Singletonize3.getInstance<T>(unique_key);
}

export function getAsyncSingletonInstance<T> (classRef: AnyClass): Promise<T> {
  let unique_key = generateUniqueKey(classRef);

  Singletonize3.insertClass(classRef, unique_key);

  return Singletonize3.getInstanceAsync<T>(unique_key);
}

// If class has a initializer function which is probably async, then call getAsyncSingletonInstance
// If there are no asynchronus operatons, go ahead with getSingletonInstance