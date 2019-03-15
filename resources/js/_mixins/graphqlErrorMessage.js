export default {
    methods: {
        serverError(errorMsg) {
            return errorMsg.replace('GraphQL error:', ' ').trim();
        }
    }
}
