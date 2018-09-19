(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{179:function(t,n,s){"use strict";s.r(n);var a=s(0),o=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Pandora.js 设计了一套配置文件，希望能和应用的配置进行隔离，毕竟 Pandora.js 可能会在全局场景下应用，导致不一样的情况发生。")]),t._v(" "),s("p",[t._v("Pandora.js 设计了一套简单有效的配置覆盖机制，用户可以通过配置文件的形式，对默认的行为做一些修改。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("本质上，配置的覆盖就只是配置文件内容的覆盖，所以只需要做好分割就好。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),s("p",[t._v("该文件维护在 "),s("a",{attrs:{href:"https://github.com/midwayjs/pandora/blob/master/packages/pandora/src/default.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("default.ts"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Pandora.js 提供了一组默认的配置来保证基础脚本的运行，一般指定了几项标准的内容：")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"./../monitor/endpoint.html"}},[t._v("actuator 监控的配置，主要为 EndPoint")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./../monitor/report.html"}},[t._v("reporter 监控上报的配置")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"./../process/environment_std.html"}},[t._v("environment 标准的环境实现类")])],1)]),t._v(" "),s("p",[t._v("在这些key的基础上，进行覆盖，增加操作，默认配置如下，可能有变化，具体见代码详情。")]),t._v(" "),t._m(8),t._v(" "),t._m(9)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"全局配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局配置")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("我们通过 "),n("code",[this._v("PANDORA_CONFIG")]),this._v(" 这个环境变量来注入配置包，这个配置包可以是一个文件，如果内容比较多，也可以是一个 npm 包，能直接 require 即可。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("PANDORA_CONFIG=pandora-ali pandora start .\nPANDORA_CONFIG=./index.js pandora start .\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("文件的内容"),n("strong",[this._v("只需要写覆盖的部分")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"通过命令行加载多配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过命令行加载多配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 通过命令行加载多配置")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("注意：Pandora.js 使用 "),n("code",[this._v(":")]),this._v(" 作为分隔符来分割多个路径。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("$ export PANDORA_CONFIG=pandora-ali:./index.js\n$ pandora start\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"默认的全局配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#默认的全局配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 默认的全局配置")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("下文中所有的自由变量（即没有声明来源的量，比如 DefaultEnvironment），全部可以通过 "),n("code",[this._v("require('dorapan')")]),this._v(" 或 "),n("code",[this._v("require('pandora')")]),this._v(" 获得。")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  \n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 配置环境实现类")]),t._v("\n  environment"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DefaultEnvironment"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  actuator"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),s("span",{attrs:{class:"token comment"}},[t._v("// RESTful 接口进行配置")]),t._v("\n    http"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      port"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("7002")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 默认监听在 7002 端口")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 配置 EndPoints")]),t._v("\n    endPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      \n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 错误采集的 EndPoint")]),t._v("\n      error"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ErrorEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ErrorResource"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        initConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token comment"}},[t._v("// 错误缓存大小，保留最近多少条错误")]),t._v("\n          maxErrorCount"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      \n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 健康检查的 EndPoint")]),t._v("\n      health"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HealthEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HealthResource"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        initConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token comment"}},[t._v("// HTTP 检查")]),t._v("\n          port"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            checkUrl"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`http://127.1:6001`")])]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{attrs:{class:"token comment"}},[t._v("// 磁盘检查")]),t._v("\n          disk_space"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            rate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("80")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      \n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 应用信息的 EndPoint")]),t._v("\n      info"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// 应用信息")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" InfoEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" InfoResource"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      \n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 进程信息的 EndPoint")]),t._v("\n      process"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// 进程信息")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ProcessEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ProcessResource"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      \n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 自定义 Metrics 的 EndPoint")]),t._v("\n      metrics"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricsEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricsResource"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        initConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          collector"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NormalMetricsCollector\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      \n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 链路追踪的 EndPoint")]),t._v("\n      trace"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TraceEndPoint"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        resource"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TraceResource"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        initConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token comment"}},[t._v("// 缓存最近 1000 条链路")]),t._v("\n          cacheSize"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1000")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{attrs:{class:"token comment"}},[t._v("// 采样率")]),t._v("\n          rate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'production'")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{attrs:{class:"token comment"}},[t._v("// 优先级高的链路是否跳出采样率限制，比如错误的链路")]),t._v("\n          priority"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" \n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 数据上报 Reporter 的配置")]),t._v("\n  reporter"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    file"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      enabled"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 默认实现把 Metrics 日志写到 ~/logs/pandorajs/metrics")]),t._v("\n      target"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FileMetricsManagerReporter"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      interval"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("5")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  "),s("span",{attrs:{class:"token comment"}},[t._v("// 应用日志的配置")]),t._v("\n  logger"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 日志目录")]),t._v("\n    logsDir"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("join")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token function"}},[t._v("homedir")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'logs'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 每个应用的日志配置，基本上就是 Stdout")]),t._v("\n    appLogger"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 默认不输出到 Daemon 的 Stdout，请务必不要改变这一配置")]),t._v("\n      stdoutLevel"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'NONE'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 默认记录 Info 信息，比如应用启动停止，建议保持 INFO")]),t._v("\n      level"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'INFO'")]),t._v(" \n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// Service 的日志是否分散为单个日志文件，建议保持 false")]),t._v("\n    isolatedServiceLogger"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" \n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])}],!1,null,null,null);o.options.__file="global_config.md";n.default=o.exports}}]);