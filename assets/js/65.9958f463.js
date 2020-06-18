(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{297:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"understanding-antara-addresses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understanding-antara-addresses"}},[a._v("#")]),a._v(" Understanding Antara Addresses")]),a._v(" "),e("p",[a._v("The method of transferring module-related assets is often slightly different than the typical Smart Chain transaction.")]),a._v(" "),e("p",[a._v("When making a transaction on a Smart Chain, you normally deal with a sending address and a receiving address. To move coins, you might use methods such as "),e("b",[a._v("sendtoaddress")]),a._v(" or "),e("b",[a._v("z_sendmany")]),a._v(".")]),a._v(" "),e("p",[a._v("When using Antara, however, there are a few new types of addresses to keep in mind when working with transactions. It is not necessary to fully understand all of the address types; only a general understanding is needed.")]),a._v(" "),e("h3",{attrs:{id:"creating-and-launching-with-a-pubkey"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-launching-with-a-pubkey"}},[a._v("#")]),a._v(" Creating and Launching With a Pubkey")]),a._v(" "),e("p",[a._v("The first address you must understand is the pubkey. Any user using an Antara based module must have a pubkey indicated in their daemon. This forms the basis for all addresses related to various modules.")]),a._v(" "),e("p",[a._v("To get a pubkey, launch the chain with the normal launch parameters and execute the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/wallet.html#getnewaddress"}},[a._v("getnewaddress")]),a._v(" API command.")],1),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodo-cli -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD getnewaddress\n")])])]),e("p",[a._v("This will return a new address:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("DO_NOT_USE_ADDRESSgg2ionaes1J5L786\n")])])]),e("p",[a._v("Now, execute the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-api/util.html#validateaddress"}},[a._v("validateaddress")]),a._v(" command.")],1),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodo-cli -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD validateaddress DO_NOT_USE_ADDRESSgg2ionaes1J5L786\n")])])]),e("p",[a._v("This will return a json object with many properties. In the properties you will see:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pubkey"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"DO_NOT_USE_ADDRESS019a79b0921a1be6d3ca6f9e8a050feb14eb845fe46b9d756"')]),a._v("\n")])])]),e("p",[a._v("This is will be your module pubkey; you must now indicate it to the daemon.")]),a._v(" "),e("p",[a._v("To do this, first stop the daemon.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodo-cli -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD stop\n")])])]),e("p",[a._v("Then relaunch your daemon using the required parameters, and make sure to include your pubkey as an additional parameter. For example:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodod -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("HELLOWORLD -ac_supply"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("777777")]),a._v(" -ac_cc"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" -pubkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("DO_NOT_USE_ADDRESS019a79b0921a1be6d3ca6f9e8a050feb14eb845fe46b9d756\n")])])]),e("h4",{attrs:{id:"cc-addresses"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cc-addresses"}},[a._v("#")]),a._v(" CC Addresses")]),a._v(" "),e("p",[a._v("The daemon will now use the above pubkey as the basis for all addresses used for the different modules.")]),a._v(" "),e("p",[a._v("To discover the addresses the pubkey provides, you will typically use an "),e("code",[a._v("address")]),a._v(" related API command from the list of available commands of your chosen module. For example, the "),e("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/faucet.html#faucetaddress"}},[e("b",[a._v("faucetaddress")])]),a._v(" command would return a response like this:")],1),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"result"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"success"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"FaucetCCaddress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"R9zHrofhRbub7ER77B7NrVch3A63R39GuC"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"Faucetmarker"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RKQV4oYs4rvxAWx1J43VnT73rSTVtUeckk"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"GatewaysPubkey"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"03ea9c062b9652d8eff34879b504eda0717895d27597aaeb60347d65eed96ccb40"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"FaucetCCassets"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RQ3ZQycSBM5MPPEopxoEC6R7VLRo1Fmk6f"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"myCCaddress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RReGLfH2MTrkeLSepkVy5vnQPE29g7KofS"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"myaddress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"RJYiWn3FRCSSLf9Pe5RJcbrKQYosaMburP"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[e("code",[a._v("FaucetCCaddress")]),a._v(" is the address that corresponds to the default Faucet module.")]),a._v(" "),e("p",[e("code",[a._v("myCCaddress")]),a._v(" is the address your node uses for interacting with the Faucet module. This is the user address for managing funds in an Antara module.")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("myaddress")]),a._v(" property is the normal address that corresponds to your pubkey. This is the user's address for the Smart Chain's main coin.")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v('For readers who are curious, the letters "CC" are an abbreviation of an internal technology that all Antara modules use while creating unique addresses.')])]),a._v(" "),e("p",[a._v("The use-cases of the different addresses depends on the functionality in question, and the desired outcome.")]),a._v(" "),e("p",[a._v("Also, each module has its own API commands for moving coins or tokens. For example, the Tokens module offers the "),e("RouterLink",{attrs:{to:"/basic-docs/antara/antara-api/tokens.html#tokentransfer"}},[e("b",[a._v("tokentransfer")])]),a._v(" method.")],1)])}),[],!1,null,null,null);s.default=r.exports}}]);