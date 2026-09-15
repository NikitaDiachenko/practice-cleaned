export const ToDos = `query ToDos($options: PageQueryOptions) {
        todos(options: $options) {
        data {
            id
            title
            completed
        }
            meta {
            totalCount
        }
    }
}`
export const CreateTodo = `mutation CreateTodo($input: CreateTodoInput!){
    createTodo(input: $input) {
        id
        completed
        title
    }
}`
export const GetPhotoDetails = `query Photo ($id: ID!){
        photo(id: $id) {
        id
        title
        url
        album {
            id
            title
            user {
                id
                name
                email
            }
        }
    }
}`
export const GetCountriesByContinent = `query GetCountriesByContinent($continent: String!) {
        countries(filter: { continent: { eq: $continent } }) {
            code
            name
            capital
            currency
            languages {
                name
            }
        }
    }`

export const UpdatePost = `mutation UpdatePost ($id:ID!, $input: UpdatePostInput!){
        updatePost(id: $id, input: $input ) {
        id
        title
        body
        }
    }`
export const DeleteUser = `mutation DeleteUser ($id:ID!) {
          deleteUser(id: $id)
        }`