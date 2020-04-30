(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{352:function(e,t,r){"use strict";r.r(t);var a=r(22),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"detect-hyperion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#detect-hyperion"}},[e._v("#")]),e._v(" Detect Hyperion")]),e._v(" "),r("p",[e._v("Hyperion pronounces it's services at the network. Currently with ZeroConf and SSDP.")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#ssdp"}},[e._v("SSDP")]),r("ul",[r("li",[r("a",{attrs:{href:"#ssdp-client-library"}},[e._v("SSDP-Client Library")])]),r("li",[r("a",{attrs:{href:"#usage"}},[e._v("Usage")])])])]),r("li",[r("a",{attrs:{href:"#zeroconf"}},[e._v("Zeroconf")]),r("ul",[r("li",[r("a",{attrs:{href:"#txt-record"}},[e._v("TXT RECORD")])]),r("li",[r("a",{attrs:{href:"#test-clients"}},[e._v("Test Clients")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"ssdp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssdp"}},[e._v("#")]),e._v(" SSDP")]),e._v(" "),r("p",[r("strong",[e._v("S")]),e._v("imple"),r("strong",[e._v("S")]),e._v("ervice"),r("strong",[e._v("D")]),e._v("iscovery"),r("strong",[e._v("P")]),e._v("rotocol ("),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSDP"),r("OutboundLink")],1),e._v("), is the discovery subset of UPnP. The implementation is lighter than ZeroConf as it just needs a UdpSocket without further dependencies.")]),e._v(" "),r("h3",{attrs:{id:"ssdp-client-library"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssdp-client-library"}},[e._v("#")]),e._v(" SSDP-Client Library")]),e._v(" "),r("p",[e._v('Here are some client libraries for different programming languages. You can also search for "UPnP" client libraries. This list isn\'t complete, nor tested but will show you how simple it actually is!')]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/diversario/node-ssdp#usage---client",target:"_blank",rel:"noopener noreferrer"}},[e._v("NodeJS"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/resourcepool/ssdp-client#jarpic-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),r("p",[e._v("If you found a ssdp-client library, all you need to do is searching for the following USN / service type:")]),e._v(" "),r("p",[r("code",[e._v("urn:hyperion-project.org:device:basic:1")])]),e._v(" "),r("p",[e._v("Some headers from the response.")]),e._v(" "),r("ul",[r("li",[e._v("Location: The URL of the webserver")]),e._v(" "),r("li",[e._v("USN: The unique id for this Hyperion instance, it will remain the same also after system restarts or Hyperion updates")]),e._v(" "),r("li",[e._v("HYPERION-FBS-PORT: The port of the flatbuffers server")]),e._v(" "),r("li",[e._v("HYPERION-JSS-PORT: The port of the JsonServer")]),e._v(" "),r("li",[e._v("HYPERION-NAME: The user defined name for this server")]),e._v(" "),r("li",[e._v("More may be added in future with additional data to other Hyperion network ports")])]),e._v(" "),r("p",[e._v("You will receive further notifications when the data changes (Network adapter changed the IP Address, port change) or Hyperion shuts down.")]),e._v(" "),r("h2",{attrs:{id:"zeroconf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#zeroconf"}},[e._v("#")]),e._v(" Zeroconf")]),e._v(" "),r("p",[e._v("Also known as "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bonjour_(software)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple Bonjour"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Avahi_(software)",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avahi"),r("OutboundLink")],1),e._v(". Hyperion is detectable through zeroconf.")]),e._v(" "),r("p",[r("strong",[e._v("Hyperion publishes the following informations:")])]),e._v(" "),r("ul",[r("li",[e._v("_hyperiond-http._tcp -> Hyperion Webserver (HTTP+Websocket)")]),e._v(" "),r("li",[e._v("_hyperiond-json._tcp -> Hyperion JSON Server (TcpSocket)")]),e._v(" "),r("li",[e._v("_hyperiond-flatbuf._tcp -> Hyperion Flatbuffers server (Google Flatbuffers)")])]),e._v(" "),r("p",[e._v("So you get the ip address, hostname and port of the system. Also the Hyperion instance name is part of it (before the @ for the full name). As this works realtime you have always an up2date list of available Hyperion servers right to your hand. So check your development environment if you have access to it.")]),e._v(" "),r("h3",{attrs:{id:"txt-record"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#txt-record"}},[e._v("#")]),e._v(" TXT RECORD")]),e._v(" "),r("p",[e._v("Each published entry contains at least the following informations at the txt field")]),e._v(" "),r("ul",[r("li",[e._v("id = A static unique id to identify a hyperion instance (good value to sort between new and known instances)")]),e._v(" "),r("li",[e._v("version = Hyperion version")])]),e._v(" "),r("h3",{attrs:{id:"test-clients"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#test-clients"}},[e._v("#")]),e._v(" Test Clients")]),e._v(" "),r("p",[e._v("There are several clients available for testing like the "),r("a",{attrs:{href:"http://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("avahi-browse"),r("OutboundLink")],1),e._v(" commandline tool for ubuntu/debian. Example command")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" avahi-browse "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v("\navahi-browse -r _hyperiond-http._tcp\n")])])]),r("ImageWrap",{attrs:{src:"/images/en/avahi-browse.jpg",alt:"Searching for Hyperion Server with Avahi cli"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);