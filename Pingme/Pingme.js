@Description:
Pingme签到

#获取cookie
http-request ^https:\/\/api\.pingmeapp\.net\/app\/queryBalanceAndBonus script-path=https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/cookie/get_cookie.js, timeout=60, enabled=false, tag=PingMe获取签到参数
#脚本任务
cron "0 */3 * * *" script-path=https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/PingMe/PingMeSignin.js, timeout=300, tag=PingMe签到
[Mitm]
hostname = api.pingmeapp.net