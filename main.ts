

//% weight=10 color=#FF6600 icon="\uf130"
/**
//% groups='["Settings", "VoiceRecognition", "PlayAudio"]'
*/
namespace ASR_TWO {

    let ai_address = 0x53;

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_getid block="ASR-TWO get ID"
    //% blockSetVariable=ID
    export function getid(): number {
        pins.i2cWriteNumber(ai_address, 0x03, NumberFormat.UInt8BE, true);
        let value = pins.i2cReadNumber(ai_address, NumberFormat.UInt8BE, false);
        return value;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id1 block="ASR-TWO wakeup words|%num"
    export function id1(num: id1): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id11 block="ASR-TWO voice interaction|%num"
    export function id11(num: id11): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id2 block="ASR-TWO light|%num"
    export function id2(num: id2): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id3 block="ASR-TWO doors and windows|%num"
    export function id3(num: id3): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id4 block="ASR-TWO fan|%num"
    export function id4(num: id4): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id5 block="ASR-TWO bath heater|%num"
    export function id5(num: id5): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id6 block="ASR-TWO music|%num"
    export function id6(num: id6): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id7 block="ASR-TWO television|%num"
    export function id7(num: id7): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id8 block="ASR-TWO bath heater|%num"
    export function id8(num: id8): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id9 block="ASR-TWO robot|%num"
    export function id9(num: id9): number {
        return num;
    }

    //% group="VoiceRecognition"
    //% weight=40
    //% blockId=ASR_TWO_id10 block="ASR-TWO measure and query|%num"
    export function id10(num: id10): number {
        return num;
    }

    //% group="PlayAudio"
    //% weight=40
    //% blockId=ASR_TWO_play_audio block="ASR-TWO play audio|%text"
    export function play_audio(text: message): void {
        let msg = "MSG=" + text + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    /**
     * show a digital in given position
     * @param num is position, eg: 1234
     */
    //% group="PlayAudio"
    //% weight=40
    //% blockId=ASR_TWO_play_num block="ASR-TWO play|%text |%num"
    export function play_num(text: numtype, num: number): void {
        let type
        if (text == numtype.Number) {
            type = "NUM"
        } else {
            type = "TEL"
        }
        let msg = type + "=" + num + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    /**
     * show a digital in given position
     * @param num is position, eg: 23
     */
    //% group="PlayAudio"
    //% weight=40
    //% blockId=ASR_TWO_play_humitemp block="ASR-TWO play|%text |%num"
    export function play_humitemp(text: humitemp, num: number): void {
        let ending
        if (text == humitemp.Temperature) {
            ending = "END=6"
        }
        let msg = "MSG=" + text + "NUM=" + num + ending + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    /**
     * show a digital in given position
     * @param num is position, eg: 10
     */
    //% group="PlayAudio"
    //% weight=40
    //% blockId=ASR_TWO_play_distance block="ASR-TWO play distance|%num |%text"
    export function play_distance(num: number, text: distance): void {
        let msg = "MSG=103NUM=" + text + "NUM=" + num + "END=" + text + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    /**
     * show a digital in given position
     * @param num is position, eg: 100
     */
    //% group="PlayAudio"
    //% weight=40
    //% blockId=ASR_TWO_play_weight block="ASR-TWO play weight|%num |%text"
    export function play_weight(num: number, text: weight): void {
        let msg = "MSG=104NUM=" + text + "NUM=" + num + "END=" + text + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    //% group="Settings"
    //% weight=40
    //% blockId=ASR_TWO_play block="ASR-TWO play|%text"
    export function play(text: reserved_voice): void {
        let msg
        if (text == reserved_voice.welcome_once) {
            msg = "WEL=" + text + "\r\n"
        } else {
            msg = "MSG=" + text + "\r\n"
        }
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    //% group="Settings"
    //% weight=40
    //% blockId=ASR_TWO_set_state block="ASR-TWO set state|%text"
    export function set_state(text: set_voice): void {
        let msg = "SET=" + text + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    //% group="PlayAudio" advanced=true
    //% weight=40
    //% blockId=ASR_TWO_set_playmode block="ASR-TWO set playmode|%text"
    export function set_playmode(text: set_voice_order): void {
        let msg = "SET=" + text + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    /**
     * show a digital in given position
     * @param num is position, eg: 15
     */
    //% group="Settings"
    //% weight=40
    //% blockId=ASR_TWO_set_wakeup_timeout block="ASR-TWO set wakeup timeout|%num seconds"
    export function set_wakeup_timeout(num: number): void {
        let msg = "WUT=" + num + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    /**
     * show a digital in given position
     * @param num is position, eg: 15
     */
    //% group="Settings"
    //% weight=40
    //% blockId=ASR_TWO_wakeup block="ASR-TWO wakeup|%num seconds"
    export function wakeup(num: number): void {
        let msg = "WKU=" + num + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }

    /**
     * show a digital in given position
     * @param num is position, eg: 5
     */
    //% group="Settings"
    //% weight=40
    //% blockId=ASR_TWO_set_volume block="ASR-TWO set volume (1~7)|%num"
    export function set_volume(num: number): void {
        let msg = "VOL=" + num + "\r\n"
        let buf = pins.createBuffer(msg.length + 1);
        buf[0] = 4;
        for (let index = 0; index < msg.length; index++) {
            for (let i = 0; i <= 255; i++) {
                if (msg.charAt(index) == String.fromCharCode(i)) {
                    buf[index + 1] = i;
                    break
                }
            }
        }
        pins.i2cWriteBuffer(83, buf, false)
    }


}