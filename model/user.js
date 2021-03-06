const db = require('../db/db')
import moment from 'moment'

module.exports = {
  addUser (params = {}) {
    // 新增用户
    let where = {
      iphone: params.iphone
    }
    console.log(where)
    params.createData = moment().format('YYYY-MM-DD HH:mm:ss')
    // ( data.type: exist表示已存在，add新增 )
    return db.query('user').thenAdd(params, where, true)
  },
  getUserData (params) {
    // 查询用户数据
    return db.query('user').where(params).select()
  },
  compileUser (params) {
    // 修改用户信息
    let where = {
      iphone: params.iphone,
      id: params.id
    }
    return db.query('user').where(where).update(params)
  }
}