const express = require('express');

const { BadRequestError } = require("../utils/errors")


class GiftExchange {

    static pairs(names){
        if (names.length % 2 === 1) throw new BadRequestError
        const namedPairs = []

        while (names.length){
            const currentNames=[]
            while (currentNames.length < 2 && names.length>0){
                const selectedNameIdx = Math.floor(Math.random()*names.length)
                const selectedName = names[selectedNameIdx]
                names.splice(selectedNameIdx,1)
                currentNames.push(selectedName)
            }
            namedPairs.push(currentNames)
        }
        return namedPairs
    }


static traditional(names) {
    let currentIdx = names.length
    while (currentIdx > 0) {
      const randomIdx = Math.floor(Math.random() * currentIdx)
      const temp = names[currentIdx]
      names[currentIdx] = names[randomIdx]
      names[randomIdx] = temp

      currentIdx -= 1
    }


const pairings = []

    for (let i = 0; i < names.length; i++) {
      const giver = names[i]
      const receiver = i === names.length - 1 ? names[0] : names[i + 1]

      pairings.push(`${giver} is giving a gift to ${receiver}`)
    }

    return pairings
  }
}

module.exports = GiftExchange