import { ScanCommand } from "@aws-sdk/lib-dynamodb"
import { dynamoDBClient } from "src/lib/dynamoClient"

export async function handler() {

  const command = new ScanCommand({
    TableName: 'ProductsTable',
  })

  const { Items } = await dynamoDBClient.send(command);

  return {
    statusCode: 200,
    body: JSON.stringify(Items), 
  }
}