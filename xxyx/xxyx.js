#晓晓优选
#晓晓优选cookie,打开软件，点击我的
http-response ^https:\/\/xxyx-client-api\.xiaoxiaoyouxuan\.com\/my script-path=https://gist.githubusercontent.com/Sliverkiss/991a81be1fc8cf2a1937432be68f5521/raw/xxyx.js, requires-body=true, timeout=60, enabled=false, tag=xxyxCookie
#脚本任务
cron "0 9 * * *" script-path=https://gist.githubusercontent.com/Sliverkiss/991a81be1fc8cf2a1937432be68f5521/raw/xxyx.js, timeout=60, tag=晓晓优选, img-url=https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/apps/xxyx_01.png
[Mitm]
hostname = xxyx-client-api.xiaoxiaoyouxuan.com