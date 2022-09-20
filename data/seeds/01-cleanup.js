const { clean } = require('knex-cleaner')

exports.seed = function (knex) {
    return clean(knex, {
        mode: 'truncate',
        ignoteTables: ['knex migrations', 'knex_migrations_lock']
    })
}