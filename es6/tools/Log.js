// -----------------------------------------------
// 日志类
// -----------------------------------------------
// Link  : http://www.hlzblog.top/
// GITHUB: https://github.com/HaleyLeoZhang
// -----------------------------------------------

import fs from 'fs'
import { APP_PATH, LOG } from '../conf'
import General from './General'
import Bugjs from 'node-bugjs' // Doc:  https://www.npmjs.com/package/node-bugjs
const Log = new Bugjs(LOG)

// 记录到日志
Log.storeHandler = (log) => {
    let logs = []
    for(let key in log) {
        if(key !== 'logs') {
            logs.push(log[key])
        }
    }
    logs.push(' ')
    const file_path = APP_PATH + '/storage/logs'
    const file_name = General.format_time('Y-m-d') + '.log'
    const target_file = file_path + '/' + file_name
    fs.appendFileSync(target_file, logs.concat(log.logs).join('') + '\n')
}


export default Log