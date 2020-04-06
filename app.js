'use strict'



function createThing(initNumbers = []) {

    /** "private" numbers array */
    let numbers = [],

        /** Thing as described in exercise */
        Thing = {

            /** Try to add new number to array */
            addNumber(num) {
                /** Convert to number */
                let number = (num - 0)

                /** If NaN offered, report error */
                if (Number.isNaN(number))
                    return false

                /** add number and report success */
                numbers.push(number)
                return true
            },


            /** get largest number */
            get MAX() {
                return Math.max(...numbers)
            },


            /** get smallest number */
            get MIN() {
                return Math.min(...numbers)
            },


            /** get average of all numbers */
            get AVG() {
                return numbers.reduce((a, b) => a + b, 0) / numbers.length
            }
        }

        /** Fill numbers array with initial values, if provided */
        initNumbers.forEach(number => Thing.addNumber(number))

    return Thing
}



window.addEventListener('load', () => {

    document.title = 'Thing: code loaded'

    let Thing = createThing([1,2,3,4,5])
    // test
    // document.body.innerHTML = `avg = ${Thing.AVG}, min = ${Thing.MIN}, max = ${Thing.MAX}, `

})