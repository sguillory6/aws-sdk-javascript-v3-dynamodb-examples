/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-examples-using-tables.html.

Purpose:
ddb_deletetable.js demonstrates how to delete an Amazon DynamoDB table.

INPUTS:
- TABLE_NAME

Running the code:
node ddb_deletetable.js

*/
// snippet-start:[dynamodb.JavaScript.item.deleteTableV3]
// Import required AWS SDK clients and commands for Node.js
import { DynamoDBClient, DeleteTableCommand } from "@aws-sdk/client-dynamodb";

// Set the parameters
export const params = {
    TableName: "aws_sdk_javascript_v3_dynamodb_example",
};

(async () => {
    try {
        const client = new DynamoDBClient({ region: "us-west-2" });
        const data = await client.send(new DeleteTableCommand(params));
        console.log("Success, table deleted", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
})();
// snippet-end:[dynamodb.JavaScript.item.deleteTableV3]
