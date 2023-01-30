import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class HelloWorldLambda extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        const code = Code.fromDockerBuild('src/hello-world-lambda');

        const fn = new Function(this, 'function', {
            runtime: Runtime.NODEJS_18_X,
            handler: 'index.handler',
            code
        });

        const fnNodeJs = new NodejsFunction(this, 'nodejs-function', {
            entry: 'src/hello-world-lambda/index.ts',
            handler: 'handler'
        });
    }
}