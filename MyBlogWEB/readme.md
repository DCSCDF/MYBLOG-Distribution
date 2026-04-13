## 前端部署教程

####  1.安装node补全依赖文件
首先安装node_v20.19.3 拷贝当前文件夹的文件到你的运行环境中，先进到server文件夹执行 npm install 安装依赖，依赖安装成功后，
回到上级目录，运行下面的命令
-  `NUXT_PUBLIC_API_BASE` 为后端地址
-  `NUXT_PUBLIC_API_BASE` 为前端管理端地址

windows如下：
```
$env:NUXT_PUBLIC_API_BASE="https://3000"; $env:NUXT_PUBLIC_WEB_BASE="https://5173"; node server/index.mjs
```

linux如下：
```
NUXT_PUBLIC_API_BASE="https://3000" NUXT_PUBLIC_WEB_BASE="https://5173" node server/index.mjs
```