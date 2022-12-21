/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-table-read-write.html.

Purpose:
ddb_putitem.js demonstrates how to create or replace an item in an Amazon DynamoDB table.

Running the code:
node ddb_putitem.js
*/
// snippet-start:[dynamodb.JavaScript.item.putItemV3]

// Import required AWS SDK clients and commands for Node.js
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

// Set the parameters
export const params = {
    TableName: "aws_sdk_javascript_v3_dynamodb_example",
    Item: {
        Season: { N: "1" },
        Episode: { N: "2" },
        Title: { S: "The End" },
        SubTitle: { S: "Decadence" }
    },
};

(async () => {
    try {
        const client = new DynamoDBClient({ region: "us-west-2" });
        const data = await client.send(new PutItemCommand(params));
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
})();
// snippet-end:[dynamodb.JavaScript.item.putItemV3]
// For unit tests only.
// module.exports ={run, params};
