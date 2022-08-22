export enum CaseTransformer {
    PASCAL_TO_CAMEL,
    PASCAL_TO_SNAKE,
    SNAKE_TO_CAMEL,
}

export function transformObjectCase(model: { [key: string]: any }, caseTransformer: CaseTransformer){
    switch (caseTransformer) {
        case CaseTransformer.PASCAL_TO_CAMEL:
            return transformObjectKeys(model, key => key.substring(0, 1).toLocaleLowerCase() + key.substring(1));
        case CaseTransformer.PASCAL_TO_SNAKE:
            return transformObjectKeys(model, key => key.substring(0, 1).toLocaleLowerCase() + key.substring(1).replace(/([A-Z])/g, (input) => `_${input.toLocaleLowerCase()}`));
        case CaseTransformer.SNAKE_TO_CAMEL:
            return transformObjectKeys(model, key => key.substring(0, 1).toLocaleLowerCase() + key.substring(1).replace(/_([a-z])/g, (input, p1) => `${p1.toLocaleUpperCase()}`));
        default:
            throw new Error('Case transformer not supported');

    }
}

function transformObjectKeys(model: { [key: string]: any }, transformer: (key: string) => string) {
    if (!model) {
        return model;
    }

    return Object.keys(model).reduce((map, key) => {
        let value = model[key];
        if (value && value instanceof Object && !(value instanceof Array) && !(value instanceof Set)) {
            value = transformObjectKeys(value, transformer);
        }
        if (value && value instanceof Set) {
            value = Array.of(...value);
        }
        if (value && Array.isArray(value)) {
            value = value.map(item => item && item instanceof Object && !(item instanceof Array) && !(item instanceof Set)
                ? transformObjectKeys(item, transformer)
                : item);
        }
        map[transformer(key)] = value;
        return map;
    }, {} as { [key: string]: any })
}
