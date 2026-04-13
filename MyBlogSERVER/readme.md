## 后端部署教程

#### 1. 创建数据库
使用mysql8.4.0版本，创建名为Myblog的数据库，并且创建好对应的账号密码。

#### 2. 部署
首先安装java17，安装完成后，创建项目文件夹，将Myblog_dev-0.0.1-SNAPSHOT.jar与application.yml放在同一个目录。
首先修改yml文件，配置数据库与跨域访问。

在datasource中：
- `Your_DB_IP`为数据库的本地IP地址默认为127.0.0.1。
- `Your_DB_name`为数据库名。
- `your_DB_username`为数据库账号。
- `your_DB_password`为数据库密码。
-  `port` 服务器启动后的端口，默认为8088。
- `Your_WEB_IP`和`Your_WEB_ADMIN_IP`为前端和前端管理端的域名地址，必须要配置正确否则前端无法访问后端接口。

```yml
spring:
  datasource:
    url: jdbc:mysql://Your_DB_IP:3306/Your_DB_name?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true
    username: your_DB_username
    password: your_DB_password

server:
  port: 8088

app:
  cors:
    allowed-origins: Your_WEB_IP/Domain Name, Your_WEB_ADMIN_IP/Domain Name

```

配置完成yml文件后，在项目目录下执行如下命令启动服务器

```
  java -jar Myblog_dev-0.0.1-SNAPSHOT.jar
```

