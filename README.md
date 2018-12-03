# Cross-stack deployment
Demonstrate CloudFormation cross-stack deployment where one stack is able to reference to resources created by a different stack. 

In this demo there are two stacks:
  
  1. DynamoDB stack 
  2. Lambda function stack

DynamoDB stack will export the value of it's table, while the Lambda function stack will import the value exported by DynamoDB stack. 

## Deploy
This demo allow both stack to be deployed into any staging environment (dev/staging/prod or etc). Simply use the --stage attribute for deployment. The default was set to dev.

Deploy DynamoDB stack:
```
$ cd ddb-stack 
$ sls deploy --stage dev
```

Deploy Lambda stack:
```
$ cd lambda-stack
$ sls deploy --stage dev
```

## Test
Invoke the lambda function. 
```
sls invoke -f createUser -d '{"email":"anonymous@gmail.com"}' --stage dev
```

