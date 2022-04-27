FROM swr.cn-east-2.myhuaweicloud.com/xinchao-test/nginx:1.15.10
ADD ./dist/ /data/wwwroot/
ADD ./nginx.conf /etc/nginx/nginx.conf
ADD ./run.sh /data
RUN chmod a+x /data/run.sh
WORKDIR /data
ENTRYPOINT sh /data/run.sh
