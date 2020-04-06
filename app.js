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
    if (Array.isArray(initNumbers))
        initNumbers.forEach(number => Thing.addNumber(number))

    return Thing
}



window.addEventListener('load', () => {

    document.title = 'Thing: code loaded'

    /** GUI bind code to DOM */
    let table = {
        min: document.getElementById('min'),
        max: document.getElementById('max'),
        avg: document.getElementById('avg'),
        render(min, max, avg) {
            this.min.innerText = min
            this.max.innerText = max
            this.avg.innerText = avg
        }
    },
        newNumber = document.getElementById('newNumber')

    /** report thing state */
    document.getElementById('report').addEventListener('click', () => {
        table.render(Thing.MIN, Thing.MAX, Thing.AVG)
    })

    /** add number handler */
    document.getElementById('addNumber').addEventListener('click', () => {
        /** if number is provided, try to add */
        let rez = newNumber.value!=='' | Thing.addNumber(newNumber.value)
        /** clear field on success or report error */
        if (rez)
            newNumber.value = ''
        else
            alert('You must enter valid number less than 1.7976931348623157e+308')
    })

    // test
    let Thing = createThing([1, '2', 3, 4, Infinity, 5, 'hg6', 'gffg'])
    
})