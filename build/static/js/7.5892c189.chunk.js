(this["webpackJsonpcontact-tracing"]=this["webpackJsonpcontact-tracing"]||[]).push([[7],{404:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(9),c=a(10),s=a(12),o=a(11),i=a(0),l=a.n(i),u=a(389),d=a(15),h=a(137),b=a(88),p=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).getHistory=function(){var t={from_date:Object(h.default)(Object(b.default)(new Date,-6),"yyyy-MM-dd"),to_date:Object(h.default)(Object(b.default)(new Date,1),"yyyy-MM-dd")};Object(d.i)("/api/cross/7day-report",t).then((function(t){if(200===t.request.status){var a=Object(n.a)(e.state.breaches);t.data.result.reverse().map((function(e,t){return a[t+1]=new Array(Object(h.default)(Object(b.default)(new Date(e.to_day),-1),"dd/MM"),e.total),e})),e.setState({breaches:a})}}))},e.state={breaches:[["Dates","Number of breaches"]]},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.getHistory()}},{key:"render",value:function(){return l.a.createElement("div",{className:"graph-box"},l.a.createElement("div",{className:"topgraphheading"},l.a.createElement("h3",null,"Breach history"),l.a.createElement("h4",null,"Last 7 Days")),l.a.createElement("div",{className:"grapContainer"},l.a.createElement(u.a,{width:"550px",height:"400px",chartType:"Bar",loader:l.a.createElement("div",null,"Loading Chart"),data:this.state.breaches,options:{legend:{position:"none"}}})))}}]),a}(i.Component);t.default=p}}]);
//# sourceMappingURL=7.5892c189.chunk.js.map