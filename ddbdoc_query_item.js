/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-dynamodb-utilities.html.

Purpose:
ddbdoc_update_query.js demonstrates how to use the Amazon DynamoDB document client to query items from an Amazon DynamoDB table.

Inputs (replace in code):
- TABLE_NAME

Running the code:
node ddbdoc_update_query.js
*/
// snippet-start:[dynamodb.JavaScript.docClient.queryV3]
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, QueryCommand } from "@aws-sdk/lib-dynamodb";

// Set the parameters
export const params = {
    TableName: "aws_sdk_javascript_v3_dynamodb_example",
    ExpressionAttributeValues: {
        ":s": 1,
        ":e": 1,
        ":topic": "Decadence",
    },
    // Specifies the values that define the range of the retrieved items. In this case, items in Season 2 before episode 9.
    KeyConditionExpression: "Season = :s and Episode > :e",
    // Filter that returns only episodes that meet previous criteria and have the subtitle 'The Return'
    FilterExpression: "contains (SubTitle, :topic)",
};

(async () => {
    try {
        const client = new DynamoDBClient({ region: "us-west-2" });
        const ddbDocClient = DynamoDBDocumentClient.from(client);
        const data = await ddbDocClient.send(new QueryCommand(params));
        console.log("Success. Item details: ", data);
        // console.log("Success. Item details: ", data.Items);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
})();
// snippet-end:[dynamodb.JavaScript.docClient.queryV3]
// For unit tests only.
// module.exports ={run, params};