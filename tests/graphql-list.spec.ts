import {test, expect} from "@playwright/test"
import { graphQLRequest } from "../support/graphql-client.js"
import {GetCountriesByContinent} from "../support/graphql-operations.js"

test.describe("filtering by continent with included fields", () => {

    test('filtering by continent check', async ({request}) => {
        const response = await graphQLRequest(request, GetCountriesByContinent, {continent: "EU"}, "https://countries.trevorblades.com/")

        
        const result = await response.json()
        expect(response.status()).toBe(200)
        
        expect(result.errors).toBeUndefined()
        expect(result.data.countries.length).toBeGreaterThan(0)
        const hasPoland = result.data.countries.some((country: any) => country.name === 'Poland')
        expect(hasPoland).toBe(true)
    })

    })