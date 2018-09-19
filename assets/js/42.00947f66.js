(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{173:function(t,r,a){"use strict";a.r(r);var e=a(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"关键术语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键术语","aria-hidden":"true"}},[t._v("#")]),t._v(" 关键术语")]),t._v(" "),a("p",[t._v("Pandora.js 里会有一些 “关键词”，这些词的定义可能和普通用户的印象不同，以下会列出这些关键词的释意，以帮助大家更好的理解。")]),t._v(" "),a("h2",{attrs:{id:"通用部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用部分","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用部分")]),t._v(" "),a("h3",{attrs:{id:"procfile-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#procfile-js","aria-hidden":"true"}},[t._v("#")]),t._v(" procfile.js")]),t._v(" "),a("blockquote",[a("p",[t._v("进程描述文件")])]),t._v(" "),a("p",[t._v("定义应用进程结构的描述文件。")]),t._v(" "),a("h3",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application","aria-hidden":"true"}},[t._v("#")]),t._v(" Application")]),t._v(" "),a("blockquote",[a("p",[t._v("应用")])]),t._v(" "),a("p",[t._v("应用的意义和普通情况差别不大，大多数情况下，一个仓库的代码即为一个应用，特殊情况下，一个代码仓库可能会包含多个应用。")]),t._v(" "),a("h3",{attrs:{id:"fork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork","aria-hidden":"true"}},[t._v("#")]),t._v(" Fork")]),t._v(" "),a("blockquote",[a("p",[t._v("基于 require('child_process').fork();")])]),t._v(" "),a("p",[t._v("简单的启动一个 Node.js 程序。")]),t._v(" "),a("h3",{attrs:{id:"cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster","aria-hidden":"true"}},[t._v("#")]),t._v(" cluster")]),t._v(" "),a("blockquote",[a("p",[t._v("基于 require('cluster');")])]),t._v(" "),a("p",[t._v("基于 cluster 模块创建 master / worker 的进程组。")]),t._v(" "),a("h3",{attrs:{id:"service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service","aria-hidden":"true"}},[t._v("#")]),t._v(" Service")]),t._v(" "),a("blockquote",[a("p",[t._v("服务")])]),t._v(" "),a("p",[t._v("Service 我们的定义为 —— 响应标准启动、停止的服务实现。")]),t._v(" "),a("p",[t._v("具体为：")]),t._v(" "),a("ol",[a("li",[t._v("比如很多基础的中间件 SDK 的初始化、停止。")]),t._v(" "),a("li",[t._v("应用主程序的启动、停止。")]),t._v(" "),a("li",[t._v("可以跨进程间调用的服务，创建标准对象代理。")])]),t._v(" "),a("h3",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process","aria-hidden":"true"}},[t._v("#")]),t._v(" Process")]),t._v(" "),a("blockquote",[a("p",[t._v("进程")])]),t._v(" "),a("p",[t._v("含义不变。")]),t._v(" "),a("h2",{attrs:{id:"metrics-部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics-部分","aria-hidden":"true"}},[t._v("#")]),t._v(" Metrics 部分")]),t._v(" "),a("h3",{attrs:{id:"endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint","aria-hidden":"true"}},[t._v("#")]),t._v(" EndPoint")]),t._v(" "),a("blockquote",[a("p",[t._v("端")])]),t._v(" "),a("p",[t._v("EndPoint 是每个不同类型的数据聚合端，它的功能是将采集的数据进行分类聚合，该缓存的缓存，该处理的处理。")]),t._v(" "),a("p",[t._v("例：有不同的 EndPoint，比如 MetricsEndPoint，用于收集 Metrics；HealthEndPoint，用于管理应用健康状况；ErrorEndPoint，用于收集错误日志。")]),t._v(" "),a("h3",{attrs:{id:"indicator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indicator","aria-hidden":"true"}},[t._v("#")]),t._v(" Indicator")]),t._v(" "),a("blockquote",[a("p",[t._v("指示器")])]),t._v(" "),a("p",[t._v("EndPoint 的客户端部分，每个 EndPoint 会对应到多个 Indicator 的数据，两者之间通过 IPC 通道相连。")]),t._v(" "),a("p",[t._v("每个 Indicator 包含具体的数据值，比如一条具体的错误，一个具体的配置对象等等。")]),t._v(" "),a("h3",{attrs:{id:"actuator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#actuator","aria-hidden":"true"}},[t._v("#")]),t._v(" Actuator")]),t._v(" "),a("blockquote",[a("p",[t._v("执行器")])]),t._v(" "),a("p",[t._v("执行器有两大功能：")]),t._v(" "),a("p",[t._v("1、对外提供服务，比如 http 或者 console 服务，将数据对外披露\n2、管理 EndPoint 对象")])])}],!1,null,null,null);s.options.__file="glossary.md";r.default=s.exports}}]);