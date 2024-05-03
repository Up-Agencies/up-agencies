import { RetentionDays } from "aws-cdk-lib/aws-logs";
import { SSTConfig } from "sst";
import { Bucket, NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "up-agencies-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const bucket = new Bucket(stack, "public");

      const site = new NextjsSite(stack, "site", {
        bind: [bucket],
        environment: {
          NEXT_PUBLIC_BASE_URL: "https://up-agencies-api.onrender.com",
          JWT_SECRET: process.env.JWT_SECRET as string,
        },
        cdk: {
          server: {
            logRetention: RetentionDays.ONE_MONTH,
          },
        },
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
