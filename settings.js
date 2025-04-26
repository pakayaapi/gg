const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=f3gyVSJC#HdnTPaOvQ-k2t6aNx_qaev9oGnyBcUyfNTUFizDbdlQ",
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:lakamd@db.ndduyrkebubwlbwiljee.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL
};
