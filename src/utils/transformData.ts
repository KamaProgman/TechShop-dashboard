export interface FirestoreValue {
  stringValue?: string;
  integerValue?: string;
  booleanValue?: boolean;
  arrayValue?: { values: FirestoreValue[] };
  mapValue?: { fields: FirestoreFields };
}

export interface FirestoreFields {
  [key: string]: FirestoreValue;
}

export interface FirestoreDocument {
  name?: string;
  fields: FirestoreFields;
  createTime?: string;
  updateTime?: string;
}

export class FirestoreTransformer {
  private static transformFunctions: { [key: string]: (value: any) => any } = {
    stringValue: (value: string) => value,
    integerValue: (value: string) => parseInt(value, 10),
    booleanValue: (value: boolean) => value,
    arrayValue: (value: { values: FirestoreValue[] }) =>
      value.values.map((v) => FirestoreTransformer.transformField(v)),
    mapValue: (value: { fields: FirestoreFields }) =>
      FirestoreTransformer.transformFields(value.fields),
  };

  static transformField(field: FirestoreValue): any {
    const key = Object.keys(field).find(
      (k) => FirestoreTransformer.transformFunctions[k]
    );
    return key
      ? FirestoreTransformer.transformFunctions[key](
        field[key as keyof FirestoreValue]
      )
      : null;
  }

  static transformFields(fields: FirestoreFields): any {
    const result: any = {};
    for (const key in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, key)) {
        result[key] = FirestoreTransformer.transformField(fields[key]);
      }
    }
    return result;
  }

  static transformDocument(doc: FirestoreDocument): any {
    return {
      id: doc?.name?.split("/").pop(),
      ...FirestoreTransformer.transformFields(doc.fields),
      createdAt: doc.createTime,  // Добавляем ключ createdAt
      updateTime: doc.updateTime,
    };
  }

  static transformFirebaseData(
    data: FirestoreDocument[] | FirestoreFields
  ): any {
    if (Array.isArray(data)) {
      return data.map((doc) => FirestoreTransformer.transformDocument(doc));
    } else if ("fields" in data) {
      return FirestoreTransformer.transformDocument(
        data as unknown as FirestoreDocument
      );
    }
    return FirestoreTransformer.transformFields(data as FirestoreFields);
  }

  static toFirestoreFormat(data: any): FirestoreFields {
    const transformValue = (value: any): FirestoreValue => {
      if (typeof value === "string") {
        return { stringValue: value };
      } else if (typeof value === "number") {
        return { integerValue: value.toString() };
      } else if (typeof value === "boolean") {
        return { booleanValue: value };
      } else if (Array.isArray(value)) {
        return {
          arrayValue: {
            values: value?.map((v) => transformValue(v)),
          },
        };
      } else if (typeof value === "object" && value !== null) {
        return {
          mapValue: {
            fields: Object.fromEntries(
              Object.entries(value).map(([k, v]) => [k, transformValue(v)])
            ),
          },
        };
      } else {
        throw new Error("Unsupported data type");
      }
    };

    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, transformValue(value)])
    );
  }
}

