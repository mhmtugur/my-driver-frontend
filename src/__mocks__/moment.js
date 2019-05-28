const moment = jest.requireActual('moment')

Date.now = jest.fn(() => 1561698539000) 

module.exports = moment