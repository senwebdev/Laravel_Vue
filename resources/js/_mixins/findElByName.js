export default {

    methods: {

        findElByName(name, startEl = false) {

            if (startEl === false) {
                startEl = this.$root;
            }

            // set our return value as an object
            let returnVal = {value: false};

            function recursiveFind(name, recursion, returnVal = {value: false}) {

                // check we have children
                if (recursion.hasOwnProperty('$children') && recursion.$children.length) {

                    // loop through every child
                    for (let i = 0; i < recursion.$children.length; i++) {

                        // check if our names match up
                        if (recursion.$children[i].$options.name === name) {

                            // we found our element, store as return value
                            returnVal.value = recursion.$children[i];
                            return true; // return true as we have completed

                        } else if (recursion.$children[i].$children.length > 0) {
                            // perform our loop
                            recursiveFind(name, recursion.$children[i], returnVal);
                        }
                    }
                }
            }

            // recursively find our element. Set return value as
            // an object as it'll be bound
            recursiveFind(name, startEl, returnVal);

            // if we have an object, return it
            if (typeof returnVal.value === "object") {
                return returnVal.value;
            }

            // return false by default
            return false;
        }
    }
}
