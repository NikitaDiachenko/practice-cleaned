import {test, expect} from "@playwright/test"
import { graphQLRequest } from "../support/graphql-client.js"
import {DeleteUser, UpdatePost} from "../support/graphql-operations.js"

test.describe('Test Suite practice', () => {

    test('updatePost', async({request}) => {
    const response = await graphQLRequest(request, UpdatePost, {id:"1", input: {title: "titleUpdated", body: "bodyUpdated"}})
    const result = await response.json()
    
    expect(response.status()).toBe(200)
    expect(result.data.updatePost.id).toBe("1")
    expect(result.data.updatePost.title).toBe("titleUpdated")
    expect(result.data.updatePost.body).toBe("bodyUpdated")
    })

    test('deleteUser', async ({request}) => {
    const response = await graphQLRequest(request, DeleteUser, {id:"1"} )

    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    expect(responseBody.data.deleteUser).toBeTruthy()
    })
})