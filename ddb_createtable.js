/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-examples-using-tables.html.

Purpose:
ddb_createtable.js demonstrates how to create an Amazon DynamoDB table.

INPUTS:
- TABLE_NAME
- ATTRIBUTE_NAME_1: the name of the partition key
- ATTRIBUTE_NAME_2: the name of the sort key (optional)
- ATTRIBUTE_TYPE: the type of the attribute (e.g., N [for a number], S [for a string] etc.)

Running the code:
node ddb_createtable.js
*/

// snippet-start:[dynamodb.JavaScript.table.createTableV3]
// Import required AWS SDK clients and commands for Node.js
import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb";

// Set the parameters
export const params = {
    AttributeDefinitions: [
        {
            AttributeName: "Season", //ATTRIBUTE_NAME_1
            AttributeType: "N", //ATTRIBUTE_TYPE
        },
        {
            AttributeName: "Episode", //ATTRIBUTE_NAME_2
            AttributeType: "N", //ATTRIBUTE_TYPE
        },
    ],
    KeySchema: [
        {
            AttributeName: "Season", //ATTRIBUTE_NAME_1
            KeyType: "HASH",
        },
        {
            AttributeName: "Episode", //ATTRIBUTE_NAME_2
            KeyType: "RANGE",
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    TableName: "aws_sdk_javascript_v3_dynamodb_example", //TABLE_NAME
    StreamSpecification: {
        StreamEnabled: false,
    },
};

(async () => {
    try {
        const client = new DynamoDBClient({ region: "us-west-2" });
        const data = await client.send(new CreateTableCommand(params));
        console.log("Table Created", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
})();
// snippet-end:[dynamodb.JavaScript.table.createTableV3]
