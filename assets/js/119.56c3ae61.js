(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{350:function(a,t,e){"use strict";e.r(t);var s=e(0),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"testing-the-dexp2p-based-realtime-p2p-betting-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#testing-the-dexp2p-based-realtime-p2p-betting-app"}},[a._v("#")]),a._v(" Testing the "),e("RouterLink",{attrs:{to:"/basic-docs/smart-chains/smart-chain-setup/dexp2p.html"}},[a._v("DEXP2P")]),a._v(" based realtime P2P betting App")],1),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("Note")]),a._v(" "),e("p",[a._v("This tech is in development. The specifics of the implementation are subject to change. This document is a Work In Progress.")])]),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("This is a C program that issues RPC calls and automates several steps required to create a p2p betting game. It uses the the DEXP2P Peer to Peer messaging layer for communication between nodes and the blockchain layer for payments.")]),a._v(" "),e("p",[a._v("This program serves to demonstrate the capabilities the "),e("a",{attrs:{href:"https://docs.komodoplatform.com/basic-docs/smart-chains/smart-chain-setup/dexp2p.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("DEXP2P messaging layer"),e("OutboundLink")],1),a._v(" opens up for all Smart Chains. A similar program can be written using any Programming Language that has a library to issue RPC calls.")]),a._v(" "),e("p",[a._v("The bet is a double or nothing game, where you will either get double the money you bet or nothing at all.")]),a._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[a._v("#")]),a._v(" Requirements")]),a._v(" "),e("ul",[e("li",[a._v("Be comfortable with issuing CLI commands")]),a._v(" "),e("li",[a._v('Launch the test chain named "DORN" (instructions in the subsequent sections)')])]),a._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),e("h3",{attrs:{id:"dependencies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[a._v("#")]),a._v(" Dependencies")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" g++-8 gcc-8 build-essential pkg-config libc6-dev m4 g++-multilib autoconf libtool ncurses-dev "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" python python-zmq zlib1g-dev "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" bsdmainutils automake cmake clang ntp ntpdate "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("nano")]),a._v(" -y\n")])])]),e("h3",{attrs:{id:"build-komodo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-komodo"}},[a._v("#")]),a._v(" Build Komodo")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/jl777/komodo\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" komodo\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout jl777\n./zcutil/fetch-params.sh\n./zcutil/build.sh -j"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("nproc"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\n")])])]),e("h3",{attrs:{id:"link-komodo-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#link-komodo-cli"}},[a._v("#")]),a._v(" Link "),e("code",[a._v("komodo-cli")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -sf /home/"),e("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v("/komodo/src/komodo-cli /usr/local/bin/komodo-cli\n")])])]),e("h3",{attrs:{id:"compile-the-betdapp-binary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-the-betdapp-binary"}},[a._v("#")]),a._v(" Compile the "),e("code",[a._v("betdapp")]),a._v(" binary")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/komodo/src/cc/dapps\n./make_betdapp.sh\n")])])]),e("h2",{attrs:{id:"launch-parameters-of-the-dorn-smart-chain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launch-parameters-of-the-dorn-smart-chain"}},[a._v("#")]),a._v(' Launch parameters of the "DORN" smart chain')]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./komodod -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("DORN -ac_cc"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" -ac_supply"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000000")]),a._v(" -ac_reward"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("100000000")]),a._v(" -addnode"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("136.243")]),a._v(".58.134\n")])])]),e("p",[a._v("For now, we are using this chain for both dexp2p messaging and as the coin to bet.")]),a._v(" "),e("h2",{attrs:{id:"bob-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bob-node"}},[a._v("#")]),a._v(" Bob node")]),a._v(" "),e("p",[a._v("This is a node that offers bets that can be filled by any other node on the network. Launch the node using the above launch parameters. Then get a pubkey, corresponding R-address from it by following the guide "),e("a",{attrs:{href:"./get-new-pubkey"}},[a._v("here")])]),a._v(" "),e("p",[a._v("Stop the chain and relaunch it after adding the following parameters to the previous launch parameters.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("-dexp2p"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" -handle"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ANY NAME"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("_bob -pubkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("REGULAR PUBKEY"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("ul",[e("li",[a._v("replace "),e("code",[a._v("<ANY NAME>")]),a._v(" with a name for this node")]),a._v(" "),e("li",[a._v("replace "),e("code",[a._v("<REGULAR PUBKEY>")]),a._v(" with the pubkey noted down previously")])]),a._v(" "),e("p",[a._v("Create a script named "),e("code",[a._v("bet.sh")]),a._v(" with the following contents")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\nkomodo-cli -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("DORN DEX_broadcast "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Raddress of your Pubkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" DORN DORN "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Your Pubkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$2")]),a._v("\n")])])]),e("ul",[e("li",[a._v("replace "),e("code",[a._v("<Raddress of your Pubkey>")]),a._v(" with the normal address that corresponds to your Pubkey")]),a._v(" "),e("li",[a._v("replace "),e("code",[a._v("<Your Pubkey>")]),a._v(" with your pubkey")])]),a._v(" "),e("h3",{attrs:{id:"start-the-betdapp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-the-betdapp"}},[a._v("#")]),a._v(" Start the "),e("code",[a._v("betdapp")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/komodo/src\n./betdapp DORN "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" DORN\n")])])]),e("h3",{attrs:{id:"publish-the-bet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#publish-the-bet"}},[a._v("#")]),a._v(" Publish the bet")]),a._v(" "),e("p",[a._v("Execute the script using with the amount to offer as bet as arguments")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./bet.sh "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),a._v("\n")])])]),e("p",[a._v("Observe the screen where "),e("code",[a._v("betdapp")]),a._v(" is running to see if any Alice node is trying to fill a bet.")]),a._v(" "),e("h2",{attrs:{id:"alice-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alice-node"}},[a._v("#")]),a._v(" Alice node")]),a._v(" "),e("p",[a._v("This is a node that fills bets that are offered by other nodes on the network. Launch the node using the above launch parameters. Then get a pubkey from it by following the guide "),e("a",{attrs:{href:"./get-new-pubkey"}},[a._v("here")])]),a._v(" "),e("p",[a._v("Stop the chain and relaunch it after adding the following parameters to the previous launch parameters.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("-dexp2p"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" -handle"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ANY NAME"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("_alice -pubkey"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("REGULAR PUBKEY"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("ul",[e("li",[a._v("replace "),e("code",[a._v("<ANY NAME>")]),a._v(" with a name for this node")]),a._v(" "),e("li",[a._v("replace "),e("code",[a._v("<REGULAR PUBKEY>")]),a._v(" with the pubkey noted down previously")])]),a._v(" "),e("h3",{attrs:{id:"find-active-bets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find-active-bets"}},[a._v("#")]),a._v(" Find active bets")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("komodo-cli -ac_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("DORN DEX_list "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" DORN DORN\n")])])]),e("p",[a._v("From the matches, select a datablob and note its id")]),a._v(" "),e("h3",{attrs:{id:"start-the-betdapp-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-the-betdapp-2"}},[a._v("#")]),a._v(" Start the "),e("code",[a._v("betdapp")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/komodo/src\n./betdapp DORN "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("id of bet datablob"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("amount to bet"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("ul",[e("li",[a._v("replace "),e("code",[a._v("<id of bet datablob>")]),a._v(" with the id noted before")]),a._v(" "),e("li",[a._v("replace "),e("code",[a._v("<amount to bet>")]),a._v(" with the total amount to bet")])]),a._v(" "),e("p",[a._v("Now, the program should execute and start betting with the Bob node. In each step, the program bets only "),e("code",[a._v("1/1000")]),a._v(" th of the total bet value")])])}),[],!1,null,null,null);t.default=r.exports}}]);