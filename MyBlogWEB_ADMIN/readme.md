## 前端管理端部署教程
管理端为静态网站文件，使用部署静态网站的方式即可，部署前修改env-config.json文件，修改如下配置：

```json
{
  "version": "1.0",
  "lastModified": "2026-04-13T10:44:32.395Z",
  "configurable": true,
  "env": {
    "VITE_API_BASE_URL": "https://123123.com", // 后端接口地址
    "VITE_USE_MOCK": "false",  // 是否使用mock数据
    "VITE_DEBUG_MODE": "false", // 是否开启debug模式
    "VITE_SHOW_CONSOLE_LOGS": "true" // 是否显示控制台日志
  }
}
```