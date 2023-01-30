import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HelloWorldECS } from './hello-world-ecs';
import { HelloWorldLambda } from './hello-world-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkPocStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldECS = new HelloWorldECS(this, 'hello-world-ecs');
    const helloWorldLambda = new HelloWorldLambda(this, 'hello-world-lambda');
  }
}
