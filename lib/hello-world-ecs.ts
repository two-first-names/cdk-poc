import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import { Cluster, ContainerImage } from "aws-cdk-lib/aws-ecs";
import { ApplicationLoadBalancedFargateService } from "aws-cdk-lib/aws-ecs-patterns";
import { Construct } from "constructs";

export class HelloWorldECS extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id)

        const image = new DockerImageAsset(this, 'image', {
            directory: 'src/hello-world-ecs'
        });

        const cluster = new Cluster(this, 'cluster', {

        });

        // in all likelihood, the pattern probably won't be compatible with our usecase
        const service = new ApplicationLoadBalancedFargateService(this, 'service', {
            cluster,
            memoryLimitMiB: 256,
            desiredCount: 1,
            cpu: 256,
            taskImageOptions: {
                image: ContainerImage.fromDockerImageAsset(image)
            },
            loadBalancerName: 'hello-world-alb'
        })
    }
}