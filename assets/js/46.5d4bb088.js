(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{169:function(t,e,a){"use strict";a.r(e);var l=a(0),i=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"一些默认监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些默认监控","aria-hidden":"true"}},[t._v("#")]),t._v(" 一些默认监控")]),t._v(" "),a("p",[t._v("我们实现了一些基础的监控类，也提供了一些基础的功能，以后也会逐步添加，当然，如果你实现了一个公共的监控模块，也欢迎大家的贡献。")]),t._v(" "),a("h2",{attrs:{id:"endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endpoint","aria-hidden":"true"}},[t._v("#")]),t._v(" EndPoint")]),t._v(" "),a("h3",{attrs:{id:"基类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基类","aria-hidden":"true"}},[t._v("#")]),t._v(" 基类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Class")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("EndPoint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所有 EndPoint 的基类，实现了基础的 IPC 通信")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DuplexEndPoint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("基础的双工通信采集端，比如错误采集继承了此类")])])])]),t._v(" "),a("h3",{attrs:{id:"一些实现类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些实现类","aria-hidden":"true"}},[t._v("#")]),t._v(" 一些实现类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Class")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Resource")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ErrorEndPoint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("错误日志采集端，靠拦截 logger通过 IPC 内部转发机制实现")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/error")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("InfoEndPoint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("应用基础信息采集端，比如应用名，package.json，目录等")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/info")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MetricsEndPoint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("metrics 指标采集端")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/metrics")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("HealthEndPoint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("健康检查采集端")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/health")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ProcessEndPoint")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("进程信息采集端")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/process")])])])]),t._v(" "),a("h2",{attrs:{id:"indicator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indicator","aria-hidden":"true"}},[t._v("#")]),t._v(" Indicator")]),t._v(" "),a("h3",{attrs:{id:"基类-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基类-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 基类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Class")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Indicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所有的 Indicator 的基础类，实现了基础的 IPC 通信")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DuplexIndicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("一个双工 Indicator 的基础类")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("HealthIndicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("健康检查的基类，规范化了默认的返回行为，因为健康检查只需要返回成功或者失败。")])])])]),t._v(" "),a("h3",{attrs:{id:"实现类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现类","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Class")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DiskSpaceHealthIndicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("实现了磁盘健康检查")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PortHealthIndicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("实现了端口健康检查")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("BaseInfoIndicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("实现了基础信息的采集")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigIndicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("实现了运行时配置信息的采集")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ErrorIndicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("实现了错误信息的动态采集")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("NodeIndicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("实现了 Node 数据的采集")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ProcessIndicator")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("实现了进程信息的采集")])])])]),t._v(" "),a("h2",{attrs:{id:"reporter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reporter","aria-hidden":"true"}},[t._v("#")]),t._v(" Reporter")]),t._v(" "),a("h3",{attrs:{id:"基类-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基类-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 基类")]),t._v(" "),a("p",[t._v("自定义实现可以继承。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Class")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ScheduledMetricsReporter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Metrics 输出的基类，定时执行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CustomReporter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("自定义监控的输出基类")])])])]),t._v(" "),a("h3",{attrs:{id:"内置的实现类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置的实现类","aria-hidden":"true"}},[t._v("#")]),t._v(" 内置的实现类")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Class")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ConsoleReporter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输出 Metrics 到命令行")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("FileMetricManagerReporter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("输出 Metrics 到特定文件")])])])]),t._v(" "),a("h2",{attrs:{id:"metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics","aria-hidden":"true"}},[t._v("#")]),t._v(" Metrics")]),t._v(" "),a("p",[t._v("我们实现了一些基础的 MetricsSet ，采集了基础的应用 Metrics。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Class")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("V8GaugeSet.ts")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("v8 的指标")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CpuUsageGaugeSet.ts")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("cpu 使用率")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("DiskStatGaugeSet.ts")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("磁盘使用率")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("NetTrafficGaugeSet.ts")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("网络流量监控")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SystemLoadGaugeSet.ts")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("系统负载")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SystemMemoryGaugeSet.ts")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("内存监控")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("TcpGaugeSet.ts")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("TCP 数据监控")])])])])])}],!1,null,null,null);i.options.__file="monitor_inner.md";e.default=i.exports}}]);