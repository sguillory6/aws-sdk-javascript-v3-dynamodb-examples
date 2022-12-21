/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-query-scan.html.

Purpose:
ddb_query.js demonstrates how to find items in an Amazon DynamoDB table.

Running the code:
node ddb_query.js
*/
// snippet-start:[dynamodb.JavaScript.table.queryV3]

// Import required AWS SDK clients and commands for Node.js
import {DynamoDBClient, QueryCommand} from "@aws-sdk/client-dynamodb";

// Set the parameters
export const params = {
    KeyConditionExpression: "Season = :s and Episode > :e",
    FilterExpression: "contains (SubTitle, :topic)",
    ExpressionAttributeValues: {
        ":s": { N: "1" },
        ":e": { N: "1" },
        ":topic": { S: "Decadence" },
    },
    ProjectionExpression: "Season, Episode, Title, SubTitle",
    TableName: "aws_sdk_javascript_v3_dynamodb_example"
};

(async () => {
    try {
        const client = new DynamoDBClient({ region: "us-west-2" });
        const data = await client.send(new QueryCommand(params));
        data.Items.forEach(function (element) {
            console.log(element.Title.S + " (" + element.SubTitle.S + ")");
        });
        return data;
    } catch (err) {
        console.error(err);
    }
})().then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);
// snippet-end:[dynamodb.JavaScript.table.queryV3]
// For unit tests only.
// module.exports ={run, params};
