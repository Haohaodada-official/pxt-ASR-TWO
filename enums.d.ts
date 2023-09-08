declare const enum message {
    //% block="已执行"
    b1 = 1,
    //% block="好的"
    b2 = 2,
    //% block="已打开"
    b3 = 3,
    //% block="已关闭"
    b4 = 4,
    //% block="已开灯"
    b5 = 5,
    //% block="已关灯"
    b6 = 6,
    //% block="已完成"
    b7 = 7,
    //% block="请稍等"
    b8 = 8,
    //% block="倒计时开始"
    b9 = 9,
    //% block="计时暂停"
    b10 = 10,
    //% block="请重新设置时间"
    b11 = 11,
    //% block="时间到了"
    b12 = 12,
    //% block="同学你好"
    b13 = 13,
    //% block="你叫什么"
    b14 = 14,
    //% block="我也是"
    b15 = 15,
    //% block="下次再见"
    b16 = 16,
    //% block="我在"
    b17 = 17,
    //% block="音量已调整"
    b18 = 18,
    //% block="音量已增大"
    b19 = 19,
    //% block="音量已减小"
    b20 = 20,
    //% block="音量已最大"
    b21 = 21,
    //% block="音量已最小"
    b22 = 22

}

declare const enum numtype {
    //% block="Number"
    Number = 1,
    //% block="Telephone"
    Telephone = 2

}

declare const enum humitemp {
    //% block="Temperature"
    Temperature = 101,
    //% block="Humidity"
    Humidity = 102

}

declare const enum distance {
    //% block="cm"
    cm = 1,
    //% block="mm"
    mm = 2,
    //% block="m"
    m = 3

}

declare const enum weight {
    //% block="g"
    g = 4,
    //% block="kg"
    kg = 5

}

declare const enum reserved_voice {
    //% block="play welcome voice"
    welcome = 10001,
    //% block="play exit voice"
    exit = 10002,
    //% block="play welcome voice once only after power up"
    welcome_once = 1

}

declare const enum set_voice {
    //% block="stop"
    stop = 3,
    //% block="pause"
    pause = 1,
    //% block="resume"
    resume = 2

}

declare const enum set_voice_order {
    //% block="add to the beginning of playlist"
    beginning = 4,
    //% block="add to the end of playlist"
    end = 5

}

declare const enum id1 {
    //% block="好搭同学"
    a49 = 49,
    //% block="小智小智"
    a50 = 50,
    //% block="智能管家"
    a51 = 51

}

declare const enum id2 {
    //% block="打开灯光"
    a52 = 52,
    //% block="关闭灯光"
    a53 = 53,
    //% block="开灯"
    a54 = 54,
    //% block="关灯"
    a55 = 55,
    //% block="打开红灯"
    a56 = 56,
    //% block="关闭红灯"
    a57 = 57,
    //% block="打开绿灯"
    a58 = 58,
    //% block="关闭绿灯"
    a59 = 59,
    //% block="打开蓝灯"
    a60 = 60,
    //% block="关闭蓝灯"
    a61 = 61,
    //% block="打开黄灯"
    a62 = 62,
    //% block="关闭黄灯"
    a63 = 63,
    //% block="打开客厅灯"
    a64 = 64,
    //% block="关闭客厅灯"
    a65 = 65,
    //% block="打开厨房灯"
    a66 = 66,
    //% block="关闭厨房灯"
    a67 = 67,
    //% block="打开卧室灯"
    a68 = 68,
    //% block="关闭卧室灯"
    a69 = 69,
    //% block="打开阳台灯"
    a70 = 70,
    //% block="关闭阳台灯"
    a71 = 71,
    //% block="打开浴室灯"
    a72 = 72,
    //% block="关闭浴室灯"
    a73 = 73,
    //% block="打开照明"
    a74 = 74,
    //% block="关闭照明"
    a75 = 75,
    //% block="打开所有灯"
    a76 = 76,
    //% block="关闭所有灯"
    a77 = 77,
    //% block="灯光调亮"
    a78 = 78,
    //% block="灯光调暗"
    a79 = 79,
    //% block="最大亮度"
    a80 = 80,
    //% block="最小亮度"
    a81 = 81,
    //% block="呼吸模式"
    a82 = 82,
    //% block="炫彩模式"
    a83 = 83,
    //% block="快闪模式"
    a84 = 84,
    //% block="报警模式"
    a85 = 85

}

declare const enum id3 {
    //% block="开门"
    a86 = 86,
    //% block="关门"
    a87 = 87,
    //% block="打开窗户"
    a88 = 88,
    //% block="关闭窗户"
    a89 = 89,
    //% block="打开窗帘"
    a90 = 90,
    //% block="关闭窗帘"
    a91 = 91

}

declare const enum id4 {
    //% block="打开风扇"
    a92 = 92,
    //% block="关闭风扇"
    a93 = 93,
    //% block="风速一档"
    a94 = 94,
    //% block="风速二档"
    a95 = 95,
    //% block="风速三档"
    a96 = 96,
    //% block="风速四档"
    a97 = 97,
    //% block="风速五档"
    a98 = 98,
    //% block="风速最高"
    a99 = 99,
    //% block="风速最低"
    a100 = 100,
    //% block="风扇摇头"
    a101 = 101,
    //% block="停止摇头"
    a102 = 102,
    //% block="快一点"
    a103 = 103,
    //% block="慢一点"
    a104 = 104

}

declare const enum id5 {
    //% block="打开加热"
    a105 = 105,
    //% block="关闭加热"
    a106 = 106,
    //% block="打开暖风"
    a107 = 107,
    //% block="关闭暖风"
    a108 = 108,
    //% block="打开摆风"
    a109 = 109,
    //% block="关闭摆风"
    a110 = 110,
    //% block="打开换气"
    a111 = 111,
    //% block="关闭换气"
    a112 = 112

}

declare const enum id6 {
    //% block="打开空调"
    a113 = 113,
    //% block="关闭空调"
    a114 = 114,
    //% block="十八度"
    a115 = 115,
    //% block="十九度"
    a116 = 116,
    //% block="二十度"
    a117 = 117,
    //% block="二十一度"
    a118 = 118,
    //% block="二十二度"
    a119 = 119,
    //% block="二十三度"
    a120 = 120,
    //% block="二十四度"
    a121 = 121,
    //% block="二十五度"
    a122 = 122,
    //% block="二十六度"
    a123 = 123,
    //% block="二十七度"
    a124 = 124,
    //% block="二十八度"
    a125 = 125,
    //% block="二十九度"
    a126 = 126,
    //% block="三十度"
    a127 = 127,
    //% block="温度加"
    a128 = 128,
    //% block="温度减"
    a129 = 129,
    //% block="上下扫风"
    a130 = 130,
    //% block="左右扫风"
    a131 = 131,
    //% block="制冷模式"
    a132 = 132,
    //% block="制热模式"
    a133 = 133,
    //% block="除湿模式"
    a134 = 134,
    //% block="通风模式"
    a135 = 135,
    //% block="自动模式"
    a136 = 136

}

declare const enum id7 {
    //% block="播放音乐"
    a137 = 137,
    //% block="停止音乐"
    a138 = 138,
    //% block="暂停音乐"
    a139 = 139,
    //% block="上一首"
    a140 = 140,
    //% block="下一首"
    a141 = 141,
    //% block="增大音量"
    a142 = 142,
    //% block="减小音量"
    a143 = 143,
    //% block="最大音量"
    a144 = 144,
    //% block="中等音量"
    a145 = 145,
    //% block="最小音量"
    a146 = 146,
    //% block="静音"
    a147 = 147,
    //% block="收藏"
    a148 = 148

}

declare const enum id8 {
    //% block="菜单"
    a149 = 149,
    //% block="向上"
    a150 = 150,
    //% block="向下"
    a151 = 151,
    //% block="向左"
    a152 = 152,
    //% block="向右"
    a153 = 153,
    //% block="确认"
    a154 = 154,
    //% block="返回"
    a155 = 155

}

declare const enum id9 {
    //% block="开机"
    a156 = 156,
    //% block="关机"
    a157 = 157,
    //% block="停止"
    a158 = 158,
    //% block="前进"
    a159 = 159,
    //% block="后退"
    a160 = 160,
    //% block="左转"
    a161 = 161,
    //% block="右转"
    a162 = 162,
    //% block="加速"
    a163 = 163,
    //% block="减速"
    a164 = 164,
    //% block="抓取"
    a165 = 165,
    //% block="松开"
    a166 = 166,
    //% block="正转"
    a167 = 167,
    //% block="反转"
    a168 = 168,
    //% block="上升"
    a169 = 169,
    //% block="下降"
    a170 = 170,
    //% block="最大角度"
    a171 = 171,
    //% block="最小角度"
    a172 = 172,
    //% block="中等角度"
    a173 = 173,
    //% block="上一个"
    a174 = 174,
    //% block="下一个"
    a175 = 175

}

declare const enum id10 {
    //% block="当前温度"
    a176 = 176,
    //% block="当前湿度"
    a177 = 177,
    //% block="今天天气"
    a178 = 178,
    //% block="当前时间"
    a179 = 179,
    //% block="今天日期"
    a180 = 180,
    //% block="测量距离"
    a181 = 181,
    //% block="测量体温"
    a182 = 182,
    //% block="测试重量"
    a183 = 183,
    //% block="测量身高"
    a184 = 184

}

declare const enum id11 {
    //% block="你好"
    a185 = 185,
    //% block="再见"
    a186 = 186

}