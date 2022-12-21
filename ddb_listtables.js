/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-examples-using-tables.html.

Purpose:
ddb_listtables.js demonstrates how to retrieve a list of Amazon DynamoDB table names.

Running the code:
node ddb_listtables.js
*/
// snippet-start:[dynamodb.JavaScript.table.listTablesV3]

// Import required AWS SDK clients and commands for Node.js
import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

(async () => {
    try {
        const client = new DynamoDBClient({ region: "us-west-2" });
        const data = await client.send(new ListTablesCommand({}));
        console.log(data.TableNames.join("\n"));
        return data;
    } catch (err) {
        console.error(err);
    }
})();
// snippet-end:[dynamodb.JavaScript.table.listTablesV3]
// For unit tests only.
// module.exports ={run};
