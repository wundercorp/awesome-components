# Recreate this 21st.dev component

You are implementing a React component based on a public 21st.dev community component.

## Component identity

- Source page: https://21st.dev/community/components/rahil1202/scanner-card-stream/default
- Registry URL: https://21st.dev/r/rahil1202/scanner-card-stream
- Author: rahil1202
- Component slug: scanner-card-stream
- Demo slug: default
- Title: scanner-card-stream
- Description: 
- Registry status: Registry fetch failed from https://21st.dev/r/rahil1202/scanner-card-stream with status 403. Error: {"error":"Authentication required"}
- Local rendered HTML file: generated-21st-prompts/rendered-html/rahil1202__scanner-card-stream__default.html
- Local screenshot file: generated-21st-prompts/screenshots/rahil1202__scanner-card-stream__default.png

## Goal

Recreate this component in a React + TypeScript + Tailwind CSS project. Preserve the visual layout, spacing, colors, border radius, shadows, interaction behavior, animation behavior, responsive behavior, and dark mode behavior shown in the rendered demo.

## Implementation requirements

- Use React and TypeScript.
- Use Tailwind CSS classes whenever possible.
- Keep the component self-contained unless the source files require helper components.
- If the source uses CSS variables, custom CSS, animations, or keyframes, include them.
- If the source uses external packages, list and use the required packages.
- Preserve accessibility attributes, button semantics, links, keyboard behavior, and ARIA attributes when visible in the source.
- Do not replace the component with a simplified placeholder.
- Return complete production-ready code.

## Dependencies

No registry metadata available.

## Rendered DOM snapshot

This is the rendered demo HTML extracted from the live preview. Use it to verify structure, class names, visible content, and layout.

```html
<div id="root"><div class="w-screen min-h-screen flex justify-center items-center"><div class="w-screen min-h-screen flex justify-center items-center"><main class="relative w-screen h-screen flex items-center justify-center overflow-hidden"><style>
        @keyframes glitch { 0%, 16%, 50%, 100% { opacity: 1; } 15%, 99% { opacity: 0.9; } 49% { opacity: 0.8; } }
        .animate-glitch { animation: glitch 0.1s infinite linear alternate-reverse; }
        
        /* New pulse animation for the scanner line */
        @keyframes scanPulse {
          0% { opacity: 0.75; transform: scaleY(1); }
          100% { opacity: 1; transform: scaleY(1.03); }
        }
        .animate-scan-pulse {
          animation: scanPulse 1.5s infinite alternate ease-in-out;
        }
      </style><canvas class="absolute top-1/2 left-0 -translate-y-1/2 w-screen h-[250px] z-0 pointer-events-none" data-engine="three.js r180" width="992" height="250" style="width: 992px; height: 250px;"></canvas><canvas class="absolute top-1/2 left-0 -translate-y-1/2 w-screen h-[300px] z-10 pointer-events-none" width="992" height="300"></canvas><div class="
          scanner-line absolute top-1/2 left-1/2 h-[280px] w-0.5 -translate-x-1/2 -translate-y-1/2 
          bg-gradient-to-b from-transparent via-violet-500 to-transparent rounded-full
          transition-opacity duration-300 z-20 pointer-events-none animate-scan-pulse
          opacity-100
        " style="box-shadow: rgb(167, 139, 250) 0px 0px 10px, rgb(167, 139, 250) 0px 0px 20px, rgb(139, 92, 246) 0px 0px 30px, rgb(99, 102, 241) 0px 0px 50px;"></div><div class="absolute w-screen h-[250px] flex items-center"><div class="flex items-center whitespace-nowrap cursor-grab select-none will-change-transform" style="gap: 60px; transform: translateX(-165.041px);"><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 100%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b55e654d1341fb06f8_4.1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 100%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">+vOji+DSOQ[om%N'1~O{CC3_~GeqVFkr&amp;=V]c56$(2L"|`dN)||lZnfJ[g`{S
]$F{^`d\YHl3C!9OYAUfj'~Yzx#\5d_t1Zl3(0fR(*]^(FDz:M:V`FD@JME,G
9dZ6%BuQ3}Mx2)Qk~H13#v'}A7f*^^PV2vyB'f/&amp;3`.LTR?f5T#0eo\*~Mq2?
[R4$h'q+ApC)yGpRkU&lt;%%p'I~upQ;Jz~VGC=@!b\a}0fF*Hz(7W:1KT'#(T_v
1.|%:OU-bxv"*v=#-8gp}'-iNSK(xrl&gt;s+ij2A"(wz@P(34Cj_~#YWVq*;+JM
Yd:ub+"#ks:[263KDX/s3o'2#o2^N;9dhH;$|g*/\(IHtviAU5F2&gt;)/7wOE!X
/qNs/PkM8FI9SrN1K??:{&lt;C!"C`PWC_=xUO,M.L/x,h2^y]kylzWi9O`[57u)
ByZaY\`;F*wTH*o,V%2\n`)X5'ZVLU`z]qz2QsTd:]:UDUQ;,$LdN{'#t-pey
QMv&gt;az_W"@&amp;;*_D@GZ@)T;y1D&lt;6EU0jA/j3}E$rML7aZGIfSk}p$'?)Ey3HUO
:gL7EDMV1&amp;u%~dKf5rZ,k!DrA'e@C*RE2r+n$\~f:M#jQ"NNCb^:%?8W&lt;,Ui.
cxreuE%Gx.XDC-G&gt;wP2DhJ`GN0r/oIV0oh?T#om,IpQFP~PJJM5&amp;Zcl`bQ''N
9u=Oq$jY@i}vuV8qZc=n{^KkGL#*/RfFP`/009gV`w~G5k;esXEJ{k$)sem\f
zMtqd=#(kIlA}&lt;&gt;~S$We_\Y`c%*mT[U#)b{Gp=9)0/&lt;`,j*()Ono7L0rv${!t
bKB4Hi9gZg;}M1u[S:s|R,v(EaEP^\^MFz_OQ}LXPySf8=(4L,b[H`75E2e8f
T;B)(4iKvjT"gswj%G{xTH-.l,./rfIO&gt;*Y&gt;eJSEz~B]@',rGdcLsPR&gt;T]E.&lt;
3{&gt;~&lt;]2oRI-vw`zz"O!&lt;I5&lt;*FCQOfHN"r\]C!aJF%ClvAJ84Y[x7WXQ%pMOBv
XNz"mFv&gt;(6+.o^N]%yR\p&gt;JMSZ[h#C\;Bc';aH%#&amp;aK'z%Rj0-`RGt6+`a&amp;%&lt;
7p^ph`*}+&lt;h:Dj'z4+eXG&gt;s)f'L$Z=x8a^of!zh|dB2gf@,cfPKd3hckS(]ba
!{aKjC3gK0ppq=:Dd,jmYukR1j113I}Yl|5m^V=2aO\GoIk2L+(Tw!?-/nhmp
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0" data-scanned="true"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 49.260345458984375%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5a080a31ee7154b19_1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 51.26034545898438%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">C*$$bzw)Z+u]m*\SP|@Iu_=Pra.R^rP\&gt;v7AWTujJ.ipd{z\@?&gt;$0$`xM9_tb
eIYKrsqbVL~{55#g7dr{'v2O"?s&lt;e/M4UXx5;.QNsk![&lt;u65s&gt;bf^!M"n:bXv
RbGdhhjfFt*qeh"C%`{-{IZJ&amp;up&gt;9.pA3(|Cx&amp;&lt;(wI.}tz5a.pG"X[mgo40'k
Mwz2m}E]6.5jTO-vWyZG'5xyY-+R;v3G3wvN6"}*Su~Wde=\:&lt;Xd@ge9?$e@/
7Q&gt;-&gt;uptN6$9?E@l$pXV6Q67Mx%38TQVtKa-R.vd+5T5{n,,;cEpf(=0hP&amp;|{
-0N&gt;``lW[A&amp;:#P7&lt;q%Vk1|iXsM/NhcQNXLsvE$DD,xr0vUb_?]es44lqS4|XY
!x(5J[QF$Z|Mbl/??HNS,A:oD9Z|q}pErZhJ2eDsLwfCB[C"jaQu/wLvtlU-!
x][jSXB6Cmf'B)yT'#oG$3ULh8|MTf&amp;3{2onPNc2ho&amp;1pl}Pf(4z/?-I7Qhk*
wm|"8e(w*P5uSC]ZD4*-{C*wq72,lBi%`y,;mQn9J=B-sjcKtdc&gt;.H(u~8&amp;3=
h$4&lt;7*O14wDnaz{%QVw{/rHQv`-,!9?D"0&lt;x2|o}}A?$H#dx|o}3h=M6x3eW&gt;
l|J9wF3&gt;-oWT;#}Ec'\p}yq}Oy3A[~k#wL-!F%7(8Dxv^/4A30t5o/"IzMj}#
^`|LB&lt;.hI*Y(+CVnn5LQ=(&lt;Tom`2BDKb&gt;D~53RD9)zC6Lm0q=B9n9[t(|B|Zh
9$\oDB_B?.i6Wz%H(O|&gt;Hegnz89OHz%$^|irq1f&gt;VcbTyx}l`m7q=8\enA=pu
Q&amp;o}@}&lt;s$-WK)iEmw9QiaF6^q~$cf=:r0{[a,oM~8}V\_l4oiWdTcyAo62g]4
:9De@9wtsu}+ipTv&amp;R(0.dz&gt;YUdlEr`^ZIS"u\h!Z&amp;;gHO@p!Cn4cts{&gt;vbR9
A&amp;H^\(\=h+x}cvt5LM)v%#rS[|(&lt;LSz{k$--|0Zt'\78c;pvQ.dxXAN(F)'+}
jY&gt;QOD\5ec[zrs1._Q]#A+8mYg7H{PkO\nwd&lt;[HQBW1{4P{&gt;,i(5&gt;5&amp;LLob$_
Gs(tz00j#RPs\@|^aBmdj:'^6&amp;9X"owQvKXp6_[s"sMC[I=hTq&lt;CmGCw\&lt;'q9
Ld:=$JtxH#Y_!6*:K\|~|to'+9D$LXNLkz]I?Uj`&amp;+P{IgCZ]h=h]1|OwDFJZ
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5c1e4919fd69672b8_3.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">]b"/_1cLS8@e0;S&amp;zLRzq4kZFktxt!@,rd+DQ.Nw7&amp;tLW|~NH0{:l}8$nSLG1
9QWg%l{*Z$2Yav*DCrv:~w})X%4?vJ=l})OOX0P|`@k!Y?Y"bJjYWcLzA6lE)
HW0qY+V$HcF#d&gt;bQ*{Z%yl=Gn;I\#-~Od".7OZY\s;\AyzY3",5F8-t"n]np0
;N"BOnSPq0MwVL!(,8$=w&amp;.Lf\e40PXBG&amp;fM\9q'lbWK"1.x+0"5$Ogcs7GZ3
M2X0ZMxk73?&gt;s)),!*6eD[b,xt{~QPK!'"[u^[zkl']l4B.|dP.&gt;5%kf:J5$3
3zM-}Pd0nGgmAWg3^/u7'f;4xpfbw)G|.um^I&lt;r\p2X3+C!Vuj){bwigz&lt;=En
SXc&amp;tDoVO~LnZQd"6~ycb$2Ki'@J*6XKM4DC0td9nxckGGEY5g=h@%vVg{DxW
L;@_JY|CXbii6zTq\K94`'~1k"Mq[uzT-im}&gt;~9O?Ghiska)A$$p6-+|+n$/+
)^=Ior+BueK!#$:\DUQ|]$f@HNc`p;xJ6~4Sbes#[1zMU(1l_q&gt;9NZQwf,p,|
7kCE*C+gf)}ob49QX~_3*!UJbMr$KMw&amp;tR3G|UF1"oTJM$:{sW+!|Fr&amp;w{-Z?
5NZ5|S8yMHM)6spBh3F'^nLGVFdiYq_[JB}Jz;;+`s#$=y[|pB+LElo}2I3PA
H!}]7x}J[tvsY:AvZ.Z&gt;azL'K)I/-o`jG4wc$utak7BP[VOu[:J*".9?c.b0r
Sb0JD+K!&gt;!]qi\glIgP5mC;+.kpLMTIgUV\T[!8e?14zG&amp;:?s#=NK.Jexr&gt;9\
;n{&gt;&amp;N_)FW;a$/5)Y_{z0&amp;+y^!.8D%!Fp,/r3mlNZx_zj|71sRuQ^-e^H[gx^
&gt;*yE.TUgr4nK/nJ*mh}6%oij|Iz)+BI7E&gt;D-@J8G2p9)~4Z!_a?wO'z\Kf~fF
[_nGUC"/gxA4x&gt;,AC4iWq(Y#`2[m|D6+1Tdcy;Tudso$!{/HiMKCOofs3y8=#
~\k=8R3VO+.!.$bV9{EaSu-~&gt;S8)rJM/vur[/eYH@0+t;^{`6M?[0qmS@/5x+
vXY8Do:vPfjM0K^LtJ+RCp+4So&lt;?hi@',k[&lt;YC60Wl=3-&lt;~x[MgX\n+\'+s{d
v/?75=G:TZXJM7Z#xjel&gt;Lq;j+(t&amp;*^p.OU)q1LPsSqxEO'Xqh6pG6V@3IR.Q
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5f6a5e232e7beb4be_2.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">Ae=R[xn~*[v6Gn[73QI.}kq('-J&gt;e8c@a{R;uSr{R~fYn0'[[![89NMei*v3Z
Qh:!@;ItP^!2k*V!;-(7{RRof8Vkb*m%+:-{o=r+Ch`zUiKFA|3.DuVM^Lo&amp;/
'%c)4.vXob50Ysd:4Kfu=Yoz:}m[g10NoE:?M`f&gt;G/5#81$!!1aS7*.OUdWid
=vcHiRUWDWlTUZ-2G~yVhV/qC$"Vz79jl~wi\uEbPMtA_W1N!5|1ik7o^|!1W
"p5wDUdi2n+vb#"O$\eji'dt[\d3ecPwRim/whr'(xbtHI[.V&lt;?Gef/s[)|m'
/zBk^1/XTiD7{}{Se'1&gt;*!2p_?,WUO"_4rO%t-Op_6R6',!#"a.WCyWI[AW|B
k*_#{/[Dp:HMW4)bBH1~1,J-|''~KCrV"-XK#`c+3&lt;#gl}uBp/@!Z*VtyvV\(
RT#zAZ2O|H3YpxhvIol^6b.~r:SigT@jk:V\K\#r?F;/Z{*_T@sqg-%r&lt;?a{'
`-;bA=~`V^${*&amp;a|8&gt;nqEwf9U\|W8kQ'TYS\q)=I"(V-j;L*\-HB2ar|nNZyc
hrg&gt;_/@do9d2IgigVY%0*l^:G,hza4x56-&amp;k6Ir'&gt;?RIKgCBEW.mOChyg~*V^
B"BiA~sH,h_zR6ywFFL7#UnRa!hMLsHj.J}@DLYW'lL#v%1MuY[3$&lt;wc-KMe4
LD``7&lt;jiSP_y^QD=5eNe#Jl%/|BH[pREE%?&amp;{83Jy&gt;,sreyQ:,VBChJN8ntQ|
8Q{&gt;m1vw"!AoO!M20z"97+a3o,88}qGKoNSiJ]_tQ5.K2H&amp;|7b~F&amp;AcdV;Hk:
4AoN3urj)"a2`ivcBcDfx6q&gt;JxtM7Wg4T_n).DcL)*v_TNBZtw:+Z(j}3!0(Z
B[c0&amp;+Dt5Wp?#J@h?\muk690j[Q9"xI)?q4Fey;kUc4Fq":D,y;63;7!}g]@g
+/g1Zq(K/'vF&amp;-@i\YQqd0(eXKWBXt{YOTqeVDv6:5vf]D':VSf@W~nprXHAl
jR}/i*"~M9?O?![HK*wzL'pOARIp#]YQ.{&gt;+{"xiRI7xoH`S_Z)BSSj-=bfeI
f4pfi%PGH)WS^%~vuW;Fd{1pZ=7&amp;L_*3h4(2Uh?&amp;hac#h)'Pwg2W+ab0J.`5d
:t1@]#_]1!%cpMpx;#8U^nXne{gR}SBLi7[@IE3dc-DDzy[_}=$b^,(=${R%x
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5bea2f1b07392d936_4.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">)BT#\sl&gt;8'[Sk(|p_uus|}}\"Q)lERxTv@QY043q"Uj[9+G&lt;F{qltjJ;&amp;'@m(
`q'Eaig=.AoIv&gt;__{A%EOF&lt;;kFK&gt;oz*xnH*xU@}whj:42GNz?s+c.NuRLx_P!
d~N'll~8pBs,x*G/Y\16#oLWlnES,*kL3II#$r@wA#Ml(*`[sHbLj8$A-\qFm
uh6,K)rI5(\xK&amp;W&amp;`G!vsnbaI7l@!%?:ZO9dE^"YiE|@zi\pSOg"I]_pf\yJ&amp;
`sExmpAL`w=P&lt;ZNFv4sEma!-wG^OFuf_a&amp;UziE\W21t$$:M0u"Sxil/D/Y^q&gt;
B&lt;E*'bB[$ZD,n(}Ma&amp;5xU,BeY_Gq%E"YJsTDaRX1Gpb#d&amp;y6+B)W$)H{y'=fr
tFpZ)Ot_{xv2_e,.:}:#~f,WdGm4vW!4&gt;zI':xY/BM:FjphKFnC4_AYTQjX&lt;,
;,},91_[#{&amp;bUm-X5Q$jwUpNad}yp8,kj\#y:ZnyBGL&lt;2iPa2=9`&amp;kHg&gt;8en2
NZRVC$?6]Q$$&amp;|(\]vvj?CL/"`wmt&gt;(]OjeoBNVn"\v78qc&gt;p:pP|6%ZGc%b,
g{&lt;%q8j5sCbqQ~I!]R}_#&gt;-;v_kf*6P05^w0^W2D?1Bsyob1ix0/Y_CHy6?q%
re3{X~?S?5Fl`woc*7z0I+F`$fpLE$$W}'b!^*Qe](m,#2bgI"Gu``b5)+M$#
F#S?B:2{g6*~t@ICimrI1lH?N`KEy$lA"")q8^2,Cydw(,LN|~MU\$^vrd[C:
_J3"v5(w!.Q^pE@&lt;'uO?g6+3oSsHx8OvUdz_LuGSBNoh:%x^IYPCaum!~96D=
F:(`Me1T4vYw=A;Azu(W?!~&lt;CI(0";vHR02}%3v"W%,F{k&amp;,#wST4fkh0oAN"
M/om,Ga&gt;&amp;t.hCs+-e-RCBM@f5@48|Bi38T~sD`1M2ku+vz|,\$fq@4n\mm"TS
$:Ns!AQMIeiPUAZcOHj3^RhI1WN@%5{FClYv^R_H\Y2mDJsx^`^~]yx'l]evQ
=_r`?v8Rdf}^bPSDHPykt/&gt;,q^&gt;%5)|Zoqh.jPi9x"y8ZhF+,&amp;E.@7lqlwi=1
ri+3{&gt;vO].,\pe[F(t{:j4:=asgL~8xg2TQs1hle.To,fd-%;`D\s1K]aS2_`
w?qbW_!U4iwdRUix/|&gt;phIJMN$M;z:6"s`n/36/(Hsz6{f*'&lt;n;?kt{DO|J#*
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b55e654d1341fb06f8_4.1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">%\)V::]rWp"/.{s/e'?j%Jw`6I%)J*M23O{gEzX66-`Z.n7FWklj~D&amp;Mg&lt;la|
,\"CVbZ6O|^(OZJT`j[zC8On46]Nt#jbqzEW`liX[`\B!b|zVb9-'bH9&gt;e\Y4
*=N$:egU%y"]m&lt;]\}%4lR&amp;*;VvIs9vBdct+*&lt;so}PE{1DvOQBlH|i&lt;xU/3w1~
X)U4\sCJ&lt;&lt;Pnb{u\y^WdP1h1JcE;^]ZD&lt;*R@hkZ}D`]7#8(6$-W]O#Y^[:Z~e
!hkY{b*;I@j(}&amp;??Z2';D"o8S&amp;(&lt;qe2E.2Pu=-D&gt;ax6Z6e{JBdo.WjZcnjbkY
q&lt;fFXPEeH@Z7&gt;I`yCA0.3TZXUQ|IREMA3;&amp;^m8my&lt;ZfB$yQ&gt;\&lt;0B|BK?+-F~0
GD'py73A7{{xcZH{-Mn8^8:c8pUwp['HhfuXXLa9Z"(Rs=2ir`~KNI&lt;Wg1YLB
y/t;r2|jUsdj&gt;TU|g_#4%U&gt;Q&lt;$dT%JO]|;@y~mT3&lt;u&lt;M_$/0xLNfWvnHY-u@#
-#HG]uD.6A2r*N?|E0hkB0.((@U2^V:~+}tW\o$t{]^}:Ach|GRo&gt;EE00r_~Y
+Le:+4R!d=+lR2~6]L+zC#+S*ZC-j4o8^DF27%1rx8tl&amp;'m3xs"M$deAp!zBO
mc2^/nM}ex7GXi,4MNina'2-JzYd6g6_hiku:wwTREW,y_DsV:5f&lt;6MZFZ\&lt;w
&gt;yn2EqdX_h[u~\"EHxk`1RQ25,}jvxhyT@wSumsjZ'?b-[ZZELU_&amp;R6Q=1q/j
W}s#N@&gt;0#0u}SHRhL.~..)5I`N&amp;+Mvn&lt;M=-8g;xlPk'T0vudq-;[^HjS@YSym
CPJ#A}r&lt;0r0G*,ph"h==(z$rz9[+27r+K}:="VV2JzMH81!uM6m:.OtNuOXd,
gw/@U?lxMZKqIQ=K^"|h`9!Eio?i{AKNu'o{zs,+b[iIu:VT7WVxBbp5&lt;i^5o
u)2\2Zn2%i9#W&gt;.xy,6Pry=q6qFCS"'m/E:ZYjX\ls)4\S;|f1d].ICh%o@n2
9#+tP:w&amp;y,QRGB1+C0&gt;EJT:@=7(+)ohi]5Ylg%-(O&gt;/"If&lt;5`]JJx&gt;HM?/Qy&amp;
LEjrj~hkEug"2QsSqj87IY(ODKI1UqHYf@K'S+V80%&amp;Z9e8Elm+Xh1G9i0=&lt;;
y:&amp;2gZ7crGv$hJ^/b%n@696_3]mx:w%g;G&gt;K:'Or89yu0\f&gt;MU[&amp;m3`Fp-B1=
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5a080a31ee7154b19_1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">&amp;FgK3[TpCD;}|[],WcqlP%J!A8MGaay8Z[cs""d2$~ibE=OhX':4(!/rq9TN_
VyQs`FO+bSyfF'btGiW-Mxa;]7Xfj2[]l{JQcT2.x7vA"hr+CA$kUUWBF[#p/
v&gt;b4&gt;*xC8nmpy_(BpJLb+Bh*c/FP_&amp;1W}KU1.W@}/g\|k-aT{Y?{%$dEU'"}Z
`@^^%W*~CGB&lt;{fX?!b19Ewt`?*p%\(Wi/!yk+&amp;?Z{NILv4d@G&lt;RHP1r7Z0g2m
pQ'Q7;q*xH)0D-":fPC9U(e_s[CGghQ:r:)zmHIj_*p[#yw*`'NU&gt;*q7r*&amp;0Q
s({^})*O'}URU6P?+!{7W3y846vXqLvRb_,b9O7k1}0~zg9wi3srS6\rX+=}z
P&gt;J@dat[JD7L83o}p#MQF5q,gHZ,F2cd.PYsD=!o9%}b!I{%'Ce-*/sf=[({[
HBjnEE*`g&lt;tUG6pQt1Ujp3_Jw`=,IKR4&lt;^:HG-Rzz*X+8UFVfk|xCg}LaC_:k
?fe8/|;l|x5@(HQZvHW~pytZvS1y'I3+*F.yRQ:Q0#K0tOB\5R-5TmVm'0}/g
[x7]M`8/P|f$%;zh+{2e&lt;1Qn,o//PF-Kt`}b0!;#/c,O'NLs]Y&lt;5;=bueAc!j
?F]-J}oy;m!M(,JC(GcQ3eu/W'Vs(aDM?HB':y~`y*p&amp;pNU=I|_vZNl2]KMtI
Byh~j\&amp;HX/[e&gt;](Yfc#8gvr+94QwRW}6+]G:$Qn!m2(z35t7;{aFF2E(%\&lt;2_
8[n5jxRa=zr|D-kj&gt;#^Zv5K{44"tLZ(M40B+ogid2ohXrJG&gt;j&amp;oz#8sr[%C2r
z+@~&lt;Z22-4^lx"]3m..w30q]MFNK=NzhJNd,t.PI]SQRBM-]&lt;xw!FH`#8qw4}
h\N[IqF&amp;e:ut@&gt;f_p&amp;IW|W7t:+=yxu#DY'L4iku/8&gt;4bIW6\&lt;-(RO6&amp;=k;F06
Nw+0&lt;,*2\Rc2wianKo;e6j!Tb:7|LM=7-Tm~OMioN_5trZq589@,lsYcq;TQT
D[1g9{B3)V8O_j#KrBTNLzs!Xg@wFcz.s1"JTK)G-?@r{""E6bNy5j\FYs9'v
.aqpDLbylJJAK.$&gt;&gt;Npv7QQ($:ZiXi-3QD3[.IT&lt;o};OFQo@m!99PbOlp&amp;0tS
@xIf&amp;#"ezPF#kDwaUVvjv6o&gt;b&amp;z2=!Kq]i,AqlbjnuF]Bi~`sb$b&amp;3-1jM|hX
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5c1e4919fd69672b8_3.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">7zcj`]_z1\q]Ph1H'*M&lt;*R'a3o#j\i]e`AXt00z336mxk+q!B%Y2JaU1h2tdH
q~J&gt;]hM6!grSW^gem*59t;$\x\UIQ/Xbr]Wzxl;f+JE&amp;4"%d[s;fYrQ0,4Dh7
vm81I|lK\l&amp;{8s5)O+?:dkCQ|:q#cxL15*mF3W=&lt;KQr_I'ok^nG(}.3VWI;\5
OJe8f2Q]XUoiDv`krA/1B)kBVXj&lt;3eXg[JmIK4-c#9&amp;!a#@bZ'R'E&amp;C&amp;.{;~_
(c;Be[g0U|ZMJ4)|`_^_1'8V`}7&amp;cT&lt;MmaykjKM@g0Ldt.V3J=wGW45Sy9'/^
\Vqwg$Mlfr|zU.|}JU`jEgX`8:1E8[grI5SP&gt;jQz1-Ye/.]dEW$gb7%M]i*|k
LcR:jK]`F8*Jd!UtTY@JEpVQv%D_Ft{73;}`8ak6j&lt;UR8td#&lt;P^ijS'kuYLuT
!5~#D4*fm0wMfvxFhQ@s=K7iE[;&amp;]&lt;k]z&amp;&amp;K&amp;'ILNd8]&gt;]FD2wt]r$waq3d@T
3&gt;S!8L5qQX'qJn_/YSjPzfEcN:\J92%r"[9t|Jm?9aK?BWK`EX1yma^4kjrxV
k8&amp;N%c9aCm{5pg&gt;&amp;x'=f|dGbYSJ|HLjld&gt;5y}fU{^V-ca{'@KeJ/Gc4D`+Zk!
c=#4a*Bga&lt;~_UdD|`7n1z6`j;&lt;A{t3mbW6l!r,BU\b{Ry,20e9;_KyYoxGId#
TtauR!J]?T=q5I%`=y/\gJ$.O3*n&lt;p^O-FA=P;TW8XA0YyHyug@_FC^7lI15M
0lj$fj&amp;k!eK).[KZu:yG{m$FxR+}="y}jyH&gt;9N|\|QFYAvFj72q]8Oc=#/pxB
2~?q2t801fxuJ{|B5b&amp;9W2$WySCLbH=S0Lwo?H9L}.~zsx$\0Y'4i.@(BOhr]
hYN[FW~\Y-&gt;&gt;ooGqsS[8}NL~6Ad3:9o0imbRL&gt;ql:6i2u\lUW4N^b&lt;26P7GW1
FXMpn2NQ8LUn3@4sIj#kvS6&gt;TDc#3b6a?\g^mu:L]}obO~!freUe|62Hb1NxF
FGcP;fH*w?/Y%QP'M-o}Q*m8j~!22&lt;iG;&gt;Y!C~A@y).jc]d\89O:kMD]{#_3c
X'8UdI$~8&lt;\-8;}3zrFuz+JJ1!56$kd&amp;z8;9@j;{r$7VI0q3F$(f=,*9;T\z5
)/'IKc/-F9UUr4G7hXouhiv"jU8$o`%P7S9M:Dm82fAc&amp;J?yN_c#&lt;c@kpO-Oy
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5f6a5e232e7beb4be_2.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">n[Hn@a3A/L'B^&amp;dwqwJ{?$mI8&gt;HNxjIZk?4Wz^"!dxCh&gt;n|VXNpCi~2-gFf_O
4VpZ&amp;),8_Ru;-@QT/;*R*r^mFPg28b-~j&amp;[3,mDCWB(T8/Thms-Xwp@GVXc"Y
(zcOOv[&lt;&amp;j'&amp;llm41rF6jRGyt,&lt;Bk/M@$Xm!;p+};&amp;%i{?gXVJgk3g!jpZ$w+
qN[e;sK&lt;I8}E},BW[MYboh;5/-X@tk=}Q=qvjcWkAHl\rs/,r]*o}2D3:2E8F
Fg6OK(~8Hf:7Q71@9J*}7U',_1j221)z@Xg_:HA5~gIS|&gt;)]WcqXqODI~$]kh
s{fBf==`Y4&lt;^E&lt;[$Y"(*1&gt;f/7vHPtTs&lt;_B,#7aZwAyKJJb0Thb?*G^b)}cAo{
R.2*MX=B-.myGvTBPybb)44R#E6$B?ir]n7.{'Gb+Ugju'AC3a^8WxK]b8ZuH
H2%e%y2Q$U3Rk]gy0jWJrlDAP]kYI^9.n&lt;]u!2UK2&gt;^Pw%3q\P!!08*grwGTT
h-&lt;zVJ/%^|{FCvk3,RrQ/Hn!KXO_N,eT}lK&lt;7rYL$!a=aK+%9}R/OmD@x{!!;
N2G=}7h$E3#{_;pO]ompKgGHc~ikZG=&gt;7B8oCUF:I7a{&gt;=~SF1kRc/qbyP~:K
Qo#fAtDY&lt;PMSvP00BK=X&amp;uqt{YvIT&gt;Nk6t*tWl?Zko65v&amp;fl?{VY$c2dQSZh,
/Sig_o&gt;HS^N7@#2QrRW9^,4#rigqx`sR#V"*Q=Dj{Z)(D+1n6s{md|MD^J[id
+n$BU=skF)`6zyQuHONboMk/hN12U_sTpA:`Mo@o=0xX\F+h7be+~"SuN~)7b
%.?hA~\V,PVZ'=]~uTJ/?W$^,|THDiO#-hz5Mpits/8UU*ZTM-B*Do,Tne%X-
y6Y}Dla7#8g"FIKWD#CZ|}znZKX~?kJ,d1y8{"HN'V[Or?19i8X]V&gt;=StNz`-
~&amp;HvWiJ7'8'{0;dN71x6G@P:a}4;&lt;ZJx[bqvV-UZS~JeWw.t+}btJuD#-LR=f
MWA)a`Ld1zFvZiQJ4$F_cuU*R_Mhy$T`gbI[ps2J*tV4`$P-ZE;Soeg;yk5~V
Q]-&gt;y=m:|jM|UYAHzc$t}v`RAVPO=l&lt;/b7PPZ-tK}06^iMho~g/x+OP{nQKU\
&lt;{kJa{fgU(82FeQI+$}B6az6-x"zpSttAIFx9tOJ2mS`h,OM4|vtL]L]0Hs&lt;=
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5bea2f1b07392d936_4.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">FXB:C&lt;c#nK/%Rvf1;cmL\Bps-S?&lt;6ipJ8'd=el_^s&lt;fK5zVPD.ilWKrB(&lt;*/F
V=|&lt;~/UUFlXR%K2tnzsh)XidK)a|?6d8-4X3imVUdr,wp$6,Y|X[d(Z%B&amp;|.@
A%PThV8m{}3eYX*[#C8^QAJ((9fh{`ur0fdp#](}WpbCI1Am)geeW@xZ1Efu}
hvhieo}=F9$X/GXi%+1KqI[ugfgyc;;?}4Sw&amp;DY/WXXlg$&amp;58kvos16}I{5T.
`?%WBu!@!l9&amp;bI&amp;0s/7gAhVgG7uO"E3UaWXstz9r]BTg0v3CG/%wr3n]-Mf5*
/;0u,:"Z)DP4\?2X\Je(A\*c`oKWGGw$49U~}{[^"&lt;xcOz1\yNSV|o/peY7(t
puH#F]HjC[;_EW%R?'#xUY~`M!]U}Dze?qjWwaB/G(z8KA"Cgc""YLDlt8R[I
r(~o;gp`%r8Y2=U!%-w!0myMqWFW6%P#QwU(Ka4F0`O[96o\&amp;c4Ul&lt;&gt;r_74mw
[&gt;V}5I]\'&amp;=i`U!Lt3;o1n:6/w&lt;"jTq`U(D5j[]jtgMf{$?9g^y^b7A3sVtDt
vdgURS:-KFf4FfbeyH`(liTFoK/kdQ7[[P?(bov=4Z&amp;F@&lt;1)H0F-'.^i7v%(D
BX^&lt;p$1NhqNBOV:nQ&lt;iOsB+2ko%6Y,YKfiK'uZWuYE,W^rYCodnAS\c,B'ue|
5&amp;^7KV"]3%*PJl:a:[G@2kL3&amp;RoRS,HAfNw+U(^Ywdd|?jS}l&lt;n/73.&gt;b1AT+
)c0*[g5=@,%SUjO(ItDni'Fi?1k_\I3W$^ZyY%ScI7.#Tpsjt,3m&gt;8#]L#@uA
:\qJ6vzcA[VnMB]ea_2;J#%Zag^R8+iIOaa&lt;O\;n1{{Zq6Y$_&amp;%CVmW}%%BG%
;5)2mEPNVrGCxe7~Yc@h^zRxZ&lt;v|r16o9XifNL?Z='sV+H%mDeWgBV4dR-~:=
\avp4.xflB=ZTrWD=Bm6ZhG-+#ofnR7l[g75OJ8by]Pae{#2av[9JW)]U9**g
M"xGbM!;]a0Qj:URh2`gC\G1(q@5KG&lt;5UUli7&gt;E0*f+5s*{yP$Y&gt;~_7/p&gt;3d}
_&lt;c2mSZ8gU,K-GXcCKLjKF[T{7#?;]i1To}G=-OU/`qG|'onQ7B?s++1W&gt;c57
8:&gt;!|I63f$w]|`:ZQjr/eQ]Ru,F;F3^}\Q9uog{b=vMd\8oYILUrG&lt;&lt;7%7{\/
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b55e654d1341fb06f8_4.1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">G}v#hP9%ii3)JmC{wf~^i7FdB=2eXf5l#@i)qh70D'AL$_77EGJ_}8.9]JPTO
yn-$areq=L**e1v1520C@gt2-C-c23=Ra'OfK?B\Y\9|&amp;M0LFj`"kAGc)vzD]
'j4A\CG!&amp;Qoor;VvSb3}$&gt;.KGS-BXey*aYb}*G/"h}6YkfT6AZ[BB4+'yuAn#
7GD&amp;Xr/Uqh9CNLbmKU8}&gt;^rx.Zx?y}f]fF2z4wB,f&lt;s&amp;~bLOx-Xc761rCU![I
[s*^E*mt,o,2L)Uu77?NvmG_3}9wysKkjgX2ED52)PwK$ZPOl/oQ2A54:4y*[
k&gt;B&gt;7)kqitc+E{P}NB:&amp;WlT)'uVzy,-n3vWM6s$x:QuM1ERD/kHRY2&amp;ytw9q6
2y(&gt;;BboY}vc/AeDSwX2rh[`K9|.Un11h%a!-l0nFq8rvSZ9?.e2|*$&gt;Z.IYS
[jvS$zddK^&amp;DLW),qo{:~$|Ncp6!WKHe^!)[hT)_;&amp;xaPgy|u&lt;5\t{U);]"Q1
NC)+{i$.vxW`PqVx\HG"C[V&amp;NFTR#[q*g6{BK^!:j`wBZjNn@AQ|2@A9rX/rE
N.]nIz1sAY'&lt;/E&amp;d#eC1+wtTG5@jA.kur#I:BNc&gt;ib'&gt;&gt;wQzMpS6n11d&lt;@?D[
Em*jUR*ZqLY:E~&lt;^&lt;sB*7(H='#LB2]Q5$GZd&gt;+tx{tK?5.3\u7+q,_"&gt;ja:Pd
o0]kN#oTOdu1&gt;"Tn4:4I=|BnJzBIIa&amp;?:l4'HrSnjz{Jb^3.AbiD+&lt;29,LSxS
Z|?6L?d_;l;6Fg_l7qG&lt;oo6MYUuo)fu|hao+t]R&amp;TrUuY?H9@OW`ab[Reh"P_
,g4ZF#o])D)467b*IjM"aOTEU-IcX#Yz4;g1=M8#n8/Wze3-R&lt;#m:&amp;&lt;?.3Nvs
xpxCT*`%-D&amp;ml_jRozcVP"r0wzw[[0Do.3%&lt;:w&lt;klf}|V\^omxwI3Cr]&lt;4Vxs
'\\_&gt;X4NNy0t5Us3'(2G@HHz|4~.cU)\9Q`)3Wt=[RUaqQUw^upPac&amp;ho|P;,
hCnlJ&gt;5RGfggZP&lt;8*rxy/U\t:T!Z/e=k&amp;Lxu3=Vueyl=5JcK)_")&lt;s:*VNMxo
_WWis#ODoYm&gt;4XrJ*Q&gt;6D`9}CEFqWex4&amp;W__S$8(m@piP2'TQP8Ae_O2n;gKu
QKk*nx-t:j(O1M`kq%S;Mcj+T1N]gS\[.cF'4kiS}:L\+7^k~%"}1q5$U_7.y
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5a080a31ee7154b19_1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">_ij8c-ea?KR4^&lt;pCPaK**BpJ2)`1Fl8o&gt;NCA&gt;ZBqz/&amp;bFT&gt;mdQ&lt;(%T\BZ'\Gm
"?&lt;{IGkdVY3m=vC=Q1]T@tfpxl!p&gt;-)VWdO^)xe\D}2T#dMS9mR0'QW@u@k4$
in6gSG.}&lt;&amp;!y3k|$`Z:Rk)pU[Pwi2\sh[Z)&lt;js[;O#Yp1{iX&amp;d(PKf8Cr&lt;c*]
$N"}w]FCyO_3F+tLF$j}n,gbxMSsSo$2TZ:;jy8sn$9L-oO&amp;!!&gt;^9@@+)weU&gt;
Vpcvo#+qN.QS9=aA0FxX1{\H(Z?C-KZ[%zJem[RH(`NcwO!H&amp;vBjRo"]l2\4B
V.&lt;N|4P}2k&gt;yLY8D^+fof)Aeq7/@1oMFQH2@}|&lt;._+IpF@kkK*!.*/nhR}YzH
AHQ=sc!Y;$yN1*T[79nf&amp;v;cg]0"Qw?&amp;6&lt;,Ucx3l|Nkk0*j%kmQd4?PpcA#Y9
HRB_)m5N;od(bW5/r{CVHU,5G3)ij*AYbn"5A#A43+F7/~e|{UMaP&gt;{kIacO*
r'R&gt;TYPEJhh&amp;}P:zbWEH/Ro"*KFe^:q}`(VAUT!4,1bhs6#_&lt;%1@/?OFSP}pJ
&amp;uj;K5FQ_~&lt;qZS&amp;r3JbO&gt;I(&gt;BI`O4v}2vnlbGTJ9Q}Y;&lt;k&amp;-RX1MwC^PB9R&lt;o
~&amp;U\(3TUm)44&amp;?;*42tda2q"\:yA"'WyL~!BO+XeQ7JulmK&gt;AUJ&amp;{h6$L4i*O
Lv;}:dIB?x'[4Ea|;;iW#?h2)sDW_45X6aTg?ikr(#(6@A&gt;0FvT6\+un}t}"=
G;0}UMfogP4vaKgz:4vnc3&amp;mm:n\7WnP`dRnVT:\GDW'Px?kxHtNEt&lt;MeoAdJ
l}|2{WcXKcq\]Q3T$d)0Br+K:8CmbbcepJMxz4sqP[8hq\X*xARk*(KA,Urvg
)z8E\.^]tBxY&gt;xblYd7O`ALk%FGopxrr;3%q9TmX1tC~7=dWz`\:yx.rMY}{E
&lt;W7t%.,{dVGUBsL&amp;/WeQiF%0j%?~c%fg:?N+1`[Y&gt;H$,.:&lt;}{&lt;.QrznbO,DW`
*$.yJf~d[YE@|8`P@=)^8mP)w0yy5YkLM7QoN'E=)Is(v:*F.bd9iD%O)iUga
"&gt;R5vM:!I#`P\O+u(uNl9)O=Hd{(N_4=0\-PRK}p?UdJ:{&lt;;Qu|33@@@VLXI3
)PRN[w/%%T/pFEOv%7=ZLk*;.%w)_s+%WBsA6dy.0,mSF|M_^aN;sC.C^/@{=
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5c1e4919fd69672b8_3.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">-mt[CMZ+J0p;&gt;Ysp(61F6+6J!Fp:2czfWV&amp;:'Mwf/J_kS:Dq2gYukX|5(7P1-
hlxl^0AFcCTwI,fF*hrv|oVelr]&lt;X(Z2rg!}!)%%@pl3QcgZ&gt;^{NokSbRXU$/
dY{!2#-dEu3[u]D^bo}fZ&amp;9T/bD?3d|GFT\Mwe'!~o_j*fMGq&amp;Fs`'A}@f!Mh
g-TV%i9B1PdIV5?N;&amp;)_wS.&gt;"Q;f[R$#W!(ACLq2vd_l,u[SZ}K`ZAAvl]sz+
8/rfxNEVjcO!Dj#8,X5ZNA)NSNkx)Ea`nQr"_9#h/1&gt;p~*#PZCi&lt;gM!&gt;[s(IP
OJsT9z3Y[_@0;dKL[n@xJ[Mz-^:,9oTclx\%&lt;M&amp;C2crrC;iV7kQ6swtM18]9c
3\io$|@S(L#V~}36/c9N@3l`9`rccc=!j?sO;_x-37cvUz_!)}|IV(}w\cr&amp;[
2b~@PN+&amp;~w&gt;\3$p=8RQH|w2~lWv*NGc-MOFoiLY~"lUh1tu)gCwQgUzSkQ^*(
TEV*&amp;haJY_ogNW4.w16?wO\N+XlCQ363NO/[uhx&gt;&amp;O+,.:K2oh|+mE$Mc0,{Q
c9FX?=PY~u%yG7'6&gt;7qf]lB#`@Dmw$uJ~W5GSaHb-J!mF8m94#dX&amp;?KF|8C\x
kuf/)G73lzG{SJpsNkK[Q^d|AjcPK'z.N3LVI=8.nH["r*e5S{54GKokpEgtR
#]5S';R&lt;C&amp;I"/^jRNfRtdfPV*4@X[[['mzqYNd|sv,@*"1oKkCH,#5\706*JA
]FRKqqV^]aULMH#C2*LHJIAf0mThC6N=k7@$/~75:9s`ABF4N:^Hqv)+6|oO0
~1/fn}LmfL+I)y?iYD3uz~9kSaceVX'k[3(wx[+"4NBv\rQ'"3k*Q=nnz]-o&lt;
Us.6=D)s69I[iVn1XH{i?.aM5FpQ|/j`ef&lt;7QG4&lt;|%A[S,;\&amp;bv2~2UeMDjmN
~MGhh?-f_.KgkcJs!Ahs$^oEXnI#\Ota#WkMZ!"Fr6tr6Ql7^_}&lt;\jj)}d54$
27vbj65~2I(r3gSSm;Xq'Xk\4r#oFC9fyigrmaJby+KpJdjSIrz-Mvmod:T*;
Bth/%6{sxAwM%BG~m&amp;/=^c8Z&amp;bj:5]TFQo0Nv{E^+$zMcEnkFdT#pA`b&lt;S`?H
}lLsRwHlrTc]8U0gFYb9=5cEj@S#t]\seMo^s2b!M$6_5o3Wyj=SRMf'n}8XI
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5f6a5e232e7beb4be_2.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">:3&lt;ZM:1!Au?QU*#nuz~we6LE[8gny0z%eWOP`UyPG[I|"9y^'-]PPlG44=e{)
?Jqm5~2T~k(5Nj("cMqfX0dVh=V=qcV|j$A#mD=0`f17*g&lt;fHXae]vZ%=j$j?
!p'D\il]?E8JE6&gt;ihE2GKA3q~F=F!ya[IMR{E%zC`bYbgf0#H|hv}3m()7&gt;aP
Wpu}~|{[q#;y4~nR3&lt;VrOm@9ziS}6tlk-H&lt;"yn_OMXuxi:k?5n!ID*&amp;-~WCoM
L}^lzIoR;Qlcv*cdwsRxtgK=,)NfZ8qC#p~%s;i|6|z4j2XO9=a)MCPMsT|iO
hMJ?B}{NK$H/Yui-)^p,riPG4\xm\?P`9|qC?I4942)mX[5AE%Mv_]Aq\J4=c
KG8V$MS#rscGn0UC*[jd=W)Oxc1uhH;wP!k|ZN`s&lt;R3|bS~DLT(Zf9wq\#lax
RvW!VF`Q+j_E)9n?zjg\ZLK3xyfktQhCGw?k:!Dc=VXk]EM/nOWh##DyM/BV]
_p3^Z*P\Akdl'mV&amp;f=`7Ao(!-x!$x[h2pzgk4B3]7^@75K_%{9NKoIyS&amp;vSS:
gW1(=_S{9N\&lt;&amp;:@YX&amp;J^ojV}W+Y@;g!ZDLU&gt;:V2qMr7bATR-j1&amp;fM._@C3x|l
s&amp;QRb6.004Du}zB7*.nL|*oiC0hAS2M5j^no60Zo,;D%y'JW5U}xTpOWT?7nc
ucWpkT8gA^R3J11g!DW*Y}^\(vBzoEDY8mrem{z}&gt;.rv!N?]:],j}J6$j0$Ir
Cvt:h~](\pd0Ye&amp;2[0$5$~=@{4Ru}&amp;E{4TzRJS}?3Qu.B^@b13([h}qur56Yu
:dkU.q6MWOr&amp;Sw{d},.]hDBNlE`@iU5[1NJ&lt;6FMsC"D8{;;g^,XyB14&lt;aYk(!
un^;CrI%)w=&gt;|O%$ZzWhO/fWh+-\z+'/sntHT0ac^],Fb%+]\qo5i]GwO;tzf
*w?DKrT-9%AQm7WJumT+B}P"nTnH&gt;jmN|"#&amp;_QChf!{vbK55$O,*(B/rN52ut
=IEfc$Erk}rFi-K}P'6k-R1M#9b4/wJW;H(v^-Ua)xGR@QRe2A~eG39.Bv2}K
47f@|}XB#`*A]Y9H`#|Qv#218JqXNw:\h`Pv~VaKzR!tqRwv{wDxzh0e~l^8v
:W|&lt;1`##}g;f&gt;f#4T&lt;7VH6QgoVg.9)"zQm3?H&lt;Jq}`.llCK\Yu.xMH(~;L_Oh
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5bea2f1b07392d936_4.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">#[*X?CWFmZHW40JM0+OxlTzcC#Gf}5_+';8@.eE:y)Y[I"U6lz26"sh+9Ec!h
9bH$.]C1n=p@J&amp;E%.!]#lJ"r%v]l"wgV&gt;EpN"rI&gt;J/qH{=Q~X'U`[5gnNaKof
dG&gt;-:?l4~)`-BT!Rs05~Qt5IYNpO'@mCN#@ChG+%/l9mad]Vq&amp;rZ7_2Fvz5|r
2Y6xX4R~.*O$15{vW'&amp;:DN\RTina\b$_5rQTNF'&amp;yabX04yc\sn6FfL$4H+GH
cUkoOjfHU}O:@^`8pX'Ssna2+5U5X{vKS4/8Lm-c_AW.0SWh@)DIT5Ss^*,cX
74bafWor1"[,/1`f08/aP_!9u6gH_YN0JZB/bYp['Ef6ik;QFTUzjB_Ho1eCQ
oWLG@VeQ9R]JY8[4cWB82*C8d~^gf7F.?QQe''$zwR|')j\)&lt;%&amp;J)UQf0{AkN
&gt;^(fzqy'M*Ju(lWgw/fEj"9MyC3BV+~@`(KcAn^dC.::}o)X.y)=10&amp;@/3T~[
n"*p~(2aRpYBP^3G)Qp[0f6+U&gt;e{Za:]vY{Mt6&gt;T_#zu9nZ{~&amp;leBi2LGg-f\
o%CF-m[ATFb3VXc\deSF?voV^&gt;+SH?V58$(&amp;n~LTl^fG&lt;=k4v^GAA&lt;MJ-g+IA
K5OK?O5w@Tv?V*{D[OgT[&gt;vI?|xfOt,TO+i2sdQ(kAo[6e},rc;Dm@(s[HqFT
%klP*-%+ai*yHmWx%~JqfN+;b)e!/'cC`6+^W$jeW?O@')u~,W/JGuf@&gt;NuzB
s%"BJZK5Eu&amp;7T)NEa:LjTlA)tFHYezIMJpfa3A&lt;Y]zG7!ahIM|].^hY'I.9CV
AY+[o[TT?f*r'?H3jV6A8K7*K*@6V%-,OaDa,,YR`)Ws]E-J(!'KR4^Q7;~~L
~&gt;|J7Zc#[Sy#r*6m:l_iIjXM_*cCOhPQeG\V9heXrt\`=5Xp|-c+oSFb_6Dsn
IozPN#?wiA`lp}L%}d4I~F"3(8:3f4omP7Nf`df:2_br41x&lt;kWLO.vAL@pn_P
^#WraH&amp;&gt;T/kVG#i=J&lt;yD2!|rI?rgMg6zp`xOzb\U#H&gt;TWue$odb@U'\X3Vb?i
,Ld1y~y'&amp;]#g?@,`md:h:AY}fT-6F9?$bf^Hr.3rG)A&gt;.YElXH)WLsc(G)Vd$
.!VWO00&gt;caq,^V:4NXEVf'`NmO'J8_inD/?X[2H}yI})Yx(xDn*|1e`f#}@W6
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b55e654d1341fb06f8_4.1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">=$\sN;&gt;EC8}3#tzX;|]nthKQfp*UZKy;~kL4&gt;j,}C67&lt;e1q)p\)7nL8UBm;TN
)9TON2B*1eE_po})l':=MzcsN`RQ;9PI&lt;'d\s/['LChCO_7G&lt;[/^;z0Ng^ub/
crbb9#!V"BR)T3a7O6,K]e-kNE+I@&lt;cZh`cYJdNuAg$Omud$D.&amp;NLCs5"S/4a
O.qy+v.naTH@T]Xg1?-qkDV'q8j@5VS,Vr*egiX7-e\U/Oz-j2q34cK|%$W"E
ov/xL\0K`y58XbaIO8vkzY`xZ-~_v6xbzEClXfJ2slK3-N[*{y9l,q_pg;=O,
-W1M7?qN-00Gdh*y4]s=\nMRxo(eNJYNoV+2'{7!eO{HV&amp;j[[.i'4xhau}^s1
qdo=|,N]!F'CNo{.R&lt;WF_tT&lt;Yi1BzYvg#,_HEf&gt;rGD&amp;8-;7e}['W;#BdyWA~Y
~j|!Dq}aPyw(n&amp;;PzH!EkWF#Fu^kSh[DR~UJjPn5[P-EG(W*Ig1yv=1#m-QXQ
2svl@{S6BepL9N"?J1aFG3\mj]*)[Wwxvx~6:'|N"j*Y53&amp;?T3;}!59u9kC'{
3;anD|$oyAv51;G;moY#n'!&gt;&gt;p*K##G6?z3vZOeNHx@@]|eu0N^/AS6GYd{82
=_lxx~_&lt;YWqSEp6.Z4U?gRF8+&amp;e*aU+"k+bN6Eaah\?5EF(&lt;zd?}R}^6RtK*x
w\'Q15F.!VCULeV;?{!%@"Vb-x2N~4_j/%bm^K-e'U9x~blbT/R$3bw#4W]OJ
U6l&amp;&gt;HbF(P\$X'n8%bY#~1iV^^-_Sd|'5m}sa7w9~dVH~!^&amp;fWq9Cp,NfrEL\
u#i-euo=(eQ_Q^NE1`(l%pag{T&gt;:b=)bB!&amp;|pD.6c$Ngd}=**'&amp;#rIJ~|7p+N
6&lt;jj&amp;&amp;M_E_hkuj&gt;*+#h/w,0*mauA{[I5B&amp;Skicr|7$%,op6:U1u~E=:/ao?^m
Y!%ux'y^u@,2A8z?{BPP9+Q,AX2TqP~#+}_0xGp9Gl(bPtU-/3'`hG\)`D'_B
SxvxK.8UZwrR9&lt;^Y3IU`t?GeF]T&lt;l8d"5'bbH$K4_re`ZMn)wh*7@n&amp;98T");
ak!z-oNqDdN\&lt;Rw5bzQI](9)&lt;jl1`qVbl=IQq!V!flnDh{WqTPIhS(\DV:e3B
dWGzW"Y9!UE#3dB;NANdlGf-[S"zU5zqcvvl*`Vd}}1;/QXeZ`H#ZBn6{&amp;u'B
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5a080a31ee7154b19_1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">~ue?F?[s2?7f3N`9Y.W0#Czl7#n2y+tzxbhCEo0|@laT0:F]^o`seJ:JN44&amp;}
y+&lt;hMDvD9utF9msh$o,&gt;HWq{6+0,wG0l/"_gN~vY7~Djk7Xq~Zl'c}[Wy,1VK
EiazY&amp;}_bpb^/^Q^!N^N6T{!D0di*NG7&gt;E0y?NQ#/t]vkhE_74yQ6$O1G&amp;1+y
JpO@qdR3'^q3Hc.l*1"'f?6~&lt;;&amp;1uieL|hmi`\gV]!u-fjyeK?1't`j~^]@vi
m1i9^SL=w}qD8RF@pz1/2qG?c~TJMbC6N|c&gt;4ms;_5e)w-,]AD`62-]h]@HXR
rTW{9-!^O7R\K#yap*%|OH6.M)4uEd&gt;P7'-Eo@^"a;j1!tFMcTl.scS6aWn.i
fr9_G%]n*f\)-xdqx$W2Y8'"*8JSmZW'Rcreh:AP!z}$w!UPAG:\bI{*nW5fs
`&gt;,FDM.3qzm)skHl6(A!-~|,aOtLF@|}@yqcnV:gc%Gb;i1jJ_Lz%fKjYP]O7
[Kd&gt;-3BZ/41Ck+SG2Qml8vKFBW[FRhz&lt;sEVExC1OI$nFe2}IVgI%P55@3-}P5
~\\,?#h_fdlTJSs(Z7R$%oE5xh?(7nj&amp;t{,(&lt;}}yjZw|)G\RP9\?9Yi-!G&lt;vt
&lt;m?]DgR=bI/_)PlP;E&amp;y$;.5i&amp;fy.0^[wb!hcW\6]Q&lt;=D~T"g8^]Hg![@f=8Q
0H6W(*9z\]bL0a~^D![ym^o+AXNw=SPAM[U,r3xjFI%E*fm!|c!q:/XZBx$Y"
]z@5Icycw1OE.r@/Ree]j~^kR5Vv(XlBG%{96WAKDXcZWtQ.OH,gYFi&amp;ehf(W
+-"EGia%D&lt;c&amp;~n&amp;m^NnHUyQQ)~B+g%RjjH^gBIv;&gt;o\QU{dJJd`XwX`Cs2#z0
6.i!-6xk~y-W*r_Dkuh|yf4!.Mef;Py4EM(4C[sgWm5l~yu0^M`8zgODG|9)A
;."l;j|gNJ=zKH`mXENO4s'rSz6V*]C^Mv+WMS6T@&amp;R`qP'PB~r'xnGx&amp;zb&lt;J
,*{L;yQPo1HO7BbPempJ2n%I.J{8_3J/.60Q2xe3,9aw3|JB3DnmwK@1TH-p&amp;
'(&amp;16@M|Y\w~%)/VH0DB._~KOzz8&lt;e7:T^WZNC&lt;iQj{T]7%!?M\`#+J*ZldC_
?7arE?r1$i]OdzhUp_[6B^{Tx6g05zgtsq?U?Z(bt;^Gum$m?RE`i?@~pffPr
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5c1e4919fd69672b8_3.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">!&amp;q9kq;cTssmtnP|p%e?~VPx8dOH&amp;d'&gt;}2$p]Xjn0Qi~#Jhe]m7G;Af59+(-`
QM[+TKi^Iw2ZDb0ph}Q)A9}hF8N[T&lt;SI)#&amp;yG"3Wc)CI&gt;?1-c!cT}#musD0CP
Se1%lB|3/CJ.yD]0-NJ]tdrzU4O'MZ"z&lt;8I.abc+fllX@cw\$:o;;=VIqj"X[
ryqo5pvyh15sH]W#Va**u#Zkop'&amp;r/S9@Q%)Sx-6x:+vRf{wnCH#(?DLSfFO"
9f.\ZTpUpHN7&amp;U,la`*d6A/QqKEJvf^4ppZ'^r7GB=rw!sf$pGy[6F)8F[\%N
lzSiMH_-~^$hYd.d0]LYDklx8(q,&gt;h"b&lt;U[e{#`lrk`&gt;Jiny(sZ1&lt;L$b8_+oY
P8!F{Gmr7%Jqkm.{~BL`dcN0cfkV\xsy}sqPp7G&amp;iU0Q|?YHOL)/ADUj}b@`"
"c);9%k'5^1-BSJVe{ce&lt;G&lt;[M#4x?qV|i`j^XS^WC=Q+mX|\|FH3fu$Z6*+dc
O?J7ER7=skY/-n%xS_\fxDXp2.Ix@kV5,lby5cS)V9XqRh2t;hlaSq#ro||J9
-*Q1uY40RD3qQTre&lt;M8dpa-Y=P%PXgM:[Jtk`wl&lt;19S4p5+J_FqR&lt;^h^!V?w,
x]DS_1=tiN^9:bAlh1QUHb=F~1$XCEBLoN&amp;!JrBN,|ZMUfPl%;sZYSnyD{pp[
eVn$_y$1Bk+XuqM%kOv:YZj8n!7u^-pPDgU&amp;qW$}84RRi\r&amp;_4nG]Oi.1"iNN
F?txhVv\qQjdB@f}$0z8v&gt;3o`lEo/s,.is@}pD=*-[&amp;,NOuP7S^M|6y\}`YUs
SCAo1$HF&amp;^&amp;r7-pT'$u2zlR/lFZrY=+fLf9`^w("-*&lt;{E&amp;O39bw;*I]olq)Q%
RsO*-OWXl(Ad#8H.G(aEglnbgI69W$}P|NsZL4\IOP3|P-f&gt;@L8cwMM8fWA@)
X`3|)xN.8gD(Mb`jKBZ;9h#((Ua^.yb8Jen7;[zPO&lt;~]Y?7N{y(M8U5/jfBQq
C5\2MiWC@RU2E#T7Eld1`(ox:tEO94wyJ^tS[{5IRCFXz1*J@$^c}h^]K[=o\
=&amp;2g$NAy}t|2o/PFA/r;D_=j`S)fojeca8'1\JXwUwTJBsJj5rE|Wsx`17|J2
(Voz5P1"&gt;'6WIe~dohlsS}MS?w`f|m)hE&amp;,tn(L;q"[7y?~]@?v)9&gt;fZ0nc)o
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5f6a5e232e7beb4be_2.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">eg=IE&gt;1Q|-vo&lt;+y]B8Htp=gl)?{QBj=#i\rCs}|#vx+Lg-$L23|cvQO%?dxQH
7#93]&amp;mm+kfMaM2a_(Kvq:|h6BT,k%D4t/w&lt;(e%8:,0qfHM8&amp;]X4Gd#0,UY!i
f`Fv&lt;Vq_=-A@#!Es86bHs|ru)rqW|gu3)tfY5exALK.UhF["5c7(Oa0L*[W%L
aZq'iEIZ1@_E&lt;;(8-'{i$zSvgdnlk(zD};.e=E[($.57OO2]of:^Js$PXVFD7
*Gsh]qG&lt;7Jf?U/nv$xD~=&lt;wKQ6hBL\ozoov2zC&gt;ziVBm|&amp;]9%2FCV%ey&lt;)5oI
Rv7CTOY"!$5mb|&amp;4~N\K}D[tNy5K6UUkkF`"(t4RM5l&gt;,Yl^"&lt;N&lt;kMV1h*}|H
tTXBOKrh"[;At/mWP|wN3}5LRKQ,(]2'?HC~,^T:+`g1ght^YN&amp;/,%OtrW/"T
3^Ic1*gXI)?G.wFGT=XfA$wBqG^+I:Co3YN+7tHJPvEFjy\oBu*`i$ZV}z&lt;bY
Q$Ac;9&gt;girx&gt;fxUhXHp*zO&amp;yJP'`[V.E=DvLh1\!4atB~0*PoF,C}=^v6cqc1
w9v5pL!X&gt;F\z{87j$`[oV@|@X#R=IYAv=UZ/Iux[pe\T&amp;!9!jTKa=j.~3U1pX
r|AYqtpJ`eiMi%@tC}!OBldpsF-qF5hIMxvPncYp&gt;?lf6%$OKGtJeQ|!HU6%q
FP-W;Y?_){8je&lt;53e]hno)leExDH:\"HgMd2]i#R{2Z]9!\T^,+Cg"!t&gt;Q(P&amp;
:Iz%i&gt;jJrw7NK&amp;BH^J+WvuMpZ=vy9Rbt7rBJjqr'o)6/Icf@,yR[2#r')&gt;g=!
;PCq,B^?kER[aAN~GYBjyXPIioRf|Cu$Pw~3oO$~5B&gt;k(t7V[cds+!&lt;\l3{eJ
A1\BgoF"P[4b`]h=CAdi'&gt;\dnjzNM0m2!X`[10M?NQEBgV*Am)_/hVEfeG/,H
IU"h]H_oJI45oG,Ne-)Xx}F0j9DQ19M!&gt;.Bi?w)&gt;j5?#&lt;OI9wQOp|X~e\66M^
'.!;_S98{6|/(h1t&gt;Mphp/PBnu@8jQSL:};"YEA7G;YwIV0GHP9B/c59XM-zq
}S$RFut|:-.oOwX{VcxQ#7/&gt;vA[Ybc\a()v?SKj#Hy-rKx:0WPZ~#Wl&gt;;L&lt;XK
T"36Ba(rv?dgPXDIh:),2oRLJmI}cuw?n)./-JhtkPv}hIlr&amp;Q3w8E('opm_Q
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5bea2f1b07392d936_4.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">OvDbMM&amp;rQ/S82tjvDiK1[iU.^;.6%qYoE*0r*&gt;\e@\,hexMSy_+m{D$R1?4I9
0X6bv`!?t}xxgB2B#-`--c=V05u1\]{gaU*:'q:["zPn'&amp;C,G'n:p_C7+]}JO
r:~6\Gm?h?V:gdx+ZEyU]GeUu&amp;31{M'0S[v~E{5.sM@Ap0:zs*)pZ]X?*Dr.X
u,o[:S/J~a-H6+W@y'G2&gt;|2]&lt;8=K8D&lt;R2^69zv&lt;+c|1Z9?V:3X#hmNl9#%U&lt;%
&amp;y2Ix04bba-5WL-vt-'oE#ov!{R@]P&lt;x^wk\,C{sK?%P9XJWmiA1Btae=[M'%
(vZh0r9oaNd&gt;-ly1@7{Vb!IZPz&amp;%f|yUuJaR:0&amp;?7Krs'UIL@lZd6Y4gQ"CAm
:6&lt;#)!`n!J}")vfyl(-PS8(1E12dhS=OviSi8"O-/Sa&lt;9T)aJiy|KIur[SOr^
|X$_bGr|8TlB2?!kV#m\.XdycL&amp;9bc\1XIl,8Kh15=nlAk[4o4x#QG+/x2Ea=
az7eH,AHWX%Q!sy1.dQmm~Oo=3`Bw%C!t^oVa['/T8M7RAM}qb(](6KU;\7y?
1?7Y@yD6VjjE@c0k8Cn9k&lt;p{2)+m6ux8O2EXVPI]I:dm/VPb@l}`@.Z%Go&lt;|s
dkIB5jFb[5RdT3ukn}dr/gip*UZJ"mx|s_sZ?XC_Zm`/%fw+7Q+)#!}o&amp;8*^L
F)M#5oXP[SM?M;M13,tUWSAY09w2;8\.B'$&amp;\dBYprePwYg6i!(LMo#FQL`#4
F`z*y}NbDOiU/\[VC-9FTJH-IRO_y0ozOfB*%:!-"%}pSMWX1%8yczEp1(~5@
0.V^[s:SwUV?gKi^c-9})gy@`4H.I.G`6[6bBcBU&amp;gc8%M63b+Y=P&gt;\b'?}QQ
)z;~nPF2mp&gt;A)2_&amp;F;T\_-\$p*Y(/5&amp;~cnzEa/W9;%Oag",I}MAv]Fr24z?W#
i?bIHuFmU,|`BVzExS^iXYUr#~PdsEEK0Cp7?)BL?S`e65qc%Py&lt;@bky};,;h
qIs}[V*[EtS=v/y}swBn,seCM'Qe^@83[y(.Hn@t/y3d-UuEACH`w^SOfW0]@
IkV%dGvU^-X3D=I9{(tlEsW~U}a;2mf)_/430gjB*F)pi=8{n0vI&lt;[=sS[c!:
]-%xug9l|`9jd\fy9b*L9&lt;ZAq:,hfVQ'vjBgyMBm2"^_t(-Ny{9|8~&amp;ff~4F*
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b55e654d1341fb06f8_4.1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">AjSwSpV/O7y93e@=)hjg8U&lt;&amp;9$e2x]Fl`b)t{?u;&lt;XEp*a0v8&amp;1tRS_=9!Jk&lt;
&amp;H-3#yJ(J0W%y[I{qyY{_Cxr^68]K^]unAE}N*hd1xddHW&gt;VRSntX&amp;gwUYxKk
8Y'(R,j4j+o|zIq\nm&lt;-Y4S|f{+Iid?(Z9Z?d|AyFu~2t|Y{LlZoc~a-=VA~=
0SB*Mx/.}TfAUT3DQ^!x,a5o&lt;eC""&amp;&lt;$5ixkP"v^stN'yJw9?B}^X2{SO9\4X
GVLPVy5@Au+pZ&amp;8c)&gt;y`x7n$,a!V*.TSB!1IbS@J8vjVT}:83]I'Q%WU}c^N3
3xQx@Qp~vJQm@S;0p7&amp;@5RFAUi)66qO&gt;/D`&gt;L~98FYf3PD&lt;&amp;jc-1gVC3}0qHD
PhJFn,*e#'`9c-300+]aGeqY)/#9hv^ub1Fwa[9Cs'T"v!pw{7+R`usF-qYEe
Y\J"4^$j(0RkrkuLFTK"-ly!o&lt;m?1o4l+sMHI-[.&amp;{h05pvE_eA-9A@j)&lt;O&amp;C
4L(TsO[)OdqBV1Hxp|7qlhpRl@M4yo?6f^'@/1]eo&gt;?%v:m5HX0"-~*w"oeF`
0"X+7`_~qSa6R`PByJ!(9(2&lt;d(Lr=O[5!M|~Pxm%cfKD^$rQz^SP}zE[W[FVA
(I,F&amp;F?u\ktE(O;0s,dzL84GyVQ[&lt;"MVw+^]HL{Zjj_EAhp;B#C0r~3[PwYuB
.DM1sz3GTlI1&gt;Asr?^WC7.ZKuUT.XFK2xExaFDOMj]8Iq^()5v\f778vopQEK
qSnz!#bL6GT{$]Tdg&gt;1f'xuUI^T4?I]rW&gt;eHE54;jaYxmT`A.fn53'61SH]*}
v^Sn.&gt;DJhmS{$XG4^v}i@0jKu!^1x)&gt;9]T)D.\luCK^z2OA\[oJ,BlM}_hFj.
,ArL))@S/&lt;R\h"v%s,b*h?M4m=9Ud,jetFu#t@)zVLc!RL!V1{T&lt;%s2O%$[e8
z+/|xK1pxi3"m.'d%&amp;gRz_uj}h;ar+Hd^GZ7y7oz4\rcgTpj:6G':&gt;*8e2@{I
x&amp;`:TdmTjBCl."v::hiu-#kX:&amp;B`oB/8W{$`%6otD8qvx(jQngf9:']HJAT:*
P,ck?8q5xlmzOge|&lt;,5b8I5Yrp{v[VGH@PLf9&amp;;mrZgM5z9-h~uwb#rMB:F}#
Ny.}5[j#[q3}RE4r$%!tFGZ^Qd,2fbPii`C~pO[mM`f(QB+8yE;A*1P\$CyqI
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5a080a31ee7154b19_1.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">y[KybE[}/+o&amp;WC"?d{,3$M;"!dNW6UTA6x]g12y})OWB?R15xl6Cw~&gt;)_,*h}
We5g94^dMptczJu6mxO!N&lt;5a1dUmi6C$.c}1/HIAH2F#*K%QHSN$,;}2Cjnj)
k_8ucDpo%rx#l{oy|~@8Bg9~3&lt;}wS:Y:x8YP%QV\+B;)5'W!S~Jym|!lw=ZU|
MA2kvZBV;E7mI!6fJ?ja/[.An\N.\Lh;~yDpK)jt|Hwi4q_J/NqzA}A:Ek6~m
Q8f]#+P#Fc'V):&amp;M,?#{U`{.Z{#/[#qC{\9;F9r]Rw-OY/rCsN"-Do:1-/H2\
'6+&gt;=[.aE#x4}a@O`,PW?P|Eyw{,fe*-{'^~P?,oJcSU;]j[oyS"JHmK_+eK~
rixm)EYR+A"RW"q[=phC.]Pd8'L'+"D?c:ebsbvkVQQs/{l&amp;TePp~M&amp;*a(&amp;\'
Wq.JPGx)*S-2?T0rp=QonNBQZ,YiaDIA5~j|.+0gB(9T&amp;6b[S8Ap9X@4&gt;[+_)
T0L"Q9On"}9$cGY1dYN=dGmXGmPt&amp;v8_G{e9Rm7!v.!MBI&lt;pm&lt;X#}jX#(ZZ,*
-3ldaQFAj{]w]6/V]II2vXJ-Hw:FNE;1"rE9GAsH&amp;q^?)st;EF~G-CsqV7d~Q
KO7~CT#o&gt;)&gt;2\L/}Kyp-Q6Z6/+D[q/D47yFT3ZZ5)v[]4sw"CDtu&lt;8jy6}DJA
&gt;T5M44V-xg{*r&lt;&lt;o$Z!g@J7YM4B&lt;"k;@jcqxuV1py1l:1Fs+OKmoe9=O#TR12
I55O,U@I7Fr4HR\W,5oCzXM3_L?u}v]M#U~BHb-t.fDkx_e7:4:dli4@_I^HZ
Ar,2*mFKi4FX+S}&lt;WO-3pz2I,&amp;)6@Kx/IWehfj!hKsE.R.WGG`j.R!_xkkSsQ
NRO&gt;ckAi(K9poF~32MsP$~OIgAKGLDQ@Xd18iD($LhDVu&gt;ux?v\(zdf&gt;_wT6X
x5pg1U&amp;_^7My]`pEVl=gC`KOb%X3VE2q"It]-@r'(zn.Rl3/I#?F2&gt;GXxQ2pB
b~&amp;$YAC7XEvff2l7}p*#-+AR5jM91%,(%Vn1jhGEIyvEtb}RlY1!AN,?|&amp;bY6
]7L_-RV4Q0KCT9VMG`wvSsOTirf&lt;1ey.kA}`"h^)W6xWS{N.hWaZ6o~%2,U_&lt;
-7=@g""x]j+jGDpat|('*n[i]Kb-K(T&amp;6!'C1CXJ6)2~b7UAt`Nx};'mb:=[`
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5c1e4919fd69672b8_3.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">#4LUf%~&lt;dQY-^yP6wTxz\+M~-!!,du`H{y\e=.?8Jj_d5fCLF,cl*_~}#H8Q5
-jkY)Z18;72J:5XCu.E{tM2]dh1s2EQiS$GU\D(K:XVM&gt;"&amp;,,Lu(p"O")c}CP
UFr'My&gt;rSaGyiBO,[8$U5{L.kx?vY}[O@]3'h5Hz=lsuMOvS&amp;Km7OS#6pm976
=%Xkx[!*/+R3)wuq0/8ReP3J1CFELL-EKKb)/E+MRz{#tF!ow,|Ceu]MC)q7m
nU9N?8[5Gb/0/VaBZZ}iC0FD3sHv7vvg)&amp;L@(JEr:'q8MGf}PzXq1r_K\Ex&lt;"
TQ,?lHF\0961BLg&gt;,y`A"T3m4-`9L.f]=4LU_+gjvkT"50rZnc+rrAkh0H!&gt;W
$gB0&lt;)xRV1DiJeWE*2W=8MZ&gt;V49~(@1=z&gt;"P3bv"uCEB&lt;J04yJL;K(,*d('&amp;X
K\:uX!6%rbe.O7Z5jw5jvsgo]w-l)!Cr8s=7E)aR2g`~9=vm!^'F!.VHCsO)9
k~s_5fl(=|5@T[gRga^D+&lt;SK8^~d=^[pSkLD"`2E&amp;r7]Ya-Eampa2gpB"?d3|
@sdjz^1&lt;}[}l&gt;;DaT3mnYh5&amp;_BC{i7l&gt;\\(q5RE!}=m^D!=/w6Czm.(v7%YMZ
8SOdLM/P+cpwZ/&amp;}n^Y|V!^,hS4#P7f^TjG+JViAQeRNJL;QA(MxhGN(go.D+
pC?PPL`kH$_V`3,,^3P3y%n&gt;%AKM~e[R^ft4;n9T:fB%9&amp;2OgV6vm0iS*z'B5
rdSEq[vR';RWrn|if{Frboxl4&lt;~Is^,\,vR|.JwHY9D}ne:/X;}w{k!Gps,TR
I:T}Y6S!"NihRPyfpHGH=\!'F}LQgU)MIl,F1.Qw|2i5yDtBrO{bImt=g&amp;seW
Bk9jX'UGrwM5W_^"Qak'#Cit&gt;pe-JueKsZU"9@'=`yTc_r+s;A,j]o&amp;&amp;Gg2RO
dGT@"KLAdt,*8msV&lt;uX2m@I98K8))g_L&lt;f)`hR_{A?R4f1Eq&amp;aVruu'90=&gt;KY
gtyt(^JHSHr&gt;q9!{2)&amp;0\3N$a&amp;?V'k$&gt;)2cFrGq#/Do`)3X3dp7:eJx|{&lt;Vfy
fNv5}Q~/`'7R6n:,z.4,ZWPD^YK-yNz74#Im6-`do3Fzs&lt;y6_$(]j-mFD_OTQ
lqdh3!X0~WunfNTExHG0"hW7u]y-Ox5*I|Wo~):RzjLa*vnTbJ$6:?`U%$?&gt;?
</pre></div></div><div class="card-wrapper relative w-[400px] h-[250px] shrink-0"><div class="card-normal card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.4)] z-[2] [clip-path:inset(0_0_0_var(--clip-right,0%))]" style="--clip-right: 0%;"><img alt="Card" class="w-full h-full object-cover rounded-[15px] transition-all duration-300 ease-in-out brightness-110 contrast-110 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] hover:brightness-125 hover:contrast-125" src="https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5f6a5e232e7beb4be_2.png"></div><div class="card-ascii card absolute top-0 left-0 w-full h-full rounded-[15px] overflow-hidden bg-transparent z-[1] [clip-path:inset(0_calc(100%-var(--clip-left,0%))_0_0)]" style="--clip-left: 0%;"><pre class="ascii-content absolute top-0 left-0 w-full h-full text-[rgba(220,210,255,0.6)] font-mono text-[11px] leading-[13px] overflow-hidden whitespace-pre m-0 p-0 text-left align-top box-border [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_30%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.4)_80%,rgba(0,0,0,0.2)_100%)] animate-glitch">NLBL}$&lt;mfgB4z)Dpxh

[TRUNCATED: original length 76173 characters]
```

## Public registry source files

No public registry source files were available.