import {
    AwsTaskWorkerPool,
    BaseModel,
    Constructor,
    exceptions,
    HandlerSignatures,
    LoggerProxy,
    OperationStatus,
    Optional, ProgressEvent,
    ResourceHandlerRequest,
    SessionProxy
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AbstractBaseResource, RetryableCallbackContext} from "./abstract-base-resource";
import {jest} from '@jest/globals';
import {NotStabilized} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import Mock = jest.Mock;

class TestAbstractBaseResource extends AbstractBaseResource<BaseModel, {}, {}, {}, Error> {

    constructor(typeName: string, modelTypeReference: Constructor<BaseModel>, workerPool?: AwsTaskWorkerPool, handlers?: HandlerSignatures<BaseModel>) {
        super(typeName, modelTypeReference, workerPool, handlers);
        this.get = jest.fn<any>().mockResolvedValue({});
        this.list = jest.fn<any>().mockResolvedValue({});
        this.create = jest.fn<any>().mockResolvedValue({});
        this.update = jest.fn<any>().mockResolvedValue({});
        this.delete = jest.fn<any>().mockResolvedValue(undefined);
        this.processRequestException = jest.fn((message) => new Error(message));
    }

    async create(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    async delete(model: BaseModel): Promise<void> {
        return Promise.resolve(undefined);
    }

    async get(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    async list(model: BaseModel): Promise<BaseModel[]> {
        return Promise.resolve([]);
    }

    newModel(partial?: any): BaseModel {
        return new BaseModel(partial);
    }

    processRequestException(e: Error, request: ResourceHandlerRequest<BaseModel>): void {
        throw e;
    }

    setModelFrom(model: BaseModel, from: {} | undefined): BaseModel {
        return undefined;
    }

    async update(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    resetMocks() {
        (this.get as Mock).mockRestore();
        (this.list as Mock).mockRestore();
        (this.create as Mock).mockRestore();
        (this.update as Mock).mockRestore();
        (this.delete as Mock).mockRestore();
    }
}

describe('AbstractBaseResource', () => {
    describe('eventual consistency', () => {
        let testInstance = new TestAbstractBaseResource('foo', BaseModel);
        let session: Optional<SessionProxy>;
        let request: ResourceHandlerRequest<BaseModel> = {
            logicalResourceIdentifier: 'foo'
        } as ResourceHandlerRequest<BaseModel>;
        let logger: LoggerProxy = new LoggerProxy();

        afterEach(() => {
            testInstance.resetMocks();
        });

        async function assertEventualConsistency(
            handleFunctionName: (session: Optional<SessionProxy>, request: ResourceHandlerRequest<BaseModel>, callbackContext: RetryableCallbackContext, logger: LoggerProxy) => Promise<ProgressEvent<BaseModel, any>>,
            initialSetup: () => any,
            retrySetup: () => any,
            lastSetup: () => any,
            retries: number
        ) {
            initialSetup();
            let firstProgressEvent = await handleFunctionName(session, request, {}, logger);
            expect(firstProgressEvent.status).toBe(OperationStatus.InProgress);
            expect(firstProgressEvent.callbackContext).toHaveProperty('retry', 1);

            let callbackContext = firstProgressEvent.callbackContext;

            for (let i = 0; i < retries; i++) {
                retrySetup();
                let intermediateProgressEvent = await handleFunctionName(session, request, callbackContext, logger);
                expect(intermediateProgressEvent.status).toBe(OperationStatus.InProgress);
                expect(intermediateProgressEvent.callbackContext).toHaveProperty('retry', i + 2);
                callbackContext = intermediateProgressEvent.callbackContext;
            }

            lastSetup();
            let lastProgressEvent = await handleFunctionName(session, request, firstProgressEvent.callbackContext, logger);
            expect(lastProgressEvent.status).toBe(OperationStatus.Success);
            expect(lastProgressEvent.callbackContext).toBeUndefined();
        }

        it.each([
            [
                'create',
                testInstance.createHandler,
                () => {
                    // Simulate a successful call to the create API
                    (testInstance.get as Mock).mockRejectedValueOnce('Not found');
                    (testInstance.create as Mock).mockResolvedValueOnce({});
                },
                () => {
                    // Simulate a successful call to the get API, but returning "Not found"
                    (testInstance.get as Mock).mockRejectedValueOnce('Not found');
                    (testInstance.processRequestException as Mock).mockImplementationOnce(() => {
                        throw new exceptions.NotFound('foo', 'foo');
                    });
                },
                () => {
                    // Simulate a successful call to the get API, and returning the model
                    (testInstance.get as Mock).mockResolvedValueOnce(new BaseModel());
                }
            ],
            [
                'delete',
                testInstance.deleteHandler,
                () => {
                    // Simulate a successful call to the create API
                    (testInstance.get as Mock).mockResolvedValueOnce(new BaseModel());
                    (testInstance.delete as Mock).mockResolvedValueOnce({});
                },
                () => {
                },
                () => {
                    // Simulate a successful call to the get API, and returning "Not found"
                    (testInstance.get as Mock).mockRejectedValueOnce('Not found');
                    (testInstance.processRequestException as Mock).mockImplementationOnce(() => {
                        throw new exceptions.NotFound('foo', 'foo');
                    });
                }
            ]
        ])('"%s" handler supports eventual consistency', async (handlerName, handlerFunction, initialSetup, retrySetup, lastSetup) => {
            // First we test that the eventual consistency is reached if we do not go over the maximum retries
            await assertEventualConsistency(handlerFunction, initialSetup, retrySetup, lastSetup, 5);

            // Then we test that we are throwing a NotStabilized if we do not reach consistency after the maximum retries
            try {
                await assertEventualConsistency(handlerFunction, initialSetup, retrySetup, lastSetup, 6);
                fail();
            } catch (e) {
                expect(e).toBeInstanceOf(NotStabilized);
            }
        });
    });
});