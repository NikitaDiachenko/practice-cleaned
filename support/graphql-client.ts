import type { APIRequestContext, APIResponse } from "@playwright/test";

export async function graphQLRequest(
    request: APIRequestContext, 
    query: string, 
    variables?: Record<string, any>,
    endpoint: string = "/api"
): Promise<APIResponse> {
    const response = await request.post(endpoint, {
        data: {
            query,
            variables
        }
    });
    return response;
}