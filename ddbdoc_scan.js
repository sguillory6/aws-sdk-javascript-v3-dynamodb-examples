/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-query-scan.html.

Purpose:
ddb_scan.js demonstrates how to return items and attributes from an Amazon DynamoDB table.

Running the code:
node ddb_scan.js
*/
// snippet-start:[dynamodb.JavaScript.table.scanV3]

// Import required AWS SDK clients and commands for Node.js
import {DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient, ScanCommand} from "@aws-sdk/lib-dynamodb";

// Set the parameters.
export const params = {
    // Specify which items in the results are returned.
    FilterExpression: "SubTitle = :topic AND Season = :s AND Episode = :e",
    // Define the expression attribute value, which are substitutes for the values you want to compare.
    ExpressionAttributeValues: {
        ":topic": "Innocence",
        ":s": 1,
        ":e": 1,
    },
    // Set the projection expression, which the the attributes that you want.
    ProjectionExpression: "Season, Episode, Title, SubTitle",
    TableName: "aws_sdk_javascript_v3_dynamodb_example",
};

(async () => {
    try {
        const client = new DynamoDBClient({ region: "us-west-2" });
        const ddbDocClient = DynamoDBDocumentClient.from(client);
        const data = await ddbDocClient.send(new ScanCommand(params));
        data.Items.forEach(function (element) {
            console.log(element.Title + " (" + element.SubTitle + ")");
            console.log("Season: " + element.Season + ", Episode: " + element.Episode);
        });
        return data;
    } catch (err) {
        console.log("Error", err);
    }
})().then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);
// snippet-end:[dynamodb.JavaScript.table.scanV3]
// For unit tests only.
// module.exports ={run, params};
