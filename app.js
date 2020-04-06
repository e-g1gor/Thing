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

                /** If not a number offered, report error */
                if (isNaN(number) || !isFinite(number))
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

    // test
    let Thing = createThing([1,'2',3,4,Infinity,5,'hg6', 'gffg'])
    
    document.body.innerHTML = `avg = ${Thing.AVG}, min = ${Thing.MIN}, max = ${Thing.MAX}, `

})