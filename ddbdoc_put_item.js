/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-dynamodb-utilities.html.

Purpose:
ddbdoc_put_item.js demonstrates how to use the Amazon DynamoDB document client to create or replace an item in an Amazon DynamoDB table.

Running the code:
node ddbdoc_put_item.js
*/
// snippet-start:[dynamodb.JavaScript.docClient.putV3]

// Import required AWS SDK clients and commands for Node.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand} from "@aws-sdk/lib-dynamodb";

// Set the parameters.
export const params = {
    TableName: "aws_sdk_javascript_v3_dynamodb_example",
    Item: {
        Season: 1, // For example, 'Season': 2
        Episode: 1, // For example,  'Episode': 2 (only required if table has sort key)
        Title: "The Beginning", //For example 'Title': 'The Beginning'
        SubTitle: "Innocence"
    },
};

(async () => {
    try {
        // Create the DynamoDB Document client.
        const client = new DynamoDBClient({ region: "us-west-2" });
        const ddbDocClient = DynamoDBDocumentClient.from(client);
        const data = await ddbDocClient.send(new PutCommand(params));
        console.log("Success - item added or updated", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
})();
// snippet-end:[dynamodb.JavaScript.docClient.putV3]
// For unit tests only.
// module.exports = { run, params };
