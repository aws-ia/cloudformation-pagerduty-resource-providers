import {CaseTransformer, transformObjectCase} from "./util";

describe('Util', () => {
    describe('transformObjectCase', () => {
        it.each([
            [{
                Foo: 'foo',
                baR: 123,
                HelloWorld: 'Hi'
            }, {
                foo: 'foo',
                ba_r: 123,
                hello_world: 'Hi'
            }],
            [{
                HelloWorld: {
                    Foo: 'foo',
                    baR: 123,
                    HelloWorld: 'Hi'
                }
            }, {
                hello_world: {
                    foo: 'foo',
                    ba_r: 123,
                    hello_world: 'Hi'
                }
            }],
            [{
                HelloWorld: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        baR: 123,
                        helloWorld: 'Hi'
                    }
                ]
            }, {
                hello_world: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        ba_r: 123,
                        hello_world: 'Hi'
                    }
                ]
            }]
        ])('converts payload keys from PascalCase to snake_case', (input, expected) => {
            expect(transformObjectCase(input, CaseTransformer.PASCAL_TO_SNAKE)).toStrictEqual(expected);
        });

        it.each([
            [{
                Foo: 'foo',
                baR: 123,
                HelloWorld: 'Hi'
            }, {
                foo: 'foo',
                baR: 123,
                helloWorld: 'Hi'
            }],
            [{
                HelloWorld: {
                    Foo: 'foo',
                    baR: 123,
                    HelloWorld: 'Hi'
                }
            }, {
                helloWorld: {
                    foo: 'foo',
                    baR: 123,
                    helloWorld: 'Hi'
                }
            }],
            [{
                HelloWorld: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        baR: 123,
                        helloWorld: 'Hi'
                    }
                ]
            }, {
                helloWorld: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        baR: 123,
                        helloWorld: 'Hi'
                    }
                ]
            }]
        ])('converts payload keys from PascalCase to camelCase', (input, expected) => {
            expect(transformObjectCase(input, CaseTransformer.PASCAL_TO_CAMEL)).toStrictEqual(expected);
        });

        it.each([
            [{
                foo: 'foo',
                ba_r: 123,
                hello_world: 'Hi'
            }, {
                foo: 'foo',
                baR: 123,
                helloWorld: 'Hi'
            }],
            [{
                hello_world: {
                    foo: 'foo',
                    ba_r: 123,
                    hello_world: 'Hi'
                }
            }, {
                helloWorld: {
                    foo: 'foo',
                    baR: 123,
                    helloWorld: 'Hi'
                }
            }],
            [{
                hello_world: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        ba_r: 123,
                        hello_world: 'Hi'
                    }
                ]
            }, {
                helloWorld: [
                    'foo',
                    ['hello', 'world'],
                    {
                        foo: 'foo',
                        baR: 123,
                        helloWorld: 'Hi'
                    }
                ]
            }]
        ])('converts payload keys from snake_case to PascalCase', (input, expected) => {
            expect(transformObjectCase(input, CaseTransformer.SNAKE_TO_CAMEL)).toStrictEqual(expected);
        });
    });
});