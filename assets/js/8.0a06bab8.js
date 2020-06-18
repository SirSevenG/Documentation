(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{229:function(e,t,s){e.exports=s.p+"assets/img/userpass.7a2630bd.png"},230:function(e,t,s){e.exports=s.p+"assets/img/userpass-usage.f6aec90e.png"},231:function(e,t,s){e.exports=s.p+"assets/img/conemu-jq.4872127a.png"},450:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"using-marketmakerv1-for-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-marketmakerv1-for-windows"}},[e._v("#")]),e._v(" Using MarketmakerV1 for Windows")]),e._v(" "),a("h2",{attrs:{id:"barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#barterdex-is-officially-deprecated-as-of-this-writing-and-mm2-is-under-testing-before-public-release"}},[e._v("#")]),e._v(" BarterDEX is officially deprecated as of this writing and mm2 is under testing before public release.")]),e._v(" "),a("p",[a("strong",[e._v("Get the latest binaries from:")]),e._v(" "),a("a",{attrs:{href:"https://github.com/KomodoPlatform/BarterDEX/tree/dev/assets/bin/win64",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),a("OutboundLink")],1),e._v(" "),a("strong",[e._v("Get the scripts from:")]),e._v(" "),a("a",{attrs:{href:"https://github.com/jl777/SuperNET/tree/master/iguana/dexscripts.win32",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github: jl777's repository"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("marketmaker")]),e._v(" binary is essentially barterDEX-CLI")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Before starting, make sure that the scripts and following binaries are all in one folder:")]),e._v(" "),a("ol",[a("li",[e._v("curl.exe (required for all scripts)")]),e._v(" "),a("li",[e._v("marketmaker.exe")]),e._v(" "),a("li",[e._v("libcurl.dll (required to run marketmaker)")]),e._v(" "),a("li",[e._v("nanomsg.dll (required to run marketmaker)")])])]),e._v(" "),a("li",[a("p",[e._v("Don't forget to put "),a("code",[e._v("coins.json")]),e._v(" file into a same folder. This file is available in the repo directory "),a("code",[e._v("Supernet/iguana/exchanges")]),e._v(" "),a("a",{attrs:{href:"https://github.com/jl777/SuperNET/blob/master/iguana/exchanges/coins.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("from here"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Type your passphrase into "),a("code",[e._v("passphrase")]),e._v(" file in this folder (you should create a file with the name passphrase and without any extension) and run "),a("code",[e._v("1-client.cmd")]),e._v(". This will start the marketmaker. The next step is to obtain userpass, which will be needed by other scripts. You can simply copy and paste it from marketmaker output on startup into the "),a("code",[e._v("userpass")]),e._v(" file.")])])]),e._v(" "),a("p",[a("img",{attrs:{src:s(229),alt:"Userpass"}})]),e._v(" "),a("ul",[a("li",[e._v("Or run "),a("code",[e._v("2-getuserpass.cmd")]),e._v(" to fill the "),a("code",[e._v("userpass")]),e._v(" file automatically.**Note:** For the other scripts to access "),a("code",[e._v("userpass")]),e._v(" value, you shouldn't run any other scripts between 1-client.cmd and 2-getuserpass.cmd launching.")])]),e._v(" "),a("p",[e._v("Sample output of correct "),a("code",[e._v("2-getuserpass.cmd")]),e._v(" usage is:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(230),alt:"Using userpass"}})]),e._v(" "),a("p",[e._v("You should see your "),a("code",[e._v("userpass")]),e._v(" on screen, and it will also be automatically copied to the "),a("code",[e._v("userpass")]),e._v(" file. It's required by all the other scripts to have this "),a("code",[e._v("userpass")]),e._v(" value in the "),a("code",[e._v("userpass file")]),e._v(". If the output of "),a("code",[e._v("2-getuserpass.cmd")]),e._v(" is not the same as the value showed on screen, wait some seconds and run "),a("code",[e._v("2-getuserpass.cmd")]),e._v(" again. Also make sure that you have allowed marketmaker to accept incoming connections in your Windows Firewall settings (At the first time launch, your system should automatically ask for it).")]),e._v(" "),a("ul",[a("li",[e._v("The scripts shown in the next section are examples and are there to get you started. For a reference of all the available API options, please refer to "),a("RouterLink",{attrs:{to:"/mmV1/api/general.html"}},[e._v("MarketmakerV1 API.")])],1)]),e._v(" "),a("h2",{attrs:{id:"scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[e._v("#")]),e._v(" Scripts")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" Before you use any script that deals with any actions related to your coins (for example, withdraw and others) edit it and make sure that it has the correct addresses, coin name and volumes inside. Don't run any scripts without looking at it's source and clearly understanding what it does.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("1-client.cmd")]),e._v(" - used to start Marketmaker. Make sure you already have filled a strong "),a("code",[e._v("passphrase")]),e._v(" into "),a("code",[e._v("passphrase file")]),e._v(" as described above.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("2-getuserpass.cmd")]),e._v(" - fills "),a("code",[e._v("userpass")]),e._v(" in "),a("code",[e._v("userpass file")]),e._v(". this step needed to use any other scripts.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("enable.cmd")]),e._v(" - enables the selected coin for trading.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("balance.cmd")]),e._v(" - displays current balance of selected coin.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("getcoin.cmd")]),e._v(" - prints information about a selected coin:")])])]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"disabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("70")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"coin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"coin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"KMD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"installed"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"height"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("580716")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"balance"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("72.68774305")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"KMDvalue"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("72.68774305")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"active"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"electrum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"electrum.cipig.net:10001"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"smartaddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"RTCVGuoSNehKG8YYxcoskC7LK1yZhgvQRV"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"rpc"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"127.0.0.1:7771"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pubtype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"p2shtype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("85")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"wiftype"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("188")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"txfee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("ul",[a("li",[a("p",[a("code",[e._v("electrum.cmd")]),e._v(" - Allows you to run coins in electum mode. For running more coins in electrum mode, add needed electrum servers from here : "),a("RouterLink",{attrs:{to:"/mmV1/coin-integration/electrum-servers-list.html"}},[e._v("Electrum Servers List.")])],1)]),e._v(" "),a("li",[a("p",[a("code",[e._v("help.cmd")]),e._v(" - displays help about all the available API commands.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("listunspent.cmd")]),e._v(" - prints your utxos.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("bot_buy.cmd")]),e._v(" - launches bot for buying. you'll need to set base and rel coin in script, and also maxprice and relvolume.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("bot_list.cmd")]),e._v(" - lists id of all running bots.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("bot_statuslist.cmd")]),e._v(" - list statuses of all running bots.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("bot_stop.cmd")]),e._v(" - stopt the bot with given bot_id.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("withdraw.cmd")]),e._v(" - example of "),a("code",[e._v("withdraw")]),e._v(" method. you can send coins from your smartaddress to any other address using widthraw. When executed, this method generates signed raw tx in hex, which you can use with sendrawtransaction.cmd. Remember that "),a("code",[e._v("withdraw")]),e._v(" only prepares the transaction, but it doesn't broadcast (send) it to network. after tx is prepared we need to send it using "),a("code",[e._v("sendrawtransaction")]),e._v(" method.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("sendrawtransaction.cmd")]),e._v(" - sends raw transaction. you'll need a signedtx in hex.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("withdraw_send.cmd")]),e._v(" - combines "),a("code",[e._v("withdraw")]),e._v(" and "),a("code",[e._v("sendrawtransaction")]),e._v(" scripts. you can call it send, just specify coin, volume and addresses to which you want to send coins and it will prepare and broadcast transaction automatically.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("withdraw_10_send.cmd")]),e._v(" - example of inventory split: This script will split 10 KMD from your balance to be like an ideal Alice inventory into 10 utxos pairs (1.002, 0.00386871). Strongly recommended to read "),a("a",{attrs:{href:"http://pad.supernet.org/barterdex-readme",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://pad.supernet.org/barterdex-readme"),a("OutboundLink")],1),e._v(" -UTXO PAIRS to understand the basics. This script is just for example how you can split your coins in (X, X/777) to start trading them.")])])]),e._v(" "),a("h2",{attrs:{id:"f-a-q"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#f-a-q"}},[e._v("#")]),e._v(" F.A.Q")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Is there a simple way to display JSON results returned by all scripts, like orderbook and others, in a human readable form?")]),e._v(" "),a("ul",[a("li",[e._v("Yes, you can use the service "),a("a",{attrs:{href:"http://jsoneditoronline.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON Editor Online"),a("OutboundLink")],1),e._v(", just copy and paste the output of script in the left column and see structured output in right.")])])]),e._v(" "),a("li",[a("p",[e._v("I see an output like this when I run "),a("code",[e._v("1-client.cmd")]),e._v(" :")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" port.7783 failed: No error sock.1468. errno.0\nbind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" port.7783 failed: No error sock.1516. errno.0\nbind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" port.7783 failed: No error sock.1444. errno.0\nbind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" port.7783 failed: No error sock.1484. errno.0\nbind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" port.7783 failed: No error sock.1412. errno.0\nbind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" port.7783 failed: No error sock.1524. errno.0\nbind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.0")]),e._v(".0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" port.7783 failed: No error sock.1008. errno.0\n")])])]),a("p",[e._v("And nothing works.")]),e._v(" "),a("ul",[a("li",[e._v("Before running "),a("code",[e._v("1-client.cmd")]),e._v(" make sure in Task Manager that you don't already have a running "),a("code",[e._v("marketmaker.exe")]),e._v(". If you have "),a("code",[e._v("- kill")]),e._v(" this process via Task Manager or via command line command "),a("code",[e._v("taskkill /f /im taskkill.exe")]),e._v(" .")])])]),e._v(" "),a("li",[a("p",[e._v("How can I pretty print JSON answers of marketmaker?")]),e._v(" "),a("ul",[a("li",[e._v("You can get best results with 2 tools - "),a("a",{attrs:{href:"https://conemu.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("conemu"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jq"),a("OutboundLink")],1),e._v(" . conemu supports ANSI X3.64 and Xterm 256 colors and jq allow you to pretty-print json output with colors, like this:")])]),e._v(" "),a("p",[a("img",{attrs:{src:s(231),alt:"jq"}})]),e._v(" "),a("ul",[a("li",[e._v("Also it is recommended to install "),a("a",{attrs:{href:"https://www.farmanager.com/index.php?l=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Far Manager"),a("OutboundLink")],1),e._v(" - this is a powerful console file manager for Windows, like Midnight Commander in unix.")])])]),e._v(" "),a("li",[a("p",[e._v("What additional dependencies are required by marketmaker?")])])]),e._v(" "),a("p",[e._v("Currently "),a("code",[e._v("marketmaker.exe")]),e._v(" (Windows) uses the following DLLs:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("32 bit:")]),e._v(" "),a("ol",[a("li",[e._v("libcrypto-1_1.dll")]),e._v(" "),a("li",[e._v("libcurl.dll")]),e._v(" "),a("li",[e._v("libssl-1_1.dll")]),e._v(" "),a("li",[e._v("nanomsg.dll")]),e._v(" "),a("li",[e._v("pthreadvc2.dll")])])]),e._v(" "),a("li",[a("p",[e._v("64-bit:")]),e._v(" "),a("ol",[a("li",[e._v("libcurl.dll")]),e._v(" "),a("li",[e._v("nanomsg.dll")])])])]),e._v(" "),a("p",[e._v("These are already included in the repo and are archived with the releases. Another location the Win-32 dependencies might be found: "),a("a",{attrs:{href:"https://artifacts.supernet.org/latest/windows/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://artifacts.supernet.org/latest/windows/"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);