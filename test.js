
//const range = {inexpencive: '$'
//moderate: '$$'
//pricy: '$$$'}
class Test {
  price = 0
  ra = ''

  constructor(price) {
    this.price = price
    this.calcRange(price)
  }

  calcRange() {
    console.log("check if")
    if(this.price > 100) {
      this.ra = '$$$'
    } else if (this.price > 50){
      this.ra = ''
    } else {
      this.ra = 'inexpencive'
    }
  }

  range() {
    console.log(this.ra)
  }
}

function priceRange(price) {
  return {
    price,
    range() {
      console.log("check if")
      if (price > 100) {
        console.log('$$$')
      } else {
        console.log('$')
      }
    },
  }
}


// const test = new PriceRange(50)

// const test = priceRange(23)
// const test2 = priceRange()


const test = new Test(23)
const test2 = new Test(500)
const test3 = new Test(80)
const test4 = new Test(90.5)

const restrants = [test, test2, test3, test4]

const y = restrants.filter((t) => {
  return t.ra === '$$'
})

console.log(y)

